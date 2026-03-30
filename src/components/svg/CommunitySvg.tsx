{/* Based on pixel-perfect svg-1 (isometric platform), with TinyFish logo instead of the dollar/cloud icon */}
const CommunitySvg = () => (
  <svg width="200" height="192" viewBox="0 0 322 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer platform layers */}
    <rect y="0.5" width="184.905" height="184.905" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.431 6.34521)" fill="#FFF7F0" />
    <rect y="0.5" width="184.905" height="184.905" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.431 6.34521)" stroke="#FF6700" strokeOpacity="0.2" />
    <rect y="0.5" width="184.905" height="184.905" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.431 0.25)" fill="#FFF1E6" />
    <rect y="0.5" width="184.905" height="184.905" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.431 0.25)" stroke="#FF6700" strokeOpacity="0.3" />
    {/* Middle platform layers */}
    <rect y="0.5" width="152.216" height="152.216" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 160.81 14.2739)" fill="#FFEBDB" />
    <rect y="0.5" width="152.216" height="152.216" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 160.81 14.2739)" stroke="#FF6700" strokeOpacity="0.3" />
    <rect y="0.5" width="152.216" height="152.216" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 160.81 9.25)" fill="#FFE4CF" />
    <rect y="0.5" width="152.216" height="152.216" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 160.81 9.25)" stroke="#FF6700" strokeOpacity="0.35" />
    {/* Inner platform layers */}
    <rect y="0.5" width="115.37" height="115.37" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.589 21.8804)" fill="#FFDCC2" />
    <rect y="0.5" width="115.37" height="115.37" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.589 21.8804)" stroke="#FF6700" strokeOpacity="0.4" />
    <rect y="0.5" width="115.37" height="115.37" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.589 18.0649)" fill="#FFD4B3" />
    <rect y="0.5" width="115.37" height="115.37" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 161.589 18.0649)" stroke="#FF6700" strokeOpacity="0.45" />
    {/* TinyFish logo in center, tilted to isometric plane and recolored to orange */}
    <defs>
      <filter id="lines-only">
        {/* Make white/light areas transparent, keep dark lines */}
        <feColorMatrix type="matrix" values="0 0 0 0 0.2  0 0 0 0 0.2  0 0 0 0 0.2  -1 -1 -1 1 0" />
      </filter>
    </defs>
    <image href="/fish-discover.svg" x="131" y="45" width="60" height="60" filter="url(#lines-only)" opacity="0.7" />
  </svg>
);

export default CommunitySvg;
