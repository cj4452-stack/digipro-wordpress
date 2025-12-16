import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize the client only if the key is available to avoid errors during static analysis if env is missing
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateResponseStream = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<AsyncGenerator<string, void, unknown> | null> => {
  if (!ai) {
    console.error("Gemini API Key is missing.");
    return null;
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Eres "FerretBot", un asistente experto y amable de la ferretería "Digipro".
        Tu objetivo es ayudar a los clientes a encontrar herramientas, dar consejos de bricolaje y explicar las diferencias entre herramientas eléctricas (por ejemplo, Stanford vs Toro Negro).
        Mantén las respuestas concisas (menos de 100 palabras) y amigables. Usa emojis ocasionalmente.
        Si te preguntan por precios, di que pueden consultar la sección de "Ofertas", pero que los precios pueden variar.`,
      },
      history: history.map(h => ({ role: h.role, parts: h.parts })),
    });

    const resultStream = await chat.sendMessageStream({ message });
    
    async function* streamGenerator() {
      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("Error calling Gemini:", error);
    return null;
  }
};