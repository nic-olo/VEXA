import React from "react";

export interface VideoCardProps {
  description: string;
  url: string;
  clickYes: () => void;
  clickNo: () => void;
}

export default function VideoCard({
  description,
  url,
  clickYes,
  clickNo,
}: VideoCardProps) {
  return (
    <div className="chat chat-start text-sm sm:text-md my-2">
      <div className="chat-bubble p-5">
        <h2 className="card-title mb-3">{description}</h2>
        <div>
          <iframe
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
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
