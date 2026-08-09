"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import bg_1 from "@/assets/images/bg/62.jpg";
import bg_2 from "@/assets/images/bg/88.jpg";
import bg_3 from "@/assets/images/bg/115.jpg";
import bg_4 from "@/assets/images/bg/145.jpg";

const slides = [
  {
    image: bg_1,
    eyebrow: "Wedding Films",
    title: "Cinematic Wedding Stories",
    text: "Premium photography and films for memories that feel alive.",
  },
  {
    image: bg_2,
    eyebrow: "Fashion Shoots",
    title: "Creative Portrait Sessions",
    text: "Editorial frames, refined lighting, and production-ready edits.",
  },
  {
    image: bg_3,
    eyebrow: "Events",
    title: "Corporate Event Coverage",
    text: "Sharp, dependable coverage for launches, shows, and gatherings.",
  },
  {
    image: bg_4,
    eyebrow: "Commercial",
    title: "Brand Visual Production",
    text: "Still and motion work built around your product and campaign.",
  },
];

const AUTOPLAY_DELAY = 4200;

export default function Slider() {
  const rootRef = useRef(null);
  const slideRefs = useRef([]);
  const timerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const isPaused = isHovered || isFocused;

  const startAutoplay = useCallback(() => {
    window.clearInterval(timerRef.current);

    if (isPaused || reduceMotion || slides.length < 2) {
      return;
    }

    timerRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);
  }, [isPaused, reduceMotion]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener?.("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => window.clearInterval(timerRef.current);
  }, [startAutoplay]);

  useEffect(() => {
    if (!rootRef.current) return undefined;

    const ctx = gsap.context(() => {
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        gsap.killTweensOf(slide);
        gsap.set(slide, {
          autoAlpha: index === activeIndex ? 1 : 0,
          scale: index === activeIndex ? 1 : 1.04,
          zIndex: index === activeIndex ? 2 : 1,
        });
      });

      const activeSlide = slideRefs.current[activeIndex];
      if (!activeSlide || reduceMotion) return;

      const content = activeSlide.querySelectorAll(
        ".position, h1, p, .slider-actions"
      );

      gsap.fromTo(
        activeSlide,
        { autoAlpha: 0, scale: 1.04 },
        { autoAlpha: 1, scale: 1, duration: 0.9, ease: "power2.out" }
      );
      gsap.fromTo(
        content,
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [activeIndex, reduceMotion]);

  const goToSlide = useCallback(
    (index) => {
      const nextIndex = (index + slides.length) % slides.length;
      setActiveIndex(nextIndex);
      startAutoplay();
    },
    [startAutoplay]
  );

  const moveSlide = useCallback(
    (direction) => {
      goToSlide(activeIndex + direction);
    },
    [activeIndex, goToSlide]
  );

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveSlide(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveSlide(1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goToSlide(slides.length - 1);
    }
  };

  return (
    <section
      ref={rootRef}
      className="home-slider owl-carousel gsap-home-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Cinemate Production highlights"
      aria-live={isPaused ? "polite" : "off"}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            className={`slider-item ${isActive ? "is-active" : ""}`}
            key={slide.title}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            style={{
              backgroundImage: `url(${slide.image.src})`,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? "visible" : "hidden",
              pointerEvents: isActive ? "auto" : "none",
            }}
            aria-hidden={!isActive}
            inert={!isActive}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row slider-text justify-content-start align-items-center">
                <div className="col-md-8 col-lg-7 col-sm-12 text mb-4">
                  <span className="position">{slide.eyebrow}</span>
                  <h1 className="mb-3">{slide.title}</h1>
                  <p className="mb-4">{slide.text}</p>
                  <p className="slider-actions">
                    <Link href="/about" className="btn btn-primary px-4 py-3">
                      Read more
                    </Link>{" "}
                    <Link
                      href="/gallery"
                      className="btn btn-primary btn-outline-primary px-4 py-3"
                    >
                      View Gallery
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="owl-dots" aria-label="Choose a slide">
        {slides.map((slide, index) => (
          <button
            type="button"
            className={`owl-dot ${activeIndex === index ? "active" : ""}`}
            aria-label={`Show ${slide.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => goToSlide(index)}
            key={slide.title}
          >
            <span aria-hidden="true"></span>
          </button>
        ))}
      </div>
    </section>
  );
}
