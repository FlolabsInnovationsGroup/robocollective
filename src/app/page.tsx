"use client";

import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden dynamic-bg">
      {/* Robot Silhouette Background */}
      <div className="absolute inset-0 flex justify-center items-center animate-float">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-50 -100 300 600" /* Ensures balanced space */
          className="w-[40%] h-auto opacity-5 robot-silhouette md:w-[50%] sm:w-[70%]"
          fill="none"
        >
          {/* Head */}
          <rect x="60" y="90" width="80" height="70" rx="15" fill="#ffffff" />
          {/* Antenna */}
          <line
            x1="100"
            y1="60"
            x2="100"
            y2="90"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="100" cy="60" r="6" fill="#ffffff" />
          {/* Eyes */}
          <circle cx="85" cy="120" r="5" className="glow-eyes" />
          <circle cx="115" cy="120" r="5" className="glow-eyes" />
          {/* Body */}
          <rect x="50" y="180" width="100" height="140" rx="20" fill="#ffffff" />
          {/* Body Panel */}
          <rect x="70" y="220" width="60" height="40" rx="10" fill="#000000" />
          {/* Arms */}
          <rect x="30" y="200" width="20" height="100" rx="10" fill="#ffffff" />
          <rect x="150" y="200" width="20" height="100" rx="10" fill="#ffffff" />
          {/* Arms End (Hands) */}
          <circle cx="40" cy="300" r="10" fill="#ffffff" />
          <circle cx="160" cy="300" r="10" fill="#ffffff" />
          {/* Legs */}
          <rect x="70" y="320" width="20" height="70" rx="10" fill="#ffffff" />
          <rect x="110" y="320" width="20" height="70" rx="10" fill="#ffffff" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Website Name */}
        <h1 className="text-5xl font-extrabold mb-4 pulse-glow">
          RoboCollective.ai
        </h1>
        {/* Subheading */}
        <h2 className="text-3xl text-gray-300 mb-6">Coming Soon!</h2>
        {/* Description */}
        <p className="text-lg text-gray-400 mb-8">
          RoboCollective.ai is launching soon to bring cutting-edge robotics to
          the world. Whether you want to partner with us or own your very own
          dealership franchise, the future of robotics awaits.
        </p>
        {/* Call-to-Action */}
        <a
  href="mailto:hr@flomadlabs.com"
  className="px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover-glow"
  aria-label="Contact RoboCollective"
>
  Contact Us
</a>

      </div>

      {/* Fallback for No JavaScript */}
      <noscript>
        <p className="text-center text-gray-500">
          Please enable JavaScript to view this content.
        </p>
      </noscript>
    </div>
  );
}
