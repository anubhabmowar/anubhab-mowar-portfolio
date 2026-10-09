"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import profileImage from "@/public/profile-image.png";

export default function Hero() {
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-dvh w-full pb-16 pt-48 lg:px-12 lg:pt-[clamp(12rem,32vh,20rem)]"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <div className="relative z-10 min-w-0">
          <div className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <p className="font-display text-[10px] font-bold uppercase leading-normal tracking-[0.18em] text-primary sm:text-xs">
              [ STATUS: ACTIVE_ARCHITECT ]
            </p>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(1.5rem,5.8vw,3rem)] font-bold leading-[1.04] tracking-[-0.035em] text-on-background lg:text-[clamp(3rem,4.1vw,4rem)]"
          >
            <span className="block">QUANT RESEARCHER.</span>
            <span className="block">STARTUP FOUNDER.</span>
            <span className="block text-primary">SYSTEMS ARCHITECT.</span>
          </h1>

          <p className="mt-8 max-w-150 border-l border-outline/40 pl-5 text-base leading-[1.65] text-on-surface-variant">
            Building quantitative strategies, scalable products, and intelligent
            systems at the intersection of finance, technology, and entrepreneurship.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group relative inline-flex min-h-12 items-center justify-center overflow-hidden whitespace-nowrap bg-primary px-10 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-on-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ArrowRight
                aria-hidden
                className="absolute left-[-25%] h-4 w-4 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-focus-visible:left-4 motion-reduce:transition-none"
              />
              <span className="relative -translate-x-3 transition-transform duration-800 ease-out group-hover:translate-x-3 group-focus-visible:translate-x-3 motion-reduce:transition-none">
                EXPLORE MY WORK
              </span>
              <ArrowRight
                aria-hidden
                className="absolute right-4 h-4 w-4 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-focus-visible:right-[-25%] motion-reduce:transition-none"
              />
            </a>
            <a
              href="#"
              className="inline-flex min-h-12 items-center justify-center whitespace-nowrap border border-outline px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              DOWNLOAD PROTOCOL (PDF)
            </a>
          </div>
        </div>

        <div
          className={`relative mx-auto aspect-4/5 w-full max-w-65 transition-[opacity,transform] duration-800 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:max-w-[320px] lg:aspect-auto lg:max-w-[480px] lg:self-stretch ${portraitLoaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
          }}
        >
          <Image
            src={profileImage}
            alt="Anubhab Mowar wearing glasses and a grey blazer"
            fill
            preload
            sizes="(min-width: 1024px) 36vw, (min-width: 640px) 320px, 260px"
            className="object-cover object-top"
            onLoad={() => setPortraitLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}
