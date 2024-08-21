import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Animal planet",
  description: "Antipolic task",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weights: ["400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  );
}
