import React from "react";
import { Video } from "../../pages/Chat";

export interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="chat chat-start text-sm sm:text-md my-2">
      <div className="chat-bubble p-5">
        <h2 className="card-title">{video.name}</h2>
        <video controls src={video.url} />
      </div>
    </div>
  );
}
