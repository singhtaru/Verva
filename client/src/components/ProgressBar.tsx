interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  showScore?: boolean;
}

export default function ProgressBar({
  currentQuestion,
  totalQuestions,
  score,
  showScore = false,
}: ProgressBarProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-card border-b">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium" data-testid="text-question-progress">
            Question {currentQuestion} of {totalQuestions}
          </span>
          {showScore && (
            <span className="text-sm font-medium text-primary" data-testid="text-current-score">
              Score: {score}/{currentQuestion - 1}
            </span>
          )}
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
            data-testid="progress-bar"
          />
        </div>
      </div>
    </div>
  );
}
