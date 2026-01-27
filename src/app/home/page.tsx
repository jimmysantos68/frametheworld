import Image from "next/image";
import { Search, Bell, Bookmark } from "lucide-react";

export default function TravelStoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
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
          <button className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <Image
              src="https://i.pravatar.cc/100"
              alt="User"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-medium text-sm">Leo Denzin</span>
          </div>
        </div>
      </header>

      {/* Story Slider */}
      <section className="flex gap-4 overflow-x-auto pb-4 mb-6">
        {[25, 15, 25, 15].map((item, i) => (
          <div
            key={i}
            className="min-w-[260px] h-[120px] rounded-2xl bg-gray-900 relative overflow-hidden shadow"
          >
            <Image
              src={`https://picsum.photos/400/300?random=${i}`}
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
      <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden shadow bg-white"
          >
            <Image
              src={`https://picsum.photos/500/700?random=${i + 10}`}
              alt="Travel"
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />
            <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
              <Bookmark className="h-4 w-4 text-gray-700" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
