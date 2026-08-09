// import React from 'react'
// import image_1 from '@/assets/images/model/8.jpg'
// import image_2 from '@/assets/images/model/18.jpg'
// import image_3 from '@/assets/images/model/21.jpg'
// import image_4 from '@/assets/images/model/24.jpg'
// import image_5 from '@/assets/images/model/29.jpg'
// import image_6 from '@/assets/images/model/32.jpg'
// import image_7 from '@/assets/images/model/38.jpg'
// import image_8 from '@/assets/images/model/40.jpg'
// import image_9 from '@/assets/images/model/72.jpg'
// import Link from 'next/link'
// import Image from "next/image";

// export default function SecondModel() {
// 	return (
// 		<>
// 			<section className="ftco-section-2">
// 				<div className="container-fluid">
// 					<div className="row d-flex no-gutters">
// 						<div className="col-md-6 d-flex align-items-center heading-section ftco-animate bg-light">
// 							<div className="col-md-9">
// 								<div className="p-5">
// 									<h2 className="mb-4">Our Top Capture Photos</h2>
// 									<p>Far far away, behind the word mountains, far from the countries Vokalia </p>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<Image className="model-img" style={{ backgroundImage: `url(${image_1})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91{import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</Image>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_2})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_3})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_4})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_5})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_6})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_7})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_8})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 model-entry ftco-animate">
// 							<div className="model-img" style={{ backgroundImage: `url(${image_9})` }}>
// 								<div className="name">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 								</div>
// 								<div className="text">
// 									<h3><a href="model-single.html">Cinemate Production</a></h3>
// 									<div className="d-flex models-info">
// 										<div className="pr-md-3">
// 											<p>Location</p>
// 											<span>Delhi/NCR</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Contact Us</p>
// 											<span>+91 {import.meta.env.VITE_PHONE}</span>
// 										</div>
// 										<div className="pr-md-3">
// 											<p>Queries</p>
// 											<Link to="/contact" onClick={() => window.location.href = "/contact"} className="btn btn-primary">Contact Us</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-md-3 d-flex justify-content-center align-items-center bg-light ftco-animate">
// 							<div className="btn-view">
// 								<p>
// 									<Link
// 										to="/model"
// 										onClick={(e) => {
// 											e.preventDefault();           // default SPA navigation rok do
// 											window.location.href = "/model"; // force full page reload
// 										}}
// 									>
// 										View more
// 									</Link>
// 								</p>
// 							</div>

// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	)
// }


// ```jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import image_1 from "@/assets/images/model/8.jpg";
import image_2 from "@/assets/images/model/18.jpg";
import image_3 from "@/assets/images/model/21.jpg";
import image_4 from "@/assets/images/model/24.jpg";
import image_5 from "@/assets/images/model/29.jpg";
import image_6 from "@/assets/images/model/32.jpg";
import image_7 from "@/assets/images/model/38.jpg";
import image_8 from "@/assets/images/model/40.jpg";
import image_9 from "@/assets/images/model/72.jpg";

export default function SecondModel() {

  const phone = process.env.NEXT_PUBLIC_PHONE || "";

  const models = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
  ];

  return (
    <>
      <section className="ftco-section-2">
        <div className="container-fluid">
          <div className="row d-flex no-gutters">

            {/* ================================
                LEFT CONTENT SECTION
            ================================= */}

            <div className="col-md-6 d-flex align-items-center heading-section ftco-animate bg-light">

              <div className="col-md-9">

                <div className="p-5">

                  <h2 className="mb-4">
                    Our Top Capture Photos
                  </h2>

                  <p>
                    Far far away, behind the word mountains,
                    far from the countries Vokalia
                  </p>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 1
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_1}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                  priority
                />

                {/* MODEL NAME */}

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>


                {/* HOVER CONTENT */}

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    {/* LOCATION */}

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>


                    {/* PHONE */}

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>


                    {/* CONTACT */}

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 2
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_2}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 3
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_3}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 4
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_4}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 5
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_5}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 6
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_6}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 7
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_7}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 8
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_8}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                MODEL 9
            ================================= */}

            <div className="col-md-3 model-entry ftco-animate">

              <div className="model-img">

                <Image
                  src={image_9}
                  alt="Cinemate Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="model-image"
                />

                <div className="name">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                </div>

                <div className="text">

                  <h3>
                    <Link href="/model">
                      Cinemate Production
                    </Link>
                  </h3>

                  <div className="d-flex models-info">

                    <div className="pr-md-3">

                      <p>
                        Location
                      </p>

                      <span>
                        Delhi/NCR
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Contact Us
                      </p>

                      <span>
                        +91 {phone}
                      </span>

                    </div>

                    <div className="pr-md-3">

                      <p>
                        Queries
                      </p>

                      <Link
                        href="/contact"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================
                VIEW MORE
            ================================= */}

            <div className="col-md-3 d-flex justify-content-center align-items-center bg-light ftco-animate">

              <div className="btn-view">

                <p>

                  <Link href="/model">
                    View more
                  </Link>

                </p>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

