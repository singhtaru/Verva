import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExplanationCardProps {
  isCorrect: boolean;
  explanationTitle: string;
  explanationText: string;
}

export default function ExplanationCard({
  isCorrect,
  explanationTitle,
  explanationText,
}: ExplanationCardProps) {
  return (
    <Card className={cn(
      "p-6 md:p-8 border-2 animate-in fade-in slide-in-from-bottom-4 duration-500",
      isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/20" : "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
    )} data-testid="card-explanation">
      <div className="flex items-start gap-4 mb-4">
        {isCorrect ? (
          <CheckCircle2 className="h-7 w-7 text-green-600 flex-shrink-0 mt-0.5" data-testid="icon-correct" />
        ) : (
          <XCircle className="h-7 w-7 text-orange-600 flex-shrink-0 mt-0.5" data-testid="icon-incorrect" />
        )}
        <div>
          <h3 className={cn(
            "text-xl font-semibold mb-1",
            isCorrect ? "text-green-800 dark:text-green-200" : "text-orange-800 dark:text-orange-200"
          )} data-testid="text-result">
            {isCorrect ? "Correct!" : "Incorrect"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isCorrect ? "Well done! Here's the science behind it:" : "That's okay! Here's what you need to know:"}
          </p>
        </div>
      </div>

      <div className="pl-11 space-y-3">
        <div className="flex items-start gap-2">
          <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <h4 className="text-lg font-semibold" data-testid="text-explanation-title">
            {explanationTitle}
          </h4>
        </div>
        <p className="text-base leading-relaxed text-foreground" data-testid="text-explanation-text">
          {explanationText}
        </p>
      </div>
    </Card>
  );
}
