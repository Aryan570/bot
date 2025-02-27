"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

const systemPrompt = `You are a specialized CDP (Customer Data Platform) assistant that only answers questions related to:
- Segment (docs.segment.com)
- mParticle (docs.mparticle.com)
- Lytics (docs.lytics.com)
- Zeotap (docs.zeotap.com)

If a question is not related to these CDPs or their documentation, respond with:
"I can only answer questions about Segment, mParticle, Lytics, or Zeotap CDP platforms. Please ask a CDP-related question."

For CDP-related questions, provide clear, step-by-step guidance based on the official documentation.`;

export const getGeminiResponse = async (prompt: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const fullPrompt = `${systemPrompt}\n\nUser Question: ${prompt}`;
  const result = await model.generateContent(fullPrompt);
  const response = result.response;
  console.log(response.candidates![0].content);
  return response.text();
};