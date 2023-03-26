import React from "react";

export interface BaseCardProps {
  message: string;
}

export default function BaseCard({ message }: BaseCardProps) {
  return (
    <div className="chat chat-start text-sm sm:text-md my-2">
      <div className="chat-bubble p-5">
        <h2 className="card-title">{message}</h2>
      </div>
    </div>
  );
}
