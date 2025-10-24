import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import AnswerOption from "@/components/AnswerOption";
import ExplanationCard from "@/components/ExplanationCard";
import { Button } from "@/components/ui/button";
import { quizData } from "@/data/quizData";
import { ArrowRight } from "lucide-react";

export default function Quiz() {
  const [, params] = useRoute("/quiz/:topicId");
  const [, setLocation] = useLocation();
  const topicId = params?.topicId;

  const topic = quizData.topics.find((t) => t.id === topicId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<{
    questionId: number;
    selectedAnswer: number;
    isCorrect: boolean;
  }>>([]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setUserAnswers([]);
  }, [topicId]);

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Header showBackButton backTo="/" />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Quiz not found</h2>
            <p className="text-muted-foreground">The quiz you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = topic.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([
      ...userAnswers,
      {
        questionId: currentQuestion.id,
        selectedAnswer,
        isCorrect,
      },
    ]);

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setLocation(`/results/${topicId}`, { 
        state: { 
          score, 
          totalQuestions: topic.questions.length,
          userAnswers: [
            ...userAnswers,
            {
              questionId: currentQuestion.id,
              selectedAnswer: selectedAnswer!,
              isCorrect: selectedAnswer === currentQuestion.correctAnswer,
            },
          ],
        } 
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton backTo="/" title={topic.title} />
      <ProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={topic.questions.length}
        score={score}
        showScore={currentQuestionIndex > 0}
      />

      <main className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="space-y-6">
          <QuestionCard
            questionText={currentQuestion.questionText}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={topic.questions.length}
          />

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <AnswerOption
                key={index}
                option={option}
                index={index}
                isSelected={selectedAnswer === index}
                isCorrect={showExplanation && index === currentQuestion.correctAnswer}
                isIncorrect={showExplanation && selectedAnswer === index && index !== currentQuestion.correctAnswer}
                showResult={showExplanation}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              />
            ))}
          </div>

          {!showExplanation && (
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className="px-8"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                data-testid="button-submit-answer"
              >
                Submit Answer
              </Button>
            </div>
          )}

          {showExplanation && (
            <>
              <ExplanationCard
                isCorrect={selectedAnswer === currentQuestion.correctAnswer}
                explanationTitle={currentQuestion.explanation.title}
                explanationText={currentQuestion.explanation.text}
              />

              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  className="px-8"
                  onClick={handleNext}
                  data-testid="button-next-question"
                >
                  {isLastQuestion ? "See Results" : "Next Question"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
