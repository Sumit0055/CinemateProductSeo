"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStar } from "react-icons/io5";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import bg_7 from "@/assets/images/bg/bg_7.jpg";
import person_1 from "@/assets/images/testimonial/3.jpg";
import person_2 from "@/assets/images/testimonial/2.jpg";
import person_3 from "@/assets/images/testimonial/1.jpg";

const testimonials = [
  {
    image: person_1,
    name: "Kavita Iyer, Bengaluru",
    text: "From candid shots to family portraits, Sneha's photography brought warmth and elegance to our special day.",
  },
  {
    image: person_2,
    name: "Arjun Verma, Jaipur",
    text: "Aman has a magical way of turning simple moments into timeless memories. Highly recommend his work!",
  },
  {
    image: person_3,
    name: "Rohan Mehta, Mumbai",
    text: "The portraits clicked by Ankit are simply stunning. His eye for detail and creativity made my portfolio stand out.",
  },
];

export default function Testimonial() {
  return (
    <section
      className="ftco-section testimony-section img"
      style={{
        backgroundImage: `url(${bg_7.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 mb-5 text-center heading-section ftco-animate">
            <h2 className="mb-4">Clients Says</h2>
            <p>
              At CinemateProduction, I strive to deliver fashion shoots that
              exceed expectations. My focus is on creativity, lighting, and
              editing to ensure world-class results.
            </p>
            <span>
              <IoStar className="text-warning" />{" "}
              <IoStar className="text-warning" />{" "}
              <IoStar className="text-warning" />{" "}
              <IoStar className="text-warning" />{" "}
              <IoStar className="text-warning" />
            </span>
          </div>
        </div>

        <div className="row d-md-flex justify-content-center">
          <div className="col-md-7 ftco-animate">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <div className="testimony-wrap text-center">
                    <div className="user-img mb-5 position-relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={120}
                        height={120}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="text">
                      <p className="mb-5">{testimonial.text}</p>
                      <p className="name">{testimonial.name}</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
