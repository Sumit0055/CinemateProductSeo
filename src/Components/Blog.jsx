"use client";
import React from "react";
import image_1 from "@/assets/images/blog/1.jpg";
import image_2 from "@/assets/images/blog/2.jpg";
import image_3 from "@/assets/images/blog/36.jpg";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 mb-5 heading-section ftco-animate">
            <h2 className="mb-4">Recent Memories</h2>
            <p className="mb-5">
              Capturing stories through creative photography and cinematic visuals.
            </p>
            <p className="btn-view">
              {/* Next.js Link with href */}
              <Link href="/model">View more</Link>
            </p>
          </div>

          {/* Blog 1 */}
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link
                href="/memories"
                className="block-20"
                style={{ backgroundImage: `url(${image_1.src})` }}
              />
              <div className="text pt-4 d-block">
                <div className="meta mb-3">
                  <div><Link href="/">August 12, 2018</Link></div>
                  <div><Link href="/">Admin</Link></div>
                  <div>
                    <Link href="/" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </Link>
                  </div>
                </div>
                <h3 className="heading mt-3">
                  <Link href="/memories">Fashion Shoot Insights</Link>
                </h3>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link
                href="/memories"
                className="block-20"
                style={{ backgroundImage: `url(${image_2.src})` }}
              />
              <div className="text pt-4 d-block">
                <div className="meta mb-3">
                  <div><Link href="/">August 12, 2018</Link></div>
                  <div><Link href="/">Admin</Link></div>
                  <div>
                    <Link href="/" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </Link>
                  </div>
                </div>
                <h3 className="heading mt-3">
                  <Link href="/memories">Wedding Photography Tips</Link>
                </h3>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link
                href="/memories"
                className="block-20"
                style={{ backgroundImage: `url(${image_3.src})` }}
              />
              <div className="text pt-4 d-block">
                <div className="meta mb-3">
                  <div><Link href="/">August 12, 2018</Link></div>
                  <div><Link href="/">Admin</Link></div>
                  <div>
                    <Link href="/" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </Link>
                  </div>
                </div>
                <h3 className="heading mt-3">
                  <Link href="/memories">Corporate Event Highlights</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
