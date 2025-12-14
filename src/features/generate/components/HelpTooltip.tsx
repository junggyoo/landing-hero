import { HelpCircle } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function HelpTooltip() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<button
						type="button"
						className="text-muted-foreground hover:text-foreground transition-colors"
						aria-label="도움말 보기"
					>
						<HelpCircle className="h-5 w-5" />
					</button>
				</TooltipTrigger>
				<TooltipContent>
					<div className="space-y-2 max-w-xs text-xs">
						<p className="font-semibold">작성 가이드</p>
						<ul className="list-disc pl-4 space-y-1">
							<li>서비스의 핵심 가치와 타겟 고객을 포함해보세요.</li>
							<li>구체적인 스타일이나 분위기를 묘사하면 더 좋습니다.</li>
							<li>비속어나 보안상 위험한 태그는 사용할 수 없습니다.</li>
							<li>최소 10자, 최대 500자까지 작성 가능합니다.</li>
						</ul>
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
