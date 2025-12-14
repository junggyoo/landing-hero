import { z } from "zod";

const BANNED_WORDS = ["비속어", "욕설", "spam"];
const DANGEROUS_TAGS = [
	"<script",
	"<iframe",
	"<object",
	"<embed",
	"javascript:",
	"onload=",
	"onclick=",
];

export const promptSchema = z.object({
	prompt: z
		.string()
		.min(10, "최소 10자 이상 입력해주세요.")
		.max(500, "최대 500자까지 입력 가능합니다.")
		.refine(
			(val) => !BANNED_WORDS.some((word) => val.toLowerCase().includes(word)),
			{ message: "비속어 또는 금지된 단어가 포함되어 있습니다." }
		)
		.refine(
			(val) => !DANGEROUS_TAGS.some((tag) => val.toLowerCase().includes(tag)),
			{ message: "보안상 허용되지 않는 태그가 포함되어 있습니다." }
		),
});

export type PromptFormValues = z.infer<typeof promptSchema>;
