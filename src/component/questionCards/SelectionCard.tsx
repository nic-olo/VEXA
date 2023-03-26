import React from "react";

export interface SelectionCardProps {
  question: string;
  options: string[];
  selectChoice: (option: string) => void;
}

export default function SelectionCard({
  question,
  options,
  selectChoice,
}: SelectionCardProps) {
  return (
    <div className="chat chat-start text-sm sm:text-md my-2">
      <div className="chat-bubble chat-bubble-primary p-5">
        <h2 className="card-title">{question}</h2>
        <div className="mt-3">
          {options.map((option, i) => (
            <button
              key={i}
              className="btn btn-sm mr-3"
              onClick={() => selectChoice(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
