import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thon Peter Mawut | Computer Science Teacher | Full Stack Developer | Data Analyst',
  description: 'Results-driven Computer Science graduate with expertise in software development, data analysis, and emerging technologies. Full Stack Developer specializing in React, Next.js, Blockchain, and Machine Learning.',
  keywords: ['Thon Peter Mawut', 'Full Stack Developer', 'Computer Science Teacher', 'Data Analyst', 'Blockchain Developer', 'Next.js', 'React', 'South Sudan'],
  authors: [{ name: 'Thon Peter Mawut' }],
  openGraph: {
    title: 'Thon Peter Mawut | Portfolio',
    description: 'Computer Science Teacher | Full Stack Developer | Data Analyst',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

