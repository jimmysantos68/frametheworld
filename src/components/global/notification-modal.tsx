"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Notification Panel */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 animate-[slideRight_0.3s_ease-out] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <div className="p-6">

          {/* Today Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Today</h3>
            <p className="text-sm text-gray-500 mb-4">Aug 17</p>
            
            <div className="space-y-4">
              {/* Notification 1 */}
              <div className="flex gap-4 items-start">
                <Image
                  src="/images/1.jpg"
                  alt="Notification"
                  width={60}
                  height={60}
                  className="rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-bold">David smith</span>: Added your picture to the frame: <span className="font-bold">Medows</span>.
                  </p>
                </div>
              </div>

              {/* Notification 2 */}
              <div className="flex gap-4 items-start">
                <Image
                  src="/images/2.jpg"
                  alt="Notification"
                  width={60}
                  height={60}
                  className="rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-bold">David smith</span> upvote your post
                  </p>
                </div>
              </div>

              {/* Notification 3 */}
              <div className="flex gap-4 items-start">
                <Image
                  src="/images/3.jpg"
                  alt="Notification"
                  width={60}
                  height={60}
                  className="rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    Your picture has been added to the frame: <span className="font-bold">Medows</span>.
                  </p>
                </div>
              </div>

              {/* Notification 4 */}
              <div className="flex gap-4 items-start">
                <Image
                  src="/images/4.jpg"
                  alt="Notification"
                  width={60}
                  height={60}
                  className="rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    100+ new pictures are ready for you to explore!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* July 17 Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">July 17</h3>
            
            <div className="space-y-4">
              {/* Notification with Pay Button */}
              <div className="flex gap-4 items-start">
                <Image
                  src="/images/1.jpg"
                  alt="Notification"
                  width={60}
                  height={60}
                  className="rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 mb-3">
                    Your subscription will end in 7 days. Renew to keep exploring.
                  </p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                    Pay Now
                  </button>
                </div>
              </div>

              {/* Notification with Yellow Icon */}
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📢</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    Your subscription plan has been successfully downgraded.
                  </p>
                </div>
              </div>

              {/* Notification with Green Icon */}
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📢</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    Your subscription plan has been successfully upgraded.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

