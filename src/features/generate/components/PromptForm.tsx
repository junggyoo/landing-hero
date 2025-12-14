"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
	promptSchema,
	type PromptFormValues,
	type PromptCompletionResponse,
} from "../schema";
import { usePromptCompletionMutation } from "../hooks/usePromptCompletionMutation";
import { HelpTooltip } from "./HelpTooltip";
import { PromptExamples } from "./PromptExamples";
import { SuggestionPanel } from "./SuggestionPanel";

export function PromptForm() {
	const { toast } = useToast();
	const [suggestion, setSuggestion] = useState<PromptCompletionResponse | null>(
		null
	);
	const { control, handleSubmit, formState, setValue, watch } =
		useForm<PromptFormValues>({
			resolver: zodResolver(promptSchema),
			defaultValues: {
				prompt: "",
			},
			mode: "onChange",
		});

	const promptValue = watch("prompt");
	const characterCount = promptValue.length;
	const { mutate, isPending } = usePromptCompletionMutation();

	const onSubmit = (data: PromptFormValues) => {
		mutate(data, {
			onSuccess: (result) => {
				setSuggestion(result);
				toast({
					title: "AI 제안 생성 완료",
					description: "개선된 프롬프트를 확인하고 적용해보세요.",
				});
			},
			onError: (error) => {
				toast({
					title: "오류 발생",
					description:
						error.message || "요청을 처리하는 중 문제가 발생했습니다.",
					variant: "destructive",
				});
			},
		});
	};

	const handleAcceptSuggestion = () => {
		if (suggestion) {
			setValue("prompt", suggestion.suggestion, { shouldValidate: true });
			setSuggestion(null);
			toast({
				title: "적용 완료",
				description: "제안된 문구가 적용되었습니다.",
			});
		}
	};

	const handleRejectSuggestion = () => {
		setSuggestion(null);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
			e.preventDefault();
			handleSubmit(onSubmit)();
		}
	};

	return (
		<div className="w-full max-w-3xl mx-auto space-y-6">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<Controller
					name="prompt"
					control={control}
					render={({ field, fieldState }) => (
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="prompt" className="text-lg font-semibold">
									히어로 섹션 설명
								</Label>
								<HelpTooltip />
							</div>

							<div className="relative">
								<Textarea
									{...field}
									id="prompt"
									placeholder="만들고 싶은 랜딩페이지의 히어로 섹션을 자세히 설명해주세요. (예: 30대 직장인을 위한 재테크 앱, 신뢰감을 주는 파란색 계열, 강조된 CTA 버튼...)"
									className={cn(
										"min-h-[200px] resize-none text-base p-4",
										fieldState.error &&
											"border-destructive focus-visible:ring-destructive"
									)}
									aria-invalid={!!fieldState.error}
									onKeyDown={handleKeyDown}
									disabled={isPending || !!suggestion}
								/>
								<div className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
									<span
										className={cn(
											characterCount > 500 ? "text-destructive" : ""
										)}
									>
										{characterCount}
									</span>
									/500
								</div>
							</div>

							{fieldState.error && (
								<p
									role="alert"
									className="text-sm font-medium text-destructive"
								>
									{fieldState.error.message}
								</p>
							)}
						</div>
					)}
				/>

				{suggestion && (
					<SuggestionPanel
						original={suggestion.original}
						suggestion={suggestion.suggestion}
						notes={suggestion.notes}
						onAccept={handleAcceptSuggestion}
						onReject={handleRejectSuggestion}
					/>
				)}

				{!suggestion && (
					<>
						<PromptExamples
							onSelect={(text) =>
								setValue("prompt", text, { shouldValidate: true })
							}
						/>

						<div className="flex justify-end pt-4">
							<Button
								type="submit"
								size="lg"
								className="w-full sm:w-auto font-semibold"
								disabled={!formState.isValid || isPending}
							>
								{isPending ? (
									<>
										<Loader2 className="mr-2 h-5 w-5 animate-spin" />
										생성 중...
									</>
								) : (
									<>
										<Wand2 className="mr-2 h-5 w-5" />
										AI로 자동 보완하기
										<span className="ml-2 text-xs opacity-70 font-normal hidden sm:inline-block">
											(Cmd + Enter)
										</span>
									</>
								)}
							</Button>
						</div>
					</>
				)}
			</form>
		</div>
	);
}
