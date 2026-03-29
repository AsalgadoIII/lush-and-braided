import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getStyleAdvice(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            {
              text: `You are an expert AI Hair Stylist for "Lush & Braided", a premium salon specializing in intricate braids. 
              The user is asking for advice on a braid style. 
              Provide a professional, alluring, and encouraging response. 
              Suggest specific braid types (e.g., Knotless, Goddess, Boho, Cornrows) based on their request.
              Keep the tone sophisticated and helpful.
              
              User Request: ${prompt}`,
            },
          ],
        },
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Consultation Error:", error);
    return "I'm sorry, I couldn't generate a consultation right now. Please try again or book a call with our lead stylist.";
  }
}
