import React from "react";

interface YesNoCardProps {
  question: string;
}

export default function YesNoCard({ question }: YesNoCardProps) {
  const clickYes = () => {
    console.log("Yes");
  };

  const clickNo = () => {
    console.log("No");
  };

  return (
    <div className="chat chat-start text-sm sm:text-md my-2">
      <div className="chat-bubble p-5">
        <h2 className="card-title">{question}</h2>
        <div className="flex gap-3 mt-3">
          <button className="btn btn-sm btn-success" onClick={clickYes}>
            Yes
          </button>
          <button className="btn btn-sm btn-error" onClick={clickNo}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
