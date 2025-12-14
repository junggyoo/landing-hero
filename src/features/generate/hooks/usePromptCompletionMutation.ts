import { useMutation } from "@tanstack/react-query";

// TODO: T-005에서 실제 API 연동 구현 예정
export const usePromptCompletionMutation = () => {
	return useMutation({
		mutationFn: async ({ prompt }: { prompt: string }) => {
			// Mock API call
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log("Submitting prompt:", prompt);
			return { success: true };
		},
	});
};
