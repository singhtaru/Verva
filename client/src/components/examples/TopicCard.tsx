import TopicCard from "../TopicCard";
import menopauseIcon from "@assets/generated_images/Menopause_topic_illustration_164b2d31.png";

export default function TopicCardExample() {
  return (
    <div className="max-w-sm">
      <TopicCard
        id="menopause"
        title="The Biology of Menopause"
        description="Understand the hormonal changes and biological processes during menopause"
        icon={menopauseIcon}
        questionCount={8}
        estimatedMinutes={5}
      />
    </div>
  );
}
