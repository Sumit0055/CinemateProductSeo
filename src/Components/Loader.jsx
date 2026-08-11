"use client"
import React from "react";

export default function Loader() {
  return (
    <>
      {/* Loader */}
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"   // 👈 camelCase
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"   // 👈 camelCase
            strokeMiterlimit="10" // 👈 camelCase
            stroke="#F96D00"
          />
        </svg>
      </div>
    </>
  );
}

