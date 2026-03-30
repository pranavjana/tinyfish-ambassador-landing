{/* Based on pixel-perfect svg-8 (cube), recolored for light mode */}
import React from "react";

const FeedbackSvg = () => (
  <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top face */}
    <path d="M100 30 L170 70 L100 110 L30 70 Z" fill="#FFEBDB" stroke="#FF6700" strokeOpacity="0.4" strokeWidth="1.5" />
    {/* Left face */}
    <path d="M30 70 L100 110 L100 175 L30 135 Z" fill="#FFE4CF" stroke="#FF6700" strokeOpacity="0.3" strokeWidth="1.5" />
    {/* Right face */}
    <path d="M170 70 L100 110 L100 175 L170 135 Z" fill="#FFF1E6" stroke="#FF6700" strokeOpacity="0.3" strokeWidth="1.5" />
    {/* Inner lines */}
    <path d="M65 90 L100 110 L135 90" fill="none" stroke="#FF6700" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="100" y1="110" x2="100" y2="175" stroke="#FF6700" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />
    {/* Decorative circle */}
    <circle cx="100" cy="100" r="80" stroke="#FF6700" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);

export default FeedbackSvg;
