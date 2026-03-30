import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "../fonts/GeneralSans-Variable.ttf", style: "normal" },
    { path: "../fonts/GeneralSans-VariableItalic.ttf", style: "italic" },
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
