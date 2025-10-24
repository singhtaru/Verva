import QuestionCard from "../QuestionCard";

export default function QuestionCardExample() {
  return (
    <div className="max-w-3xl">
      <QuestionCard
        questionText="True or False: Hot flashes are a psychological symptom, not a biological one."
        questionNumber={1}
        totalQuestions={8}
      />
    </div>
  );
}
