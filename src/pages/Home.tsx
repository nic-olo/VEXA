import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero flex-1">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold my-5">Medical Checkup</h1>
          <p className="mb-5">
            Answer a few questions, do some checkups and we'll help you find the
            right doctor for
          </p>
          <Link to="chat">
            <button className="btn btn-primary">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
