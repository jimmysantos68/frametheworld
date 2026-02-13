"use client";

import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export default function MaintenancePage() {
  const columnOne = [
    { image: "/images/1.jpg", name: "Design 01" },
    { image: "/images/2.jpg", name: "Design 02" },
    { image: "/images/3.jpg", name: "Design 03" },
    { image: "/images/4.jpg", name: "Design 04" },
  ];

  const columnTwo = [
    { image: "/images/3.jpg", name: "Design 03" },
    { image: "/images/4.jpg", name: "Design 04" },
    { image: "/images/1.jpg", name: "Design 01" },
    { image: "/images/2.jpg", name: "Design 02" },
  ];

  return (
    <main className="relative h-screen w-full overflow-hidden bg-slate-50 font-sans">
      {/* 1. Global Animations */}
      <style jsx global>{`
        @keyframes scroll-vertical {
          to {
            transform: translateY(calc(-50% - 0.75rem));
          }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
      `}</style>

      {/* 2. Background Layer: Pinterest-style Vertical Columns */}
      <div className="absolute inset-0 z-0 flex justify-center gap-4 px-4 opacity-40">
        <InfiniteMovingCards
          items={columnOne}
          direction="top"
          speed="slow"
          orientation="vertical"
          className="w-full md:w-1/3 scale-110"
        />
        <InfiniteMovingCards
          items={columnTwo}
          direction="bottom"
          speed="normal"
          orientation="vertical"
          className="hidden md:block md:w-1/3 scale-125"
        />
        <InfiniteMovingCards
          items={columnOne}
          direction="top"
          speed="fast"
          orientation="vertical"
          className="hidden lg:block lg:w-1/3 scale-110"
        />
      </div>

      {/* 3. Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-white/40 backdrop-blur-[100px] px-6 text-center">
        <div className="max-w-4xl">
          
          {/* Logo Container */}
          <div className="mx-auto mb-10 relative h-24 w-24 md:h-32 md:w-32 transition-transform hover:rotate-3 duration-500">
             <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
             <Image 
                src="/images/logo1.png" 
                alt="Logo" 
                fill 
                className="object-contain relative z-10"
                priority
             />
          </div>

          <h1 className="mb-6 text-5xl font-black tracking-tighter text-blue-950 md:text-8xl">
            Currently Under <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Maintenance
            </span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl font-bold text-blue-900/80 md:text-3xl">
              We’re behind the scenes fine-tuning things.
            </p>
            <p className="mx-auto max-w-xl text-lg text-slate-500 md:text-xl font-medium">
              We’ll be up and running again soon — stay tuned.
            </p>
          </div>

          {/* Buttons & Status */}
         
        </div>

        {/* Footer */}
        <footer className="absolute bottom-10">
          <p className="text-xs font-black uppercase tracking-[0.5em] text-blue-900/30">
            Frame the World • 2026
          </p>
        </footer>
      </div>
    </main>
  );
}