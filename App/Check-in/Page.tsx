"use client";

import { useState } from "react";

export default function CheckInPage() {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Daily Check-In</h2>
      <p>Check in every 12 hours to earn increasing points.</p>
      <button
        className="bg-primary px-4 py-2 rounded text-white"
        onClick={() => setCheckedIn(true)}
        disabled={checkedIn}
      >
        {checkedIn ? "Already Checked In ✅" : "Check In"}
      </button>
    </div>
  );
}
