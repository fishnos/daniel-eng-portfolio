import { JetBrains_Mono, Geist } from "next/font/google";
import NavBar from "../components/NavBar";
import Gradient from "../components/Gradient"
import PageTransition from "../components/PageTransitions";
import ScreenTransition from "../components/ScreenTransition";
import CustomCursor from "../components/CustomCursor";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ['100','200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-geist'
})

export const metadata = {
  title: "Daniel's Portfolio",
  description: "Made by Daniel Kosukhin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased overflow-hidden relative`}>
        <Gradient/>
        <CustomCursor/>
        <ScreenTransition/>
        <PageTransition>
          <div className="flex">
            {/*main navbar*/}
            <div>
              <NavBar/>
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
