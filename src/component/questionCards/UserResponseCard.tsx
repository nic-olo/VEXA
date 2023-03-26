import React from "react";

export interface UserResponseCardProps {
  message: string;
}

export default function userResponseCard({ message }: UserResponseCardProps) {
  return (
    <div className="chat chat-end text-sm sm:text-md my-2">
      <div className="chat-bubble p-5">
        <h2 className="card-title">{message}</h2>
      </div>
    </div>
  );
}
