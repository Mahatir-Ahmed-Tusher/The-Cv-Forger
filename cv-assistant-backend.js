import natural from 'natural'
import fs from 'fs'

const tokenizer = new natural.WordTokenizer()
const TfIdf = natural.TfIdf

// Read the questions and answers from the file
const data = fs.readFileSync('cv_qa.txt', 'utf8')
const qaList = data.split('\n\n').map(qa => {
  const [question, ...answerParts] = qa.split('\n')
  return { question: question.substring(3), answer: answerParts.join('\n') }
})

// Create a TF-IDF model
const tfidf = new TfIdf()

// Add documents to the model
qaList.forEach((qa, index) => {
  tfidf.addDocument(tokenizer.tokenize(qa.question.toLowerCase()), index.toString())
})

function findBestMatch(userQuestion) {
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

// Example usage
const userQuestions = [
  "Why is a good CV important?",
  "How long should my CV be?",
  "What's the difference between a CV and a resume?",
  "Can you help me write a cover letter?",
  "What font should I use for my CV?"
]

userQuestions.forEach(question => {
  console.log(`User: ${question}`)
  console.log(`Assistant: ${findBestMatch(question)}`)
  console.log()
})

