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
  title: "Medicinal & Ecological Shrubs",
  keywords: "Medicinal, Ecological",
  description: "ow-Maintenance Green Assets for Health, Heritage, and Habitat",
  openGraph: {
    title: "Medicinal & Ecological Shrubs",
    description:
      "Low-Maintenance Green Assets for Health, Heritage, and Habitat",
    url: "https://akv-site.vercel.app/",
    siteName: "Medicinal & Ecological Shrubs",
    images: [
      {
        url: "/images/shrubs.jpg",
        width: 1200,
        height: 630,
        alt: "Medicinal & Ecological Shrubs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
