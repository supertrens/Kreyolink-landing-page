"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <header className="sticky top-0 z-50 bg-[#E6F4FF] py-4">
      <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <Image
            src="/img/logo.png"
            alt="KreyoLink logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="#how"
            className="text-zinc-900 hover:text-[#6366f1] transition-colors"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="text-zinc-900 hover:text-[#6366f1] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#directory"
            className="text-zinc-900 hover:text-[#6366f1] transition-colors"
          >
            Directory
          </Link>
          <Link
            href="#community"
            className="text-zinc-900 hover:text-[#6366f1] transition-colors"
          >
            Community
          </Link>
          <Link
            href="#download"
            className="bg-[#6366f1] hover:bg-[#4F46E5] text-white px-6 py-2 rounded-lg transition-colors"
          >
            Download Now
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm">🇺🇸</span>
            <span className="text-sm">🇫🇷</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 block md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-zinc-900" />
          ) : (
            <Menu className="h-6 w-6 text-zinc-900" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
            fixed inset-0 md:hidden
            transition-all duration-500 ease-in-out
            ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}
          `}
        >
          {/* Backdrop */}
          <div
            className={`
              absolute inset-0 bg-white/90 backdrop-blur-md
              transition-opacity duration-500
              ${isMenuOpen ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* Menu Content */}
          <nav
            className={`
              absolute inset-0 h-full flex flex-col items-center justify-center
              transition-all duration-500 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }
            `}
          >
            <ul className="space-y-8">
              <li>
                <Link
                  href="#how"
                  className="text-3xl font-medium text-zinc-900 hover:text-[#6366f1] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-3xl font-medium text-zinc-900 hover:text-[#6366f1] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#directory"
                  className="text-3xl font-medium text-zinc-900 hover:text-[#6366f1] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Directory
                </Link>
              </li>
              <li>
                <Link
                  href="#community"
                  className="text-3xl font-medium text-zinc-900 hover:text-[#6366f1] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="#download"
                  className="bg-[#6366f1] text-white px-8 py-3 rounded-lg text-2xl font-medium hover:bg-[#4F46E5] transition-colors inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Now
                </Link>
              </li>
              <li className="flex gap-4 justify-center pt-4">
                <span className="text-xl">🇺🇸</span>
                <span className="text-xl">🇫🇷</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
