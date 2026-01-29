"use client";

import Image from "next/image";
import { Search, Bell, ArrowUp } from "lucide-react";

export default function TravelStoryPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] px-6">
      <div className="mx-auto p-6">
        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between border-b pb-5">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold">
              ≡
            </div>
            <div>
              <h1 className="text-lg font-semibold">Today’s Explorers</h1>
              <p className="text-sm text-gray-500">
                Celebrate the travelers whose captures shine the most.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/images/1.jpg"
                alt="user"
                width={34}
                height={34}
                className="rounded-full object-cover"
              />
              <span className="text-sm font-medium">Leo Denzin</span>
              <span>🦊</span>
            </div>

            <button className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Search className="h-5 w-5 text-white" />
            </button>

            <button className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Bell className="h-5 w-5 text-white" />
            </button>
          </div>
        </header>

        {/* ================= TOP 3 ================= */}
        <div className="mt-8 flex justify-center items-end gap-12">
          {/* #3 */}
          <TopUser
            rank={3}
            img="/images/3.jpg"
            name="Smith o neill"
            votes={900}
            size="sm"
          />

          {/* #1 */}
          <TopUser
            rank={1}
            img="/images/1.jpg"
            name="Leo Denzin"
            votes={1010}
            size="lg"
          />

          {/* #2 */}
          <TopUser
            rank={2}
            img="/images/2.jpg"
            name="Bradley Henry"
            votes={920}
            size="sm"
          />
        </div>

        {/* ================= SEGMENT ================= */}
        <div className="mt-8 flex justify-center">
          <div className="w-[340px] bg-[#eef1fb] rounded-full p-1 flex">
            <button className="flex-1 py-2 rounded-full bg-gradient-to-r from-[#6CACDF] to-[#0000FE] text-white text-sm font-medium">
              UpVotes
            </button>
            <button className="flex-1 py-2 rounded-full text-sm text-gray-500 font-medium">
              Framed
            </button>
          </div>
        </div>

        {/* ================= TOP LIST ================= */}
        <div className="mt-4 max-w-2xl mx-auto p-6 space-y-3">
          {[
            { id: "01", name: "Jenny Wilson", votes: 750 },
            { id: "02", name: "Daren", votes: 650 },
            { id: "03", name: "Michael Smith", votes: 600 },
            { id: "04", name: "Emily Johnson", votes: 590 },
            { id: "05", name: "Sophia Brown", votes: 500 },
          ].map((u) => (
            <div
              key={u.id}
              className="flex items-center justify-between p-4 bg-gray-200 rounded-full"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-black w-6">{u.id}</span>

                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/images/1.jpg"
                    alt={u.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>

                <span className="text-sm font-medium">{u.name}</span>
              </div>

              <div className="flex items-center gap-1 text-blue-500 font-semibold text-sm">
                {u.votes}
                <ArrowUp className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= TOP USER ================= */

function TopUser({
  rank,
  img,
  name,
  votes,
  size,
}: {
  rank: number;
  img: string;
  name: string;
  votes: number;
  size: "sm" | "lg";
}) {
  const avatarSize = size === "lg" ? 110 : 86;

  // Rank positioning logic
  const rankPosition =
    rank === 2
      ? "top-0 right-0 translate-x-1/4 -translate-y-1/4"
      : "top-0 left-0 -translate-x-1/4 -translate-y-1/4";

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative"
        style={{ width: avatarSize, height: avatarSize }}
      >
        <Image
          src={img}
          alt={name}
          fill
          className="rounded-full object-cover ring-4 ring-blue-500"
        />

        {/* Rank bubble */}
        <div
          className={`absolute ${rankPosition} 
          h-9 w-6 rounded-xl bg-blue-500 text-white text-sm font-semibold 
          flex items-center justify-center`}
        >
          {rank}
        </div>
      </div>

      <p className="mt-4 text-sm font-medium">{name}</p>

      <div className="flex items-center gap-1 text-blue-500 text-sm font-semibold">
        {votes}
        <ArrowUp className="h-4 w-4" />
      </div>
    </div>
  );
}
