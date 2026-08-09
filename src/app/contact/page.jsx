import ContactPage from '@/PageComponents/ContactPage'
import React from 'react'

export const metadata = {
  title: "Contact",
  description:
    "Contact Cinemate Production for photography, video production, wedding films, fashion shoots, and event coverage.",
  alternates: {
    canonical: "/contact",
  },
};

export default function page() {
  return (
    <>
    <ContactPage/>
    </>
  )
}
