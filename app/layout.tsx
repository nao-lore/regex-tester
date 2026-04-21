import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "Regex Tester - Test Regular Expressions Online | regex-tester",
  description:
    "Free online regex tester and debugger. Test regular expressions in real time with match highlighting, group capture display, and replace functionality.",
  keywords: [
    "regex tester",
    "regex test online",
    "regular expression tester",
    "regex debugger",
    "regex validator",
    "regex checker",
  ],
  authors: [{ name: "regex-tester" }],
  openGraph: {
    title: "Regex Tester - Test Regular Expressions Online",
    description:
      "Free online regex tester with real-time match highlighting, capture groups, and replace. Test and debug regular expressions instantly.",
    url: "https://regex-tester.vercel.app",
    siteName: "regex-tester",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regex Tester - Test Regular Expressions Online",
    description:
      "Free online regex tester with real-time match highlighting, capture groups, and replace.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://regex-tester.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Regex Tester",
              description:
                "Free online regex tester and debugger. Test regular expressions with real-time match highlighting, group capture display, and replace functionality.",
              url: "https://regex-tester.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Real-time regex match highlighting",
                "Capture group display",
                "Find and replace",
                "Common pattern quick-select",
                "Multiple regex flags support",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
