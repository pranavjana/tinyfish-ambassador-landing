{/* Based on pixel-perfect svg-4 (3 pillars), icons replaced with TinyFish */}
const EventsSvg = () => (
  <svg width="180" height="180" viewBox="0 0 435 444" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="fish-mono">
        <feColorMatrix type="saturate" values="0" result="gray" />
        <feComponentTransfer in="gray">
          <feFuncR type="table" tableValues="1 0.2" />
          <feFuncG type="table" tableValues="0.6 0.05" />
          <feFuncB type="table" tableValues="0.4 0" />
          <feFuncA type="table" tableValues="0 1" />
        </feComponentTransfer>
      </filter>
    </defs>

    {/* Top pillar (tallest) */}
    <path d="M308 39.8415V77C308 81.4183 311.582 85 316 85H426C430.418 85 434 81.4183 434 77V39.6747C434 36.8169 432.476 34.1761 430.001 32.747L377.154 2.22849C374.755 0.843044 371.81 0.797419 369.369 2.10787L312.216 32.7931C309.62 34.1869 308 36.8949 308 39.8415Z" fill="#FFF1E6" stroke="#FF6700" strokeOpacity="0.4" strokeWidth="2" strokeLinejoin="round" />
    {/* Fish icon on top pillar */}
    <rect width="64.7445" height="64.7445" rx="7" transform="matrix(0.866025 0.5 -0.866025 0.5 371.669 9.5)" fill="#FFE4CF" stroke="#FF6700" strokeOpacity="0.5" strokeWidth="2" />
    <image href="/fish-discover.svg" x="345" y="8" width="50" height="50" filter="url(#fish-mono)" />
    {/* Pillar body */}
    <rect x="0.866025" y="0.5" width="62.6632" height="435.954" rx="7" transform="matrix(0.866025 -0.5 0 1 371.116 75.1073)" fill="#FFF7F0" stroke="#FF6700" strokeOpacity="0.2" strokeWidth="2" />
    <rect x="0.866025" y="1.5" width="62.6632" height="434.756" rx="7" transform="matrix(0.866025 0.5 0 1 315.116 43.1085)" fill="#FFF7F0" stroke="#FF6700" strokeOpacity="0.2" strokeWidth="2" />

    {/* Middle pillar */}
    <path d="M155 151.209V189C155 193.418 158.582 197 163 197H272C276.418 197 280 193.418 280 189V151.042C280 148.208 278.501 145.586 276.06 144.148L223.693 113.306C221.265 111.876 218.263 111.829 215.791 113.183L159.158 144.192C156.594 145.596 155 148.286 155 151.209Z" fill="#FFEBDB" stroke="#FF6700" strokeOpacity="0.4" strokeWidth="2" strokeLinejoin="round" />
    {/* Fish icon on middle pillar */}
    <rect width="64.7445" height="64.7445" rx="7" transform="matrix(0.866025 0.5 -0.866025 0.5 219.669 118.5)" fill="#FFE4CF" stroke="#FF6700" strokeOpacity="0.5" strokeWidth="2" />
    <image href="/fish-navigate.svg" x="193" y="117" width="50" height="50" filter="url(#fish-mono)" />
    {/* Pillar body */}
    <rect x="0.866025" y="0.5" width="62.6632" height="345.297" rx="7" transform="matrix(0.866025 -0.5 0 1 218.116 184.765)" fill="#FFF7F0" stroke="#FF6700" strokeOpacity="0.2" strokeWidth="2" />
    <rect x="0.866025" y="1.5" width="62.6632" height="345.297" rx="7" transform="matrix(0.866025 0.5 0 1 162.116 151.567)" fill="#FFF7F0" stroke="#FF6700" strokeOpacity="0.2" strokeWidth="2" />

    {/* Short pillar */}
    <path d="M1 278.227V316C1 320.418 4.58172 324 9 324H119C123.418 324 127 320.418 127 316V278.06C127 275.217 125.491 272.587 123.036 271.153L70.1883 240.274C67.7718 238.863 64.7931 238.816 62.3338 240.152L5.18137 271.198C2.60449 272.597 1 275.295 1 278.227Z" fill="#FFD4B3" stroke="#FF6700" strokeOpacity="0.4" strokeWidth="2" strokeLinejoin="round" />
    {/* Fish icon on short pillar */}
    <rect width="64.7445" height="64.7445" rx="7" transform="matrix(0.866025 0.5 -0.866025 0.5 65.6688 247.5)" fill="#FFCBA0" stroke="#FF6700" strokeOpacity="0.5" strokeWidth="2" />
    <image href="/fish-train.svg" x="40" y="246" width="50" height="50" filter="url(#fish-mono)" />
    {/* Pillar body */}
    <rect x="0.866025" y="0.5" width="62.6632" height="345.297" rx="7" transform="matrix(0.866025 -0.5 0 1 65.116 312.765)" fill="#FFF7F0" stroke="#FF6700" strokeOpacity="0.15" strokeWidth="2" />
    <rect x="0.866025" y="1.5" width="62.6632" height="345.297" rx="7" transform="matrix(0.866025 0.5 0 1 9.11603 279.567)" fill="#FFF7F0" stroke="#FF6700" strokeOpacity="0.15" strokeWidth="2" />
  </svg>
);

export default EventsSvg;
