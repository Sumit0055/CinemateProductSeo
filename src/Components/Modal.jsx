"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";

export default function Modal() {
  return (
    <div className="floating-social" aria-label="Social links">
      <a
        href={`https://wa.me/91${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
        aria-label="Chat with Cinemate Production on WhatsApp"
      >
        <FaWhatsapp size={24} aria-hidden="true" />
      </a>
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
        aria-label="Follow Cinemate Production on Instagram"
      >
        <FaInstagram size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
