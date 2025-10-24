import { Card } from "@/components/ui/card";
import { Lightbulb, CheckCircle2, XCircle } from "lucide-react";

interface FactSummaryCardProps {
  questionText: string;
  wasCorrect: boolean;
  explanationTitle: string;
  explanationText: string;
  index: number;
}

export default function FactSummaryCard({
  questionText,
  wasCorrect,
  explanationTitle,
  explanationText,
  index,
}: FactSummaryCardProps) {
  return (
    <Card className="p-6" data-testid={`card-fact-${index}`}>
      <div className="flex items-start gap-3 mb-3">
        {wasCorrect ? (
          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
        ) : (
          <XCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
        )}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {questionText}
        </p>
      </div>
      
      <div className="pl-8 space-y-2">
        <div className="flex items-start gap-2">
          <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <h4 className="text-base font-semibold" data-testid={`text-fact-title-${index}`}>
            {explanationTitle}
          </h4>
        </div>
        <p className="text-sm leading-relaxed" data-testid={`text-fact-text-${index}`}>
          {explanationText}
        </p>
      </div>
    </Card>
  );
}
