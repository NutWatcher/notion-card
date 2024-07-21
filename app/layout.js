import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Notion Card",
    description: "Craft Beautiful Notion Content Instantly.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={
                    "h-14 bg-gradient-to-r from-white to-white " +
                    inter.className
                }
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
