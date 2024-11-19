import { Montserrat, Forum } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const forum = Forum({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

export const metadata = {
  title: "Dubai Hills Estate",
  description: "Dubai Hills Estate landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KKVWVDRW" />
      <body className={`${montserrat.variable} ${forum.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
