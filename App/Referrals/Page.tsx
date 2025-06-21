"use client";

import { useState } from "react";

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false);
  const referral = "https://deatlas.io/ref?user=YOUR_ID";

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Referrals</h2>
      <p>Invite your friends and earn bonus points.</p>
      <div className="bg-gray-800 p-4 rounded">
        <p className="text-sm break-all">{referral}</p>
        <button
          className="mt-2 text-sm underline text-primary"
          onClick={() => {
            navigator.clipboard.writeText(referral);
            setCopied(true);
          }}
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
