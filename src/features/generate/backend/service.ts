import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

export interface PromptCompletionRequest {
	prompt: string;
}

export interface PromptCompletionResult {
	original: string;
	suggestion: string;
	notes?: string;
}

const SYSTEM_PROMPT = `
You are an expert copywriter for landing pages.
Analyze the user's prompt for a hero section and suggest a more detailed, visually descriptive, and professional version.
The output MUST be a valid JSON object with the following structure:
{
  "original": "The user's original prompt",
  "suggestion": "The improved prompt",
  "notes": "Brief explanation of improvements (optional)"
}
Keep the suggestion concise but descriptive enough for an AI image/code generator.
Ensure the suggestion is in the same language as the original prompt.
`;

const BANNED_WORDS = ["비속어", "욕설", "spam"]; // Same as client-side for consistency

function checkSafety(prompt: string) {
	if (BANNED_WORDS.some((word) => prompt.toLowerCase().includes(word))) {
		throw new Error("비속어 또는 금지된 단어가 포함되어 있습니다.");
	}
}

export async function completePrompt(
	req: PromptCompletionRequest
): Promise<PromptCompletionResult> {
	checkSafety(req.prompt);

	const provider = process.env.AI_PROVIDER || "OPENAI";

	try {
		if (provider === "GEMINI") {
			return await completeWithGemini(req.prompt);
		} else {
			return await completeWithOpenAI(req.prompt);
		}
	} catch (error: any) {
		console.error("AI Completion Error:", error);
		if (error.status === 429) {
			console.error("Rate Limit Exceeded:", error);
			throw new Error(
				"AI 서비스 이용 한도가 초과되었습니다. OpenAI 결제 크레딧(Billing)을 확인하거나 잠시 후 다시 시도해주세요."
			);
		}
		if (error.status === 401) {
			console.error("Authentication Error:", error);
			throw new Error(
				"AI 서비스 인증에 실패했습니다. API 키가 올바른지 확인해주세요."
			);
		}
		throw new Error(`AI 응답을 받아오는데 실패했습니다. (${error.message})`);
	}
}

async function completeWithOpenAI(
	prompt: string
): Promise<PromptCompletionResult> {
	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey) throw new Error("OPENAI_API_KEY is not configured");

	const openai = new OpenAI({ apiKey });
	const response = await openai.chat.completions.create({
		model: "gpt-4o-mini",
		messages: [
			{ role: "system", content: SYSTEM_PROMPT },
			{ role: "user", content: prompt },
		],
		response_format: { type: "json_object" },
	});

	const content = response.choices[0].message.content;
	if (!content) throw new Error("No response from OpenAI");

	return JSON.parse(content);
}

async function completeWithGemini(
	prompt: string
): Promise<PromptCompletionResult> {
	const apiKey = process.env.GEMINI_API_KEY;
	if (!apiKey) throw new Error("GEMINI_API_KEY is not configured");

	const genAI = new GoogleGenerativeAI(apiKey);
	const model = genAI.getGenerativeModel({
		model: "gemini-2.5-flash",
		generationConfig: { responseMimeType: "application/json" },
	});

	const result = await model.generateContent([SYSTEM_PROMPT, prompt]);
	const response = result.response;
	const text = response.text();

	return JSON.parse(text);
}
