import React from "react";

export default function CheckBoxCard() {
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Checkbox</span>
          </label>
          <input type="checkbox" className="checkbox" />
        </div>
      </div>
    </div>
  );
}