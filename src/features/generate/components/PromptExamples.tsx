import { Button } from "@/components/ui/button";

const EXAMPLES = [
	"AI 기반 캘린더 앱 런칭을 위한 모던하고 미니멀한 히어로 섹션",
	"친환경 스킨케어 브랜드의 신뢰감을 주는 따뜻한 분위기의 소개 페이지",
	"개발자 도구 SaaS를 위한 다크 모드 기반의 강렬하고 테크니컬한 디자인",
];

interface PromptExamplesProps {
	onSelect: (prompt: string) => void;
}

export function PromptExamples({ onSelect }: PromptExamplesProps) {
	return (
		<div className="space-y-2">
			<p className="text-sm text-muted-foreground font-medium">
				예시 프롬프트:
			</p>
			<div className="flex flex-wrap gap-2">
				{EXAMPLES.map((example, index) => (
					<Button
						key={index}
						variant="outline"
						size="sm"
						className="h-auto py-2 px-3 text-xs text-left whitespace-normal"
						onClick={() => onSelect(example)}
						type="button"
					>
						{example}
					</Button>
				))}
			</div>
		</div>
	);
}
