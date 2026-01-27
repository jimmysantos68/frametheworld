// import Image from "next/image";
// import InfiniteMovingCardsDemo from "@/components/global/marquee";

// export default function Home() {
//   return (
//     <div>
//       <InfiniteMovingCardsDemo />
//     </div>
//   );
// }
import Image from "next/image";
import { Search, Bell, Bookmark } from "lucide-react";

export default function TravelStoryPage() {
  return (
    <div className="min-h-screen  backdrop-blur-3xl bg-blur-15 px-6 py-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            ≡
          </div>
          <div>
            <h1 className="text-xl font-semibold">Today’s Travel Story</h1>
            <p className="text-sm text-gray-500">300+ new memories for you</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/1.jpg"
              alt="User"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-medium text-sm">Leo Denzin</span>
          </div>
          <button className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>

          
        </div>
      </header>

      {/* Story Slider */}
 <section
  className="
    flex flex-nowrap gap-4 px-6 pb-4 mb-6
    overflow-x-auto
    overscroll-x-contain
    scroll-smooth
    snap-x snap-mandatory

    [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:none]
    [scrollbar-width:none]
  "
>
  {[25, 15, 25, 15,20].map((item, i) => (
    <div
      key={i}
      className="
        shrink-0
        snap-start
        min-w-[343px] h-[120px]
        rounded-4xl
        bg-gray-900
        relative overflow-hidden
        shadow
      "
    >
      <Image
        src="/images/2.jpg"
        alt="Story"
        fill
        className="object-cover opacity-80"
      />

      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <span className="text-white text-2xl font-bold">{item}+</span>
        <span className="text-sm text-gray-200">Frame name here</span>
      </div>
    </div>
  ))}
</section>



      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        <button className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium shadow">
          For You
        </button>
        <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-600">
          Featured
        </button>
        <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-600">
          Frames
        </button>
      </div>

      {/* Masonry Grid */}
    {/* Masonry Grid */}
{/* Fixed Grid (Pinterest-style, controlled sizes) */}
<div className="max-w-[1400px] mx-auto">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[120px] gap-6">
    {Array.from({ length: 20 }).map((_, i) => {
      const isTall = i % 5 === 0 || i % 7 === 0;

      return (
        <div
          key={i}
          className={`relative overflow-hidden rounded-[28px] bg-white shadow-xl hover:shadow-2xl transition
            ${isTall ? "row-span-2 " : "row-span-3"}`}
        >
          {/* Image */}
          <Image
            src={`/images/${(i % 4) + 1}.jpg`}
            alt="Travel"
            fill
            className="object-cover"
          />

          {/* Bookmark */}
          <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow">
            <Bookmark className="h-4 w-4 text-gray-700" />
          </button>

          {/* Play Button (some cards only) */}
          {/* {i % 5 === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow text-lg">
                ▶
              </div>
            </div>
          )} */}
        </div>
      );
    })}
  </div>
</div>


    </div>
  );
}
