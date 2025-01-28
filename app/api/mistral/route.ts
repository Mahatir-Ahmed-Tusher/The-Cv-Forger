import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { prompt } = await request.json()

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
  }

  const mistralApiKey = process.env.MISTRAL_API_KEY

  if (!mistralApiKey) {
    return NextResponse.json({ error: "Mistral API key is not configured" }, { status: 500 })
  }

  try {
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mistralApiKey}`,
      },
      body: JSON.stringify({
        model: "mistral-tiny",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful career assistant, providing advice on CVs, job interviews, and career development.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
      }),
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.statusText}`)
    }

    const data = await response.json()
    const aiResponse = data.choices[0].message.content

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error("Error calling Mistral AI:", error)
    return NextResponse.json({ error: "Failed to get response from Mistral AI" }, { status: 500 })
  }
}

