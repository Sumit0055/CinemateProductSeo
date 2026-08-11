import Blog from "@/Components/Blog";
import GalleryPage from "@/PageComponents/GalleryPage";

export const metadata = {
  title: "Gallery",
  description:
    "View Cinemate Production gallery featuring wedding, fashion, model, and event photography.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryRoute() {
  return <>
  <GalleryPage /> <Blog/></>;
}
