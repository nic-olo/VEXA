import React from "react";

export default function EndingCard() {
  return (
    <div className="chat chat-start text-sm sm:text-md my-2">
      <div className="chat-bubble chat-bubble-primary p-5">
        <h2 className="card-title">All done!</h2>
        <p className="mb-3">
          Thank you for bearing with us, our practice will contact you shortly
          via a platform notification, email and SMS to confirm your appointment
          slot.
        </p>
      </div>
    </div>
  );
}
