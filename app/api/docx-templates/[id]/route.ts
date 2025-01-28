import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import mammoth from 'mammoth'
import { Docx } from 'docx'

const templatesDir = path.join(process.cwd(), 'public', 'docx-templates')

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const filePath = path.join(templatesDir, `${id}.docx`)

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  const fileBuffer = fs.readFileSync(filePath)
  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename=${id}.docx`,
    },
  })
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const { content } = await request.json()
  const filePath = path.join(templatesDir, `${id}.docx`)

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  try {
    const doc = new Docx.Document()
    doc.addSection({
      properties: {},
      children: [
        new Docx.Paragraph({
          children: [new Docx.TextRun(content)],
        }),
      ],
    })

    const buffer = await Docx.Packer.toBuffer(doc)
    fs.writeFileSync(filePath, buffer)

    return NextResponse.json({ message: 'Template updated successfully' })
  } catch (error) {
    console.error('Error updating template:', error)
    return NextResponse.json({ error: 'Failed to update template' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const filePath = path.join(templatesDir, `${id}.docx`)

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  try {
    fs.unlinkSync(filePath)
    return NextResponse.json({ message: 'Template deleted successfully' })
  } catch (error) {
    console.error('Error deleting template:', error)
    return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 })
  }
}

