import React, { useMemo } from "react";
import { diff_match_patch } from "diff-match-patch";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check, X, Sparkles } from "lucide-react";

interface SuggestionPanelProps {
	original: string;
	suggestion: string;
	notes?: string;
	onAccept: () => void;
	onReject: () => void;
}

export function SuggestionPanel({
	original,
	suggestion,
	notes,
	onAccept,
	onReject,
}: SuggestionPanelProps) {
	const diffs = useMemo(() => {
		const dmp = new diff_match_patch();
		const d = dmp.diff_main(original, suggestion);
		dmp.diff_cleanupSemantic(d);
		return d;
	}, [original, suggestion]);

	return (
		<Card className="w-full border-primary/20 bg-primary/5 animate-in fade-in slide-in-from-bottom-2">
			<CardHeader className="pb-3">
				<CardTitle className="text-lg flex items-center gap-2">
					<Sparkles className="h-5 w-5 text-primary" />
					AI 제안 확인
					{notes && (
						<span className="text-sm font-normal text-muted-foreground ml-auto">
							{notes}
						</span>
					)}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="text-base leading-relaxed p-4 bg-background rounded-md border whitespace-pre-wrap">
					{diffs.map((diff, index) => {
						const [type, text] = diff;
						// 0: equal, 1: insert, -1: delete
						if (type === 0) {
							return <span key={index}>{text}</span>;
						} else if (type === 1) {
							return (
								<span
									key={index}
									className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 font-medium px-0.5 rounded"
								>
									{text}
								</span>
							);
						} else {
							return (
								<span
									key={index}
									className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 line-through decoration-red-500 decoration-2 opacity-70 px-0.5 rounded"
								>
									{text}
								</span>
							);
						}
					})}
				</div>
			</CardContent>
			<CardFooter className="flex justify-end gap-2 pt-0">
				<Button variant="ghost" onClick={onReject} size="sm">
					<X className="mr-2 h-4 w-4" />
					취소 (원문 사용)
				</Button>
				<Button onClick={onAccept} size="sm">
					<Check className="mr-2 h-4 w-4" />
					제안 적용하기
				</Button>
			</CardFooter>
		</Card>
	);
}
