

        "use client";

import Image from "next/image";
import { useState } from "react";

import { Bookmark, Grid, Image as ImageIcon, Lock, LockIcon } from "lucide-react";

export default function TravelStoryPage() {
 const [activeTab, setActiveTab] = useState<"posts" | "frames" | "space">(
    "posts"
  );

  const isFrames = activeTab === "frames";
  const isPosts = activeTab === "posts";
    const isSpace = activeTab === "space";



  return (
    <div className="min-h-screen bg-white px-8 py-10 font-sans text-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
        
        {/* ================= LEFT PROFILE CARD ================= */}
        <aside className="relative bg-[#f1f3f6] rounded-[40px] p-8 overflow-hidden shadow-sm h-fit">
          {/* Decorative background "dots" and soft shapes like the image */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full opacity-60" />
          <div className="absolute top-10 right-10 w-2 h-2 bg-blue-500 rounded-full opacity-60" />
          <div className="absolute top-24 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-40" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Avatar with Blue Border */}
           <div className="relative w-36 h-36 rounded-2xl p-1 bg-gradient-to-b from-blue-400 to-transparent">
  <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#f1f3f6] bg-white">
    <Image
      src="/images/1.jpg"
      alt="Leo Denzin"
      fill
      sizes="144px"
      className="object-cover"
    />
  </div>
</div>


            <h2 className="mt-6 text-2xl font-bold tracking-tight">Leo Denzin</h2>
            <p className="text-sm text-gray-500 mt-2 px-4 leading-relaxed text-center">
              Lorem ipsum dolor sit amet consectetur. Dis malesuada
              mauris pellentesque eget tellus amet a massa.
            </p>

            <div className="mt-4 text-center">
              <p className="text-sm font-bold text-gray-800">Travel Mania</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Miami, FL</p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-4 gap-2 w-full mt-4">
              {[
                { label: "Up votes", value: 350 },
                { label: "Framed", value: 32 },
                { label: "Posts", value: 64 },
                { label: "Frames", value: 64 },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <p className="text-blue-600 font-extrabold text-base">{s.value}</p>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Achievements Section */}
            <div className="w-full mt-10">
              <h3 className="text-lg font-bold mb-5">Achivements</h3>
              <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                {/* Simplified Badge Mapping */}
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                       {/* This represents the badge icons from your image */}
                       {i < 3 ? (
                         <div className="w-10 h-10 bg-orange-500 rounded-lg rotate-45 flex items-center justify-center shadow-lg">
                            <div className="rotate-[-45deg] text-white text-[8px] font-bold">★★★</div>
                         </div>
                       ) : (
                         <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-inner">
                           <Lock className="w-4 h-4 text-white" />
                         </div>
                       )}
                    </div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Badge name</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ================= RIGHT CONTENT AREA ================= */}
       {/* ================= RIGHT CONTENT ================= */}
        <section>
          {/* Tabs */}
          <div className="bg-[#e2e8f7] rounded-full flex mb-10 shadow-sm">
            <button
              onClick={() => setActiveTab("posts")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold transition
                ${
                  isPosts
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                    : "text-gray-400 hover:text-blue-500"
                }`}
            >
              <ImageIcon className="w-4 h-4" /> Posts
            </button>

            <button
              onClick={() => setActiveTab("frames")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold transition
                ${
                  isFrames
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                    : "text-gray-400 hover:text-blue-500"
                }`}
            >
              <Grid className="w-4 h-4" /> Frames
            </button>

            <button
              onClick={() => setActiveTab("space")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold transition
                ${
                  activeTab === "space"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                    : "text-gray-400 hover:text-blue-500"
                }`}
            >
              <Lock className="w-4 h-4" /> My Space
            </button>
          </div>

          {/* ================= POSTS GRID ================= */}
          {isPosts && (
            <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[120px] gap-6">
              {Array.from({ length: 20 }).map((_, i) => {
                const isTall = i % 3 === 0 || i % 2 === 0;

                return (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-[28px] bg-white shadow-xl
                      ${isTall ? "row-span-3" : "row-span-2"}`}
                  >
                    <Image
                      src={`/images/${(i % 4) + 1}.jpg`}
                      alt="Travel"
                      fill
                      className="object-cover"
                    />
                    <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow">
                      <Bookmark className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* ================= FRAMES GRID ================= */}
          {isFrames && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[49.26px]
                  shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                  w-[200px] h-[200px]"
                >
                  <Image
                    src={`/images/${(i % 4) + 1}.jpg`}
                    alt="Frame"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-6 rounded-[40px] border-4 border-black/40 overflow-hidden">
                    <Image
                      src={`/images/${((i + 1) % 4) + 1}.jpg`}
                      alt="Inner Frame"
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>

                  <div className="absolute inset-0 shadow-[inset_0_0_0_8px_rgba(0,0,0,0.35)] rounded-[49.26px]" />

                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="relative w-[170px] h-[170px] rounded-[30px] overflow-hidden border border-white/20">
                      <Image
                        src={`/images/${((i + 2) % 4) + 1}.jpg`}
                        alt="Mini"
                        fill
                        className="object-cover opacity-80"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm mt-1">Frame Name</div>
                  </div>
                </div>
              ))}
            </div>
          )}


          {/* ================= FRAMES GRID ================= */}
      {isSpace && (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-2">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded-[24px]
          shadow-[0_10px_25px_rgba(0,0,0,0.35)]
          w-[200px] h-[200px]"
      >
        <Image
          src={`/images/${(i % 4) + 1}.jpg`}
          alt="Frame"
          fill
          className="object-cover"
        />

        {/* LOCK ICON WITH BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/30 shadow-3xl">
            <LockIcon className="text-white w-10 h-10" />
          </div>
        </div>
      </div>
    ))}
  </div>
)}

        </section>
      </div>
    </div>
  );
}