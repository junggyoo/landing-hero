import { useMutation } from "@tanstack/react-query";
import { PromptCompletionResponse } from "../schema";

export const usePromptCompletionMutation = () => {
	return useMutation({
		mutationFn: async ({
			prompt,
		}: {
			prompt: string;
		}): Promise<PromptCompletionResponse> => {
			const response = await fetch("/api/prompt/complete", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ prompt }),
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(
					errorData.error || "AI 자동 보완 중 오류가 발생했습니다."
				);
			}

			return response.json();
		},
	});
};
