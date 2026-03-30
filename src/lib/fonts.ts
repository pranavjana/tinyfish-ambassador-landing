import localFont from "next/font/local";

export const inter = localFont({
  src: [
    { path: "../fonts/Inter.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Inter-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Inter-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
});

export const geistMono = localFont({
  src: "../fonts/GeistMono-100_900.ttf",
  variable: "--font-mono",
});

export const hostGrotesk = localFont({
  src: "../fonts/hostGrotesk-400_800.ttf",
  variable: "--font-host",
});

export const pristine = localFont({
  src: "../fonts/pristine-Bold.ttf",
  variable: "--font-pristine",
  weight: "700",
});

export const gambarino = localFont({
  src: "../fonts/Gambarino-Regular.otf",
  variable: "--font-gambarino",
  weight: "400",
});

export const ranade = localFont({
  src: [
    { path: "../fonts/Ranade-Variable.ttf", style: "normal" },
    { path: "../fonts/Ranade-VariableItalic.ttf", style: "italic" },
  ],
  variable: "--font-body",
});
