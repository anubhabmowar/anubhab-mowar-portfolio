"use client";

import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoColor from "@/public/anubhab-mowar.png";
import logoMono from "@/public/anubhab-mowar-bw.png";


const links = ["Academics", "Projects", "Experience", "Tech-stack"];

export default function RandomLetterSwapNav() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 pr-6 pl-8 pt-6">
      {/* Left: logo */}
      <Link
        href="/"
        className="group relative flex justify-self-start items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/40 focus-visible:border-primary/40 focus-visible:bg-primary/40 motion-reduce:transition-none"
        style={{ WebkitBackdropFilter: "blur(40px) saturate(1.5)" }}
      >
        {/* Specular top sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-linear-to-b from-white/25 to-transparent"
        />

        {/* Logo swap: default cyan logo -> hover monochrome logo */}
        <span className="relative z-10 h-8 w-8 overflow-hidden rounded-full">
          <Image
            className="absolute inset-0 h-full w-full rounded-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none"
            src={logoColor}
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            className="absolute inset-0 h-full w-full rounded-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
            src={logoMono}
            alt=""
            aria-hidden
            width={100}
            height={100}
          />
        </span>
      </Link>

      {/* Center: floating pill menu */}
      <nav
        className="relative flex items-center gap-1 overflow-hidden rounded-full border border-white/20 bg-white/10 px-2 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl backdrop-saturate-150"
        style={{ WebkitBackdropFilter: "blur(40px) saturate(1.5)" }}
        aria-label="Primary"
      >
        {/* Specular top sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-linear-to-b from-white/25 to-transparent"
        />

        {links.map((link) => (
          <RandomLetterSwap
            className="relative z-10 cursor-pointer rounded-full px-4 py-1.5 font-medium text-muted-foreground text-sm transition-all duration-300 hover:bg-primary/40 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
            key={link}
            label={link}
            staggerDuration={0.025}
            transition={{ duration: 0.6, type: "spring" }}
          />
        ))}
      </nav>

      {/* Right: contact button — Flow Button hover effect */}
      <a
        href="#contact"
        className="group relative flex justify-self-end items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/40 hover:bg-white/10"
        style={{ WebkitBackdropFilter: "blur(40px) saturate(1.5)" }}
      >
        {/* Specular top sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-linear-to-b from-white/25 to-transparent"
        />

        {/* Flowing circle that expands from center on hover */}
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 z-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 opacity-0 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-55 group-hover:w-55 group-hover:opacity-100"
        />

        {/* Left arrow — slides in on hover */}
        <ArrowRight
          aria-hidden
          className="absolute left-[-25%] z-[9] h-4 w-4 stroke-foreground transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:stroke-white"
        />

        {/* Text */}
        <span className="relative z-[1] -translate-x-3 font-medium text-muted-foreground text-sm transition-all duration-[800ms] ease-out group-hover:translate-x-3 group-hover:text-white">
          Contact
        </span>

        {/* Right arrow — slides out on hover */}
        <ArrowRight
          aria-hidden
          className="absolute right-4 z-[9] h-4 w-4 stroke-foreground transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-white"
        />
      </a>
    </div>
  );
}
