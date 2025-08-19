import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gator Cricket – University of Florida",
  description:
    "Official site of Gator Cricket Club (UF) — National Collegiate Champions and Gainesville cricket community hub.",
  icons: { icon: "/favicon.ico" },
  themeColor: "#0021A5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* bg/text are also forced in globals.css; duplicating here guarantees UF look */}
      <body className={`${roboto.variable} font-sans antialiased bg-uf-blue text-white`}>
        {children}
      </body>
    </html>
  );
}
