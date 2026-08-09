import AboutPage from '@/PageComponents/AboutPage'
import React from 'react'

export const metadata = {
  title: "About Us",
  description:
    "Learn about Cinemate Production, a creative photography and video production team serving Delhi NCR and India.",
  alternates: {
    canonical: "/about",
  },
};

export default function page() {
  return (
    <>
    <AboutPage/>
    </>
  )
}
