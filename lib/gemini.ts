
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateDentalImage(prompt: string, aspectRatio: "1:1" | "16:9" | "9:16" | "3:4" | "4:3" = "16:9") {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `${prompt}. Ultra-high resolution, cinematic lighting, hyper-realistic, 8k, professional photography, high-end aesthetic.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Failed to generate image:", error);
    return null;
  }
  return null;
}
