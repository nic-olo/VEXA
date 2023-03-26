import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-base-200 px-5 py-1">
      <Link to="/">
        <img src="/vexa logo.jpeg" alt="Logo" width="100" height="50" />
      </Link>
    </div>
  );
}
