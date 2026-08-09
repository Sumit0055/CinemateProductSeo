"use client";

import { useRef, useState } from "react";
import HeroSection from "../Components/HeroSection";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (isSending || !form.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        siteConfig.emailJs.serviceId,
        siteConfig.emailJs.templateId,
        form.current,
        siteConfig.emailJs.publicKey
      );
      form.current.reset();
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <HeroSection title="Contact us" />
      <ToastContainer />

      <section className="ftco-section contact-section contact-page">
        <div className="container mt-5">
          <div className="row block-9">
            <div className="col-md-4 order-last contact-info">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Phone:</span>{" "}
                    <a href={`tel:${siteConfig.phone}`}>+91 {siteConfig.phone}</a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Email:</span>{" "}
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Address:</span> {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-1 contact-spacer" aria-hidden="true"></div>

            <div className="col-md-6 order-first contact-form">
              <h3 className="text-center">Any Queries</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label className="sr-only" htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="contact-phone">Your mobile number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your Mobile Number"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="contact-email">Your email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary py-3 px-5"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
