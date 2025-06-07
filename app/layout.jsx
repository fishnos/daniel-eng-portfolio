import { JetBrains_Mono, Geist } from "next/font/google";
import MainNav from "../components/MainNav"
import PageTransition from "../components/PageTransitions";
import ScreenTransition from "../components/ScreenTransition";
import CustomCursor from "../components/CustomCursor";
import { Divider } from "@mui/material";
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
      <body className={`${geist.variable} antialiased overflow-hidden relative`}>
        <CustomCursor />
        <ScreenTransition/>
        <PageTransition>
          <div className="flex">
            {/*main navbar*/}
            <div
              className="hidden xl:flex w-[285px] h-screen bg-primary"
            >
              <MainNav />
            </div>
            <Divider 
              orientation="vertical" 
              flexItem 
              sx={{ 
                height: '100vh',
                borderColor: 'var(--color-accent)',
                opacity: 1,
                borderWidth: '0.5px'
              }} 
            />
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <header>
                header
              </header>
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
