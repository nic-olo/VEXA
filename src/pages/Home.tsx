import React from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="hero flex-1">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold my-5">Booking an appointment</h1>
            <p className="mb-5">
              Good evening Thomas, this is VEXA. Lets help you book a medical appointment.
            </p>
            <Link to="chat">
              <button className="btn btn-primary">Start</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
