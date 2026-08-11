"use client";
import React from "react";
import bg_1 from "@/assets/images/img/bg_1.jpg";

export default function Latestservice() {
  return (
    <section className="ftco-quote ftco-animate">
      <div className="container">
        <div className="row d-flex">
          <div
            className="col-md-9 req-quote py-5 align-items-center img"
            style={{
              backgroundImage: `url(${bg_1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="ml-md-3">Cinematic Photography Experience</h3>
            <span className="ml-md-3">
              <a href="/contact">Discover the art of storytelling!</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
