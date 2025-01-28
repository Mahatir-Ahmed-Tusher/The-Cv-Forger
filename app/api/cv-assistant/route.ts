import { NextResponse } from 'next/server'
import natural from 'natural'
import fs from 'fs'
import path from 'path'

const tokenizer = new natural.WordTokenizer()
const TfIdf = natural.TfIdf

// Read the questions and answers from the file
let qaList: { question: string; answer: string }[] = []

try {
  const data = fs.readFileSync(path.join(process.cwd(), 'public', 'cv_qa.txt'), 'utf8')
  qaList = data.split('\n\n').map(qa => {
    const [question, ...answerParts] = qa.split('\n')
    return { question: question.substring(3), answer: answerParts.join('\n') }
  })
} catch (error) {
  console.error('Error reading cv_qa.txt:', error)
}

// Create a TF-IDF model
const tfidf = new TfIdf()

// Add documents to the model
qaList.forEach((qa, index) => {
  tfidf.addDocument(tokenizer.tokenize(qa.question.toLowerCase()), index.toString())
})

function findBestMatch(userQuestion: string) {
  const userTokens = tokenizer.tokenize(userQuestion.toLowerCase())
  let bestMatchIndex = -1
  let bestMatchScore = -1

  tfidf.tfidfs(userTokens, (index, measure) => {
    if (measure > bestMatchScore) {
      bestMatchScore = measure
      bestMatchIndex = parseInt(index)
    }
  })

  if (bestMatchIndex !== -1 && bestMatchScore > 0.1) {
    return qaList[bestMatchIndex].answer
  } else {
    return "I'm sorry, I couldn't find a good match for your question. Could you please rephrase or ask something else?"
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (!body || typeof body.question !== 'string') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const answer = findBestMatch(body.question)
    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Error in CV assistant API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

