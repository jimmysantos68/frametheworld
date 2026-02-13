"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  orientation = "horizontal",
}: {
  items: {
    quote?: string;
    name?: string;
    title?: string;
    image?: string;
  }[];
  direction?: "left" | "right" | "top" | "bottom";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left" || direction === "top") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      }
    }
  };

  const isVertical = orientation === "vertical";

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        isVertical
          ? "h-full w-full"
          : "max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          isVertical
            ? "flex flex-col h-max min-h-full shrink-0 flex-nowrap gap-3"
            : "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && (isVertical ? "animate-scroll-vertical" : "animate-scroll"),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "relative shrink-0",
              isVertical
                ? "h-[400px] w-full"
                : "w-[350px] max-w-full rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]",
            )}
          >
            {item.image ? (
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name || `Image ${idx}`}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            ) : (
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
