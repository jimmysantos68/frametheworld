"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { useRouter } from "next/navigation";

type PlanId = "monthly" | "annual" | "one-time";

export default function SubscriptionPage() {
  const router = useRouter();

  const handleSelect = (plan: PlanId) => {
    // TODO: store selected plan in state or backend
    router.push(`/payment-method?plan=${plan}`);
  };

  const Card = ({
    title,
    price,
    suffix,
    highlight,
    onClick,
  }: {
    title: string;
    price: string;
    suffix: string;
    highlight?: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-3xl border px-8 py-8 text-left shadow-sm transition hover:shadow-lg mb-6 bg-gradient-to-br from-blue-50 to-purple-50 ${highlight ? "border-blue-400" : "border-transparent"
        }`}
    >
      <div className="mb-4 text-center font-semibold text-gray-800">
        {title}
      </div>
      <div className="mb-4 flex items-baseline justify-center gap-1">
        <span className="text-xl font-semibold">$</span>
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="text-sm text-gray-500">{suffix}</span>
      </div>
      <ul className="space-y-2 text-sm text-gray-600">
        {[1, 2, 3].map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
              <Check className="h-3 w-3" />
            </span>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        ))}
      </ul>
    </button>
  );

  return (
    <div className="w-full max-w-[32em]">
      <div className="relative rounded-2xl bg-white p-[2.5em] pt-6 shadow-xl">
        {/* Back arrow */}
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center text-gray-700"
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        {/* Title */}
        <h1 className="mt-2 mb-2 text-center text-2xl font-extrabold text-gray-900">
          Select Your Subscription
        </h1>
        <p className="mb-8 text-center text-xs text-gray-500">
          Unlock full access to post, create frames, and store private memories.
          Choose the plan that fits your travel lifestyle.
        </p>
        <div className="overflow-scroll h-[27em] scrollbar-hidden">

          {/* Plans */}
          <Card
            title="Monthly"
            price="49.99"
            suffix="/mo"
            highlight
            onClick={() => handleSelect("monthly")}
          />

          <Card
            title="Annual"
            price="499.99"
            suffix="/year"
            onClick={() => handleSelect("annual")}
          />

          <Card
            title="One Time"
            price="1499.99"
            suffix=""
            onClick={() => handleSelect("one-time")}
          />
 </div>
          <Button
            type="button"
            className="mt-2 w-full rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:from-blue-500 hover:to-blue-800 h-12 font-medium shadow-lg shadow-blue-300"
            onClick={() => handleSelect("monthly")}
          >
            Continue
          </Button>
      </div>
    </div>
  );
}


