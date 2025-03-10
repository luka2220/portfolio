'use client';

import Image from 'next/image';
import githubIconLight from '@/assets/github-icon-light.svg';
import githubIconDark from '@/assets/github-icon-dark.svg';

import { useTheme } from '../themeProvider';

export function HeaderGithubIcon() {
  const { theme } = useTheme();

  return (
    <Image
      priority
      src={theme === 'moon' ? githubIconLight : githubIconDark}
      alt="github link icon"
      width={24}
      height={24}
    />
  );
}
