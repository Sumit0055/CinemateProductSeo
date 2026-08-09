"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import bg_2 from "@/assets/images/logo/ai.png";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ title = "Page" }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const overlay = heroRef.current.querySelector(".overlay");
      const copy = heroRef.current.querySelectorAll(".breadcrumbs, .bread");

      if (reduceMotion) {
        gsap.set([overlay, copy], { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.from(overlay, {
        autoAlpha: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(copy, {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      <section
        className="hero-wrap"
        aria-labelledby="page-hero-title"
        style={{
          backgroundImage: `url(${bg_2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="container">
          <div className="row no-gutters text align-items-end justify-content-center">
            <div className="col-md-8 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">Home</Link>
                </span>{" "}
                <span aria-current="page">{title}</span>
              </p>
              <h1 id="page-hero-title" className="mb-5 bread">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
