import { JetBrains_Mono, Geist } from "next/font/google";
import NavBar from "../components/NavBar";
import Gradient from "../components/Gradient";
import PageTransition from "../components/PageTransitions";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-geist",
});

export const metadata = {
  title: "Daniel's Portfolio",
  description:
    "Daniel Kosukhin is a passionate problem solver that designs simplistic, user-friendly experiences and innovative mechanical systems.",
  metadataBase: new URL("https://kosukhin.com"),

  openGraph: {
    title: "Daniel's Portfolio",
    images: [
      {
        url: "/assets/gradients/sea-gradient.png",
        width: 500,
        height: 500,
        alt: "kosukhin.com preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} min-h-screen antialiased relative`}
      >
        <Gradient />
        <CustomCursor />
        <PageTransition>
          <div className="flex flex-col min-h-screen z-100">
            {/*main navbar*/}
            <NavBar />
            <main className="w-full max-w-[1130px] px-[15px] mx-auto flex-grow">
              <div>{children}</div>
            </main>
            <Footer />
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
