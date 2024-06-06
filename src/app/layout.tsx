import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ControlSystem/Footer";
import TopMenu from "@/components/ControlSystem/TopMenu";
import ReduxProvider from "@/redux/ReduxProvider";
import NextAuthProvider from "@/lib/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopDee",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen text-black`}>
        <ReduxProvider>
        <NextAuthProvider session={session}>
        <TopMenu/>
        <main className="container mx-auto mt-[navbarHeight]">
            {children}
        </main>
        <Footer/>
        </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
