// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import 'swiper/css/pagination';

// // import './GalleryPage.css';

// // import required modules
// import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

// // ----------Import Images for the gallery-----------
// import image1 from '../assets/images/gallery/1.jpg';
// import image2 from '../assets/images/gallery/2.jpg';
// import image3 from '../assets/images/gallery/3.jpg';
// import image4 from '../assets/images/gallery/4.jpg';
// import image5 from '../assets/images/gallery/5.jpg';
// import image6 from '../assets/images/gallery/6.jpg';
// import image7 from '../assets/images/gallery/7.jpg';
// import image8 from '../assets/images/gallery/8.jpg';
// import image9 from '../assets/images/gallery/9.jpg';
// import image10 from '../assets/images/gallery/10.jpg';
// import image11 from '../assets/images/gallery/11.jpg';
// import image12 from '../assets/images/gallery/12.jpg';
// import image13 from '../assets/images/gallery/13.jpg';
// // import image14 from '../assets/images/gallery/14.jpg';
// import image15 from '../assets/images/gallery/15.jpg';

// export default function GalleryPage() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="gallery-container">
//       {/* <h2 className="gallery-title text-danger">Gallery</h2> */}

//       {/* Main Slider */}
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         pagination={{ clickable: true }}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs, Pagination]}
//         className="mySwiper2"
//       >
//         {[
//           `${image1}`,
//           `${image2}`,
//           `${image13}`,
//           `${image4}`,
//           `${image5}`,
//           `${image6}`,
//           `${image7}`,
//           `${image8}`,
//           `${image11}`,
//           `${image10}`,
//           `${image12}`,
//           `${image13}`,
//         //   `${image14}`,
//           `${image15}`,

//         ].map((src, index) => (
//           <SwiperSlide key={index}>
//             <img src={src} alt={`Gallery ${index + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnail Slider */}
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {[
//           `${image1}`,
//           `${image2}`,
//           `${image13}`,
//           `${image4}`,
//           `${image5}`,
//           `${image6}`,
//           `${image7}`,
//           `${image8}`,
//           `${image11}`,
//           `${image10}`,
//           `${image12}`,
//           `${image13}`,
//         //   `${image14}`,
//           `${image15}`,
//         ].map((src, index) => (
//           <SwiperSlide key={index}>
//             <img src={src} alt={`Thumb ${index + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

// ----------Import Images for the gallery-----------
import image1 from "@/assets/images/gallery/1.jpg";
import image2 from "@/assets/images/gallery/2.jpg";
import image3 from "@/assets/images/gallery/3.jpg";
import image4 from "@/assets/images/gallery/4.jpg";
import image5 from "@/assets/images/gallery/5.jpg";
import image6 from "@/assets/images/gallery/6.jpg";
import image7 from "@/assets/images/gallery/7.jpg";
import image8 from "@/assets/images/gallery/8.jpg";
import image9 from "@/assets/images/gallery/9.jpg";
import image10 from "@/assets/images/gallery/10.jpg";
import image11 from "@/assets/images/gallery/11.jpg";
import image12 from "@/assets/images/gallery/12.jpg";
import image13 from "@/assets/images/gallery/13.jpg";
import image45 from "@/assets/images/gallery/45.jpg";
import Image from "next/image";

export default function GalleryPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Array of images
  const images = [
    // image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image45,
  ];

  return (
    <div className="gallery-container">
      {/* Main Slider */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              sizes="100vw"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt={`Thumb ${index + 1}`} sizes="25vw" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
