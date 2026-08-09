import Link from "next/link";
import HeroSection from "@/Components/HeroSection";

export const metadata = {
  title: "Page Not Found",
  description: "The requested Cinemate Production page could not be found.",
};

export default function NotFound() {
  return (
    <>
      <HeroSection title="Page not found" />
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-text">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/" className="error-button">
          Go Back
        </Link>
      </div>
    </>
  );
}
