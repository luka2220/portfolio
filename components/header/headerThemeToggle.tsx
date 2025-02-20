'use client';

import { DynamicIcon } from 'lucide-react/dynamic';
import { useTheme } from '../themeProvider';

export default function HeaderThemeToggle() {
  const { theme, setTheme } = useTheme();

  function updateTheme() {
    setTheme(theme === 'moon' ? 'sun' : 'moon');
  }
  return (
    <>
      <DynamicIcon
        className="  stroke-gray-800 dark:stroke-light"
        name={theme}
        onClick={updateTheme}
      />
    </>
  );
}
