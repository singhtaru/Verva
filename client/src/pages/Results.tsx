import { useRoute, useLocation, Link } from "wouter";
import Header from "@/components/Header";
import FactSummaryCard from "@/components/FactSummaryCard";
import { Button } from "@/components/ui/button";
import { quizData } from "@/data/quizData";
import { Trophy, RotateCcw, Home } from "lucide-react";

export default function Results() {
  const [, params] = useRoute("/results/:topicId");
  const [, navigate] = useLocation();
  const topicId = params?.topicId;

  const topic = quizData.topics.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Header showBackButton backTo="/" />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Results not found</h2>
            <p className="text-muted-foreground">Unable to load quiz results.</p>
          </div>
        </div>
      </div>
    );
  }

  // todo: remove mock functionality - In real app, this will come from quiz state
  const mockScore = Math.floor(topic.questions.length * 0.75);
  const totalQuestions = topic.questions.length;
  const percentage = Math.round((mockScore / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage >= 90) return "Outstanding! You have excellent knowledge!";
    if (percentage >= 70) return "Great job! You know your facts!";
    if (percentage >= 50) return "Good effort! Keep learning!";
    return "Nice try! Review the facts below to improve.";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton backTo="/" title="Quiz Results" />

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Trophy className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4" data-testid="text-final-score">
            {mockScore}/{totalQuestions}
          </h2>
          
          <p className="text-xl mb-2" data-testid="text-score-percentage">
            You scored {percentage}%
          </p>
          
          <p className="text-lg text-muted-foreground" data-testid="text-result-message">
            {getMessage()}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Facts You Learned
          </h3>
          
          <div className="space-y-4">
            {topic.questions.map((question, index) => {
              // todo: remove mock functionality - Track actual user answers
              const wasCorrect = Math.random() > 0.3;
              
              return (
                <FactSummaryCard
                  key={question.id}
                  questionText={question.questionText}
                  wasCorrect={wasCorrect}
                  explanationTitle={question.explanation.title}
                  explanationText={question.explanation.text}
                  index={index}
                />
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate(`/quiz/${topicId}`)}
            className="w-full"
            data-testid="button-retake-quiz"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Retake This Quiz
          </Button>
          
          <Link href="/">
            <Button
              size="lg"
              className="w-full"
              data-testid="button-try-another"
            >
              <Home className="mr-2 h-4 w-4" />
              Try Another Quiz
            </Button>
          </Link>
        </div>
      </main>

      <footer className="border-t py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <p className="text-sm text-center text-muted-foreground">
            Keep learning and stay informed about women's health topics
          </p>
        </div>
      </footer>
    </div>
  );
}
