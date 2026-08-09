import ModelPage from '@/PageComponents/ModelPage'
import React from 'react'

export const metadata = {
  title: "Portfolio",
  description:
    "Explore Cinemate Production portfolio work across portraits, fashion, events, weddings, and commercial shoots.",
  alternates: {
    canonical: "/model",
  },
};

export default function page() {
  return (
    <>
    <ModelPage/>
    </>
  )
}
