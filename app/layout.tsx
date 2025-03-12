import './globals.css';
import { ThemeProvider } from '@/components/themeProvider';
import { Metadata } from 'next';
import Root from './rootComponent';

export const metadata: Metadata = {
  title: 'Luka Piplica',
  description:
    'Portfolio site for showcasing my projects, skills, and articles',
};

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
