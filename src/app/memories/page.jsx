import BlogPage from '@/PageComponents/BlogPage'
import React from 'react'

export const metadata = {
  title: "Memories",
  description:
    "Browse Cinemate Production memories, photography stories, and event highlights.",
  alternates: {
    canonical: "/memories",
  },
};

export default function page() {
  return (
    <>
    <BlogPage/>
    </>
  )
}
