import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thon Peter Mawut | Software Engineer & Computer Science Educator',
  description: 'Portfolio of Thon Peter Mawut. Software engineering, systems design, and computer science education.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}


