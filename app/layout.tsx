'use client';

import Header from '@/components/header/header';
import './globals.css';
import { ThemeProvider, useTheme } from '@/components/themeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Root>{children}</Root>
    </ThemeProvider>
  );
}

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();

  return (
    <html lang="en" className={theme === 'moon' ? 'dark' : ''}>
      <body className="bg-light dark:bg-gray-800">
        <Header />
        {children}
      </body>
    </html>
  );
}
