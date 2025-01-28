import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { writeFile } from 'fs/promises'

const templatesDir = path.join(process.cwd(), 'public', 'docx-templates')

export async function GET() {
  try {
    const templates = fs.readdirSync(templatesDir)
      .filter(file => file.endsWith('.docx'))
      .map(file => ({
        id: file.replace('.docx', ''),
        name: file.replace('.docx', '').replace(/-/g, ' ')
      }))

    return NextResponse.json({ templates })
  } catch (error) {
    console.error('Error fetching templates:', error)
    return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = file.name.replace(/\s+/g, '-').toLowerCase()
  const filepath = path.join(templatesDir, filename)

  try {
    await writeFile(filepath, buffer)
    return NextResponse.json({ message: 'Template uploaded successfully' })
  } catch (error) {
    console.error('Error saving template:', error)
    return NextResponse.json({ error: 'Failed to save template' }, { status: 500 })
  }
}

