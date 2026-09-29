import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace — Online Courses",
  description:
    "Get access to hundreds of courses. Unlock your creativity, gain valuable knowledge, and grow your business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
