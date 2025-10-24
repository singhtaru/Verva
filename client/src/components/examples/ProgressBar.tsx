import ProgressBar from "../ProgressBar";

export default function ProgressBarExample() {
  return (
    <div className="space-y-8">
      <ProgressBar currentQuestion={1} totalQuestions={8} score={0} showScore={false} />
      <ProgressBar currentQuestion={5} totalQuestions={8} score={3} showScore={true} />
      <ProgressBar currentQuestion={8} totalQuestions={8} score={7} showScore={true} />
    </div>
  );
}
