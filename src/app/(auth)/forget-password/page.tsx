"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) return;

    // TODO: call your API to send OTP to this email

    router.push(
      `/otp-verification?mode=reset&email=${encodeURIComponent(trimmed)}`
    );
  };

  return (
    <div className="w-full max-w-[32em]">
      <div className="rounded-2xl h-[40em] bg-white p-[4em] shadow-xl">
        {/* Title */}
        <div className="flex justify-center">
          <Image
            src="/images/warning.png"
            alt="User"
            width={80}
            height={80}
          />
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 text-center pt-4">
          Trouble Logging in?
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-sm text-gray-600 text-center">
          Enter your email and we&apos;ll send you a code to get back into your
          account.
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Send Button */}
          <Button
            type="submit"
            className="w-full mt-3 bg-gradient-to-r rounded-full from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 h-12  font-medium  mb-4 shadow-lg shadow-blue-400"
          >
            Send Recovery Code
          </Button>
        </form>
      </div>
    </div>
  );
}
