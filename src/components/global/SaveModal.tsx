"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Lock, Plus, UserCircle2, XCircle } from "lucide-react";

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SaveModal = ({ isOpen, onClose }: SaveModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const options = [
    {
      icon: <Lock className="w-5 h-5 text-gray-500" />,
      title: "Save to Frame",
      desc: "Share with everyone",
      iconBg: "bg-blue-50/50",
    },
    {
      icon: <Plus className="w-6 h-6 text-blue-600" />,
      title: "Create New Frame & Add",
      desc: "Start a new frame for this memory.",
      iconBg: "bg-blue-50",
    },
    {
      icon: <UserCircle2 className="w-6 h-6 text-blue-500" />,
      title: "Save to Personal Storage",
      desc: "Save before posting.",
      iconBg: "bg-blue-50",
    },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[99999]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Centered Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-[400px] bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
          >
            <XCircle className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="bg-[#E9EFFF] py-4 text-center border-b border-white/50 rounded-t-2xl">
            <h3 className="text-lg font-medium text-gray-700">
              Save To
            </h3>
          </div>

          {/* Options */}
          <div className="p-3 flex flex-col gap-1">
            {options.map((opt, idx) => (
              <button
                key={idx}
                className="flex items-center border-b pb-3 border-gray-100 gap-4 w-full p-3 hover:bg-gray-50 transition-colors text-left group"
              >
                <div
                  className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-white ${opt.iconBg}`}
                >
                  {opt.icon}
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-[14px] leading-tight">
                    {opt.title}
                  </span>
                  <span className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                    {opt.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SaveModal;
