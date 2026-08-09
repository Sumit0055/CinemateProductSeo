"use client";

import image_1 from "@/assets/images/footer/61.jpg";
import image_2 from "@/assets/images/footer/175.jpg";
import Link from "next/link";
import Latestservice from "./Latestservice";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <>
      <Latestservice />
      <footer className="ftco-footer ftco-section img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">{siteConfig.siteName}</h2>
                <p>
                  Cinemate Production captures timeless memories with creative
                  photography, blending cinematic style and artistic vision to
                  deliver premium, heartfelt stories for every occasion.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a
                      href={`https://wa.me/91${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <span className="icon icon-whatsapp"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href={siteConfig.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <FooterPost image={image_1} date="July 12, 2018" />
                <FooterPost image={image_2} date="April 2, 2020" />
              </div>
            </div>

            <div className="col-md-2">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Site Links</h2>
                <ul className="list-unstyled">
                  <li><Link href="/" className="py-2 d-block">Home</Link></li>
                  <li><Link href="/about" className="py-2 d-block">About</Link></li>
                  <li><Link href="/model" className="py-2 d-block">Models</Link></li>
                  <li><Link href="/#services" className="py-2 d-block">Services</Link></li>
                  <li><Link href="/memories" className="py-2 d-block">Memories</Link></li>
                  <li><Link href="/gallery" className="py-2 d-block">Gallery</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <a href={`tel:${siteConfig.phone}`}>
                        <span className="icon icon-phone"></span>
                        <span className="text">+91 {siteConfig.phone}</span>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${siteConfig.email}`}>
                        <span className="icon icon-envelope"></span>
                        <span className="text">{siteConfig.email}</span>
                      </a>
                    </li>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">{siteConfig.address}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                All Copyright &copy; {new Date().getFullYear()} reserved | This
                template is made with <i className="icon-heart" aria-hidden="true"></i> by {" "}
                <Link href="/">{siteConfig.siteName}</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterPost({ image, date }) {
  return (
    <div className="block-21 mb-4 d-flex">
      <Link
        href="/memories"
        className="blog-img mr-4"
        style={{ backgroundImage: `url(${image.src})` }}
        aria-label="Open recent memories"
      />
      <div className="text">
        <h3 className="heading">
          <Link href="/memories">Cinematic production memories</Link>
        </h3>
        <div className="meta">
          <div><Link href="/memories"><span className="icon-calendar"></span> {date}</Link></div>
          <div><Link href="/memories"><span className="icon-person"></span> Cinemate</Link></div>
          <div><Link href="/memories"><span className="icon-chat"></span> 19</Link></div>
        </div>
      </div>
    </div>
  );
}
