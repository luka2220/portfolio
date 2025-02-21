'use client';

import { useTheme } from '@/components/themeProvider';
import Header from '@/components/header/header';

export default function Root({
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
