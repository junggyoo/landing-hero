"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { promptSchema, type PromptFormValues } from "../schema";
import { usePromptCompletionMutation } from "../hooks/usePromptCompletionMutation";
import { HelpTooltip } from "./HelpTooltip";
import { PromptExamples } from "./PromptExamples";

export function PromptForm() {
	const { toast } = useToast();
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
			onSuccess: () => {
				toast({
					title: "자동 보완 시작",
					description: "AI가 히어로 섹션을 생성하고 있습니다.",
				});
			},
			onError: () => {
				toast({
					title: "오류 발생",
					description: "요청을 처리하는 중 문제가 발생했습니다.",
					variant: "destructive",
				});
			},
		});
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
			</form>
		</div>
	);
}
