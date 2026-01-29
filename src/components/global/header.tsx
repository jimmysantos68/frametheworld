"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, BarChart3, Globe, Lock, Pin, Sparkles, Settings, LogOut, ChevronRight, FileText, Frame, FolderPlus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import NotificationModal from "./notification-modal";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({ title = "Today's Travel Story", subtitle = "300+ new memories for you" }: HeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current && 
        !menuRef.current.contains(target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isNotificationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNotificationOpen]);

  const sidebarItems = [
    { icon: Home, label: "Home", hasArrow: false, route: "/home" },
    { icon: BarChart3, label: "Leader Board", hasArrow: false },
    { icon: Globe, label: "Public frames", hasArrow: true },
    { icon: Lock, label: "Private frames", hasArrow: true },
    { icon: Pin, label: "Personal Storage", hasArrow: true },
    { icon: Sparkles, label: "AI Content generator", hasArrow: false },
    { icon: Settings, label: "Settings", hasArrow: false },
    { icon: LogOut, label: "Logout", hasArrow: false, isDestructive: true },
  ];

  const contentCards = [
    { image: "/images/icons/one.png", title: "Create Post", subtitle: "Shared with everyone.", color: "bg-blue-100" },
    { image: "/images/icons/two.png", title: "Create Frames", subtitle: "Shared with everyone.", color: "bg-purple-100" },
    { image: "/images/icons/three.png", title: "Create Personal Storage", subtitle: "Save before posting.", color: "bg-blue-100" },
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Title */}
          <div className="flex items-center gap-4 relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer"
            >
              <Image
                src="/images/menu.png"
                alt="Menu"
                height={50}
                width={50}
              />
            </button>

            <div>
              <h1 className="text-xl font-[800] text-gray-900">{title}</h1>
              {subtitle && <p className="text-[14px] text-black">{subtitle}</p>}
            </div>
          </div>

          {/* Right side - User info and actions */}
          <div className="flex items-center gap-6">
            {/* User profile with level badge */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/admin.png"
                alt="User"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="font-medium text-sm text-gray-900">Leo Denzin</span>
              {/* Level Badge */}
              <div className="relative">
                <Image
                  src="/images/awarrd.png"
                  alt="Award"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Search button */}
            <Link href="/search">
              <Image
                src="/images/search.png"
                alt="Search"
                height={50}
                width={50}
                className="cursor-pointer"
              />
            </Link>

            {/* Bell button */}
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="cursor-pointer"
            >
              <Image
                src="/images/notifaction.png"
                alt="Notification"
                height={50}
                width={50}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {isMenuOpen && (
        <div 
          ref={megaMenuRef}
          className="fixed top-0 left-0 right-0 z-[60] bg-white rounded-b-3xl shadow-2xl border-b border-gray-200 animate-[slideDown_0.3s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-[30em]">
            {/* Left Sidebar */}
            <div className="w-80 bg-gray-50 rounded-bl-3xl border-r border-gray-200 overflow-y-auto scrollbar-hidden">
              <div className="p-6 space-y-2">
                {sidebarItems.map((item, index) => {
                  const Icon = item.icon;
                  const handleClick = (e: React.MouseEvent) => {
                    e.stopPropagation(); // Prevent event bubbling
                    if (item.route) {
                      router.push(item.route);
                      setIsMenuOpen(false);
                    }
                    // Menu stays open if no route is defined
                  };
                  
                  return (
                    <button
                      key={index}
                      onClick={handleClick}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl hover:bg-gray-100 transition-all ${item.isDestructive
                        ? "bg-red-50 hover:bg-red-100"
                        : ""
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`h-5 w-5 ${item.isDestructive ? "text-red-500" : "text-blue-600"
                            }`}
                        />
                        <span className={`font-medium text-sm ${item.isDestructive ? "text-red-600" : "text-gray-900"
                          }`}>
                          {item.label}
                        </span>
                      </div>
                      {item.hasArrow && (
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>


            <div className="w-full">

              {/* Right Content Area */}
              <div className="flex-1 p-7 bg-white rounded-br-3xl flex items-start justify-center">
                <div className="w-full max-w-5xl flex items-center gap-6">
                  {/* Top Cards */}
                  <div className="flex gap-4 flex-1">
                    {contentCards.map((card, index) => {
                      return (
                        <div
                          key={index}
                          className="flex-1 bg-[#FAFAFA] rounded-full p-0 items-center shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-100"
                        >
                          <div className="flex items-center text-left gap-0">
                            <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center m-2">
                              <Image
                                src={card.image}
                                alt={card.title}
                                width={20}
                                height={20}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 text-[14px] mb-0">{card.title}</h3>
                              <p className="text-[12px] text-gray-500">{card.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* User Profile on Right */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/admin.png"
                      alt="User"
                      width={70}
                      height={70}
                      className="rounded-full border-7 border-blue-600"
                    />
                  </div>



                </div>
              </div>
              <div className="w-full flex justify-center items-center absolute bottom-0 left-30">
                <Image
                  src="/images/menuimage.png"
                  alt="Notification"
                  height={860}
                  width={860}
                />
              </div>

            </div>


          </div>

        </div>
      )}

      {/* Notification Modal */}
      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </>
  );
}
