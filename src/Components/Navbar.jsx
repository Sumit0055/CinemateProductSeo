"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import bg_2 from "@/assets/images/bg/62.jpg";
import { siteConfig } from "@/lib/siteConfig";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/model", label: "Models" },
  { href: "/memories", label: "Memories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/service", label: "Service" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  const isActive = useCallback(
    (href) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname?.startsWith(`${href}/`);
    },
    [pathname]
  );

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-show", isOpen);

    return () => {
      document.body.classList.remove("menu-show");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, isOpen]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => setIsOpen(false));
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  const navigationLinks = useMemo(
    () =>
      navItems.map((item, index) => (
        <li className={isActive(item.href) ? "active" : ""} key={item.href}>
          <Link href={item.href} onClick={() => closeMenu(false)}>
            <span>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {item.label}
            </span>
          </Link>
        </li>
      )),
    [closeMenu, isActive]
  );

  return (
    <>
      <div className="page">
        <nav
          id="colorlib-main-nav"
          className={isOpen ? "menu-open" : ""}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          <button
            type="button"
            className={`js-colorlib-nav-toggle colorlib-nav-toggle ${
              isOpen ? "show active" : ""
            }`}
            aria-label="Close navigation menu"
            aria-controls="colorlib-main-nav"
            aria-expanded={isOpen}
            onClick={() => closeMenu(true)}
          >
            <i aria-hidden="true"></i>
          </button>

          <div className="js-fullheight colorlib-table">
            <div
              className="img"
              aria-hidden="true"
              style={{
                backgroundImage: `url(${bg_2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="colorlib-table-cell js-fullheight">
              <div className="row no-gutters">
                <div className="col-md-12 text-center">
                  <h1 className="mb-4">
                    <Link href="/" className="logo" onClick={() => closeMenu(false)}>
                      {siteConfig.webName}
                      <br />
                      <span>{siteConfig.webName2}</span>
                    </Link>
                  </h1>
                  <ul>{navigationLinks}</ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div id="colorlib-page">
        <header>
          <div className="colorlib-navbar-brand">
            <Link className="colorlib-logo" href="/" onClick={() => closeMenu(false)}>
              {siteConfig.webName}
              <br />
              <span>{siteConfig.webName2}</span>
            </Link>
          </div>
          <button
            ref={triggerRef}
            id="colorlib-nav-toggle"
            type="button"
            className={`js-colorlib-nav-toggle colorlib-nav-toggle ${
              isOpen ? "active" : ""
            }`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="colorlib-main-nav"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <i aria-hidden="true"></i>
          </button>
        </header>
      </div>
    </>
  );
}
