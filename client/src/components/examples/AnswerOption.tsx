import { useState } from "react";
import AnswerOption from "../AnswerOption";

export default function AnswerOptionExample() {
  const [selected, setSelected] = useState(0);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Before Answer</h3>
        <div className="space-y-3">
          <AnswerOption
            option="True"
            index={0}
            isSelected={selected === 0}
            showResult={false}
            onClick={() => setSelected(0)}
            disabled={false}
          />
          <AnswerOption
            option="False"
            index={1}
            isSelected={selected === 1}
            showResult={false}
            onClick={() => setSelected(1)}
            disabled={false}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">After Answer (Correct)</h3>
        <div className="space-y-3">
          <AnswerOption
            option="A drop in the hormone estrogen"
            index={1}
            isSelected={true}
            isCorrect={true}
            showResult={true}
            onClick={() => {}}
            disabled={true}
          />
          <AnswerOption
            option="Decreased calcium intake"
            index={0}
            isSelected={false}
            showResult={true}
            onClick={() => {}}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
