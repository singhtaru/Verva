import FactSummaryCard from "../FactSummaryCard";

export default function FactSummaryCardExample() {
  return (
    <div className="max-w-4xl space-y-4">
      <FactSummaryCard
        questionText="What is the primary biological reason for increased osteoporosis risk after menopause?"
        wasCorrect={true}
        explanationTitle="The Science: Estrogen & Bone Density"
        explanationText="While all options can contribute, the primary driver is estrogen. Estrogen plays a crucial role in regulating bone turnover."
        index={0}
      />
      
      <FactSummaryCard
        questionText="True or False: Hot flashes are a psychological symptom, not a biological one."
        wasCorrect={false}
        explanationTitle="Fact: It's Biological!"
        explanationText="Hot flashes are a direct biological response caused by the body's thermostat becoming more sensitive to temperature changes."
        index={1}
      />
    </div>
  );
}
