import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monoLisa = localFont({
  src: [
    {
      path: "../../public/fonts/MonoLisa-normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MonoLisa-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-monolisa",
});

export const metadata: Metadata = {
  title: "Drova Bots",
  description: "Bots I've built along the way, shaped by curiosity, AI, and a focus on building things that actually work and mean something.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${monoLisa.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              })()
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground font-mono transition-colors duration-300"
      >
        {children}
      </body>
    </html>
  );
}
