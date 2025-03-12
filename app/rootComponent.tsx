'use client';

import { useTheme } from '@/components/themeProvider';
import Header from '@/components/header/header';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();

  return (
    <html lang="en" className={theme === 'moon' ? 'dark' : ''}>
      <body
        className={`m-auto max-w-[75%] bg-light dark:bg-gray-800 ${rubik.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
