import type { Metadata } from "next";
import "./globals.css";

import ScrollProgress from "./components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Saran Mahadev | Generative AI Engineer",
  description: "Generative AI engineer building agentic AI, RAG, computer vision, and developer tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
