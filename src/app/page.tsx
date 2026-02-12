"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"; // Adjust path as needed

export default function MaintenancePage() {
  const imagesColumn1 = [
    { image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
    { image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d" },
    { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
  ];

  const imagesColumn2 = [
    { image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4" },
    { image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85" },
    { image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31" },
  ];

  return (
    <main className="relative h-screen w-full overflow-hidden bg-white">
      {/* 1. Animation Styles */}
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

      {/* 2. Background: Pinterest-style Vertical Moving Columns */}
      <div className="absolute inset-0 z-0 flex justify-center gap-4 px-4 opacity-30">
        <InfiniteMovingCards
          items={imagesColumn1}
          direction="top"
          speed="slow"
          orientation="vertical"
          className="w-full md:w-1/3"
        />
        <InfiniteMovingCards
          items={imagesColumn2}
          direction="bottom"
          speed="normal"
          orientation="vertical"
          className="hidden md:block md:w-1/3"
        />
        <InfiniteMovingCards
          items={imagesColumn1}
          direction="top"
          speed="fast"
          orientation="vertical"
          className="hidden lg:block lg:w-1/3"
        />
      </div>

      {/* 3. Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-white/60 backdrop-blur-xl px-6">
        <div className="max-w-3xl text-center">
          {/* Brand Icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-black shadow-2xl">
            <div className="h-6 w-6 rounded-full border-4 border-white animate-pulse" />
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-7xl">
            Currently Under Maintenance — <br />
            <span className="text-rose-600">Please Check Back Soon</span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl font-medium text-slate-600 md:text-2xl">
              We’re behind the scenes fine-tuning things.
            </p>
            <p className="text-lg text-slate-400">
              We’ll be up and running again soon — stay tuned.
            </p>
          </div>

          {/* Action */}
          <div className="mt-12">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-950 px-10 py-4 font-bold text-white transition-all hover:bg-rose-600 shadow-xl active:scale-95">
              <span>Notify Me When Ready</span>
            </button>
          </div>
        </div>

        {/* Floating Status Badge */}
        <div className="absolute bottom-10 flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Systems Improving
          </span>
        </div>
      </div>
    </main>
  );
}