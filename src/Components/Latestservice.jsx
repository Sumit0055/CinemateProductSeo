// "use client"
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/autoplay'

// import bg_1 from '../assets/images/img/bg_1.jpg'
// import bg_2 from '../assets/images/bg/88.jpg'
// import bg_3 from '../assets/images/bg/62.jpg'

// export default function QuoteSection() {
//   return (
//     <section className="ftco-quote ftco-animate">
//       <div className="container">
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           spaceBetween={30}
//           slidesPerView={1}
//         >
//           <SwiperSlide>
//             <div className="row d-flex">
//               <div
//                 className="col-md-9 req-quote py-5 align-items-center img"
//                 style={{ backgroundImage: `url(${bg_1})` }}
//               >
//                 <h3 className="ml-md-3">Wanna be a Model?</h3>
//                 <span className="ml-md-3">
//                   <a href="#">Call us now to know how!</a>
//                 </span>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="row d-flex">
//               <div
//                 className="col-md-9 req-quote py-5 align-items-center img"
//                 style={{ backgroundImage: `url(${bg_2})` }}
//               >
//                 <h3 className="ml-md-3">Capture Your Best Moments</h3>
//                 <span className="ml-md-3">
//                   <a href="#">Book your shoot today!</a>
//                 </span>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="row d-flex">
//               <div
//                 className="col-md-9 req-quote py-5 align-items-center img"
//                 style={{ backgroundImage: `url(${bg_3})` }}
//               >
//                 <h3 className="ml-md-3">Cinematic Photography Experience</h3>
//                 <span className="ml-md-3">
//                   <a href="#">Discover the art of storytelling!</a>
//                 </span>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   )
// }






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
