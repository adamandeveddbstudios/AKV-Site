import { Inter, Red_Hat_Display } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-redhat",
});

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property with Property Pulse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${redHat.variable}`}>
      <head></head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
