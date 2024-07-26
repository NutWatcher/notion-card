import Script from "next/script";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const gtag = "G-S9EM6X9DCR";

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

                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag}', {
                page_path: window.location.pathname,
                });
              `,
                    }}
                />
            </body>
        </html>
    );
}
