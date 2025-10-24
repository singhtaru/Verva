import ExplanationCard from "../ExplanationCard";

export default function ExplanationCardExample() {
  return (
    <div className="max-w-3xl space-y-6">
      <ExplanationCard
        isCorrect={true}
        explanationTitle="The Science: Estrogen & Bone Density"
        explanationText="While all options can contribute, the primary driver is estrogen. Estrogen plays a crucial role in regulating bone turnover (the process of breaking down old bone and building new bone). Specifically, it restrains the cells that break down bone (osteoclasts). When estrogen levels drop during menopause, these cells become more active, leading to faster bone loss."
      />
      
      <ExplanationCard
        isCorrect={false}
        explanationTitle="Fact: It's Biological!"
        explanationText="Hot flashes are a direct biological response. They are caused by the body's 'thermostat' (the hypothalamus in the brain) becoming more sensitive to slight changes in body temperature. This happens because of declining estrogen levels, which help regulate the hypothalamus."
      />
    </div>
  );
}
