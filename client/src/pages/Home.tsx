import Header from "@/components/Header";
import TopicCard from "@/components/TopicCard";
import { quizData } from "@/data/quizData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-home-title">
            Learn the Science Behind Women's Health
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-home-description">
            Test your knowledge and discover detailed scientific explanations for each answer. 
            Understanding the "why" is just as important as knowing the facts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizData.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              id={topic.id}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              questionCount={topic.questionCount}
              estimatedMinutes={topic.estimatedMinutes}
            />
          ))}
        </div>
      </main>

      <footer className="border-t py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-sm text-center text-muted-foreground">
            Educational content for informational purposes only. 
            Consult healthcare professionals for medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
