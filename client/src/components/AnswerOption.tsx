import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  showResult: boolean;
  onClick: () => void;
  disabled: boolean;
}

export default function AnswerOption({
  option,
  index,
  isSelected,
  isCorrect = false,
  isIncorrect = false,
  showResult,
  onClick,
  disabled,
}: AnswerOptionProps) {
  const letters = ["A", "B", "C", "D"];
  
  return (
    <Button
      variant={isSelected && !showResult ? "default" : "outline"}
      className={cn(
        "w-full justify-start text-left p-4 md:p-5 h-auto min-h-[3.5rem] relative transition-all",
        isCorrect && showResult && "border-green-500 bg-green-50 dark:bg-green-950/20",
        isIncorrect && showResult && "border-destructive bg-destructive/5"
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={`button-answer-${index}`}
    >
      <div className="flex items-center gap-3 w-full">
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-md border-2 flex items-center justify-center font-semibold text-sm transition-colors",
            isSelected && !showResult && "border-primary-foreground bg-primary-foreground/10",
            isCorrect && showResult && "border-green-600 bg-green-600 text-white",
            isIncorrect && showResult && "border-destructive bg-destructive text-destructive-foreground",
            !isSelected && !showResult && "border-border"
          )}
        >
          {showResult && isCorrect && <CheckCircle2 className="h-5 w-5" />}
          {showResult && isIncorrect && <XCircle className="h-5 w-5" />}
          {!showResult && letters[index]}
        </div>
        <span className="text-base md:text-lg flex-1">{option}</span>
      </div>
    </Button>
  );
}
