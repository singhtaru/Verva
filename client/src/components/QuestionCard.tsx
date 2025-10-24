import { Card } from "@/components/ui/card";

interface QuestionCardProps {
  questionText: string;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({
  questionText,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <Card className="p-8 md:p-12">
      <div className="mb-3">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground" data-testid="text-question-label">
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>
      <h2 className="text-xl md:text-2xl font-semibold leading-relaxed" data-testid="text-question">
        {questionText}
      </h2>
    </Card>
  );
}
