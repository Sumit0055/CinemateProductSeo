"use client";

import GlobalAnimations from "@/Components/GlobalAnimations";
import Modal from "@/Components/Modal";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function MasterLayout({ children }) {
  return (
    <>
      <Navbar />
      <GlobalAnimations />
      <Modal />
      {children}
      <Footer />
    </>
  );
}
