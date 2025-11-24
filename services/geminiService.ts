import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVibeCheck = async (mood: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a supportive, witty, and relatable indie hacker coding buddy. 
      The user is an indie builder who is feeling: "${mood}".
      Give them a short, punchy "Vibe Check" motivation or advice. 
      Use slang like "ship it", "LGTM", "deploy", "bugs", "coffee".
      Keep it under 2 sentences. Make it sound like a tweet from a cool tech founder.`,
    });
    return response.text || "Keep shipping, builder! You got this.";
  } catch (error) {
    console.error("Gemini Vibe Check Error:", error);
    return "The API is compiling... but your vibe is already 100%. Keep building!";
  }
};
