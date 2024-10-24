import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import {Inter , Space_Grotesk} from 'next/font/google'

const inter = Inter({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-inter'
});
const spaceGrotesk = Space_Grotesk({
 subsets:['latin'],
  weight:['300','400','500','600','700'],
  variable:'--font-spaceGrotesk'
});

export const metadata: Metadata = {
  title: "DevQueries",
  description: "DevQueries is a collaborative platform for developers to ask questions, share solutions, and grow their expertise. Get help with coding challenges and contribute to an active community of problem solvers, just like Stack Overflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements:{
          formButtonPrimary:'primary-gradient',
          footerActionLink:'primary-text-gradient hover:text-primary-500'

        }
      }}
    >
        <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
    
  );
}
