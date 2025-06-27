import type { Metadata } from "next";
import { firaSans } from "@/lib/fonts";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Ringo Mar | Portfolio & Projects",
  description: "Portfolio and projects of Ringo Mar, a coder from Trinidad specializing in web development, timers, and innovative tools for streamers and developers.",
  creator: "RingoMar",
  keywords: ["Ringo Mar", "coder", "Trinidad", "web development", "Python", "TypeScript", "Go", "streaming tools", "OBS", "timers", "GitHub", "Twitch"],
  twitter: {
    card: "summary_large_image",
    title: "Ringo Mar!",
    description: "Portfolio and projects of Ringo Mar, a coder from Trinidad specializing in web development, timers, and innovative tools for streamers and developers.",
    creator: "@_ringomar",
    images: ["https://ringomar.com/assets/desc.png"],
  },
  openGraph: {
    title: "Ringo Mar!",
    description: "Portfolio and projects of Ringo Mar, a coder from Trinidad specializing in web development, timers, and innovative tools for streamers and developers.",
    url: "https://ringomar.com",
    siteName: "ringomar.com",
    images: [
      {
        url: "https://ringomar.com/assets/desc.png",
        width: 4173,
        height: 2538,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={firaSans.variable}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
      <SpeedInsights/>
    </html>
  );
}
