'use client';

import Image from 'next/image';
import linkedinIconLight from '@/assets/linkedin-icon-light.svg';
import linkedinIconDark from '@/assets/linkedin-icon-dark.svg';

import { useTheme } from '../themeProvider';

export function HeaderLinkedinIcon() {
  const { theme } = useTheme();

  return (
    <Image
      priority
      src={theme === 'moon' ? linkedinIconLight : linkedinIconDark}
      alt="linkedin link icon"
      width={24}
      height={24}
    />
  );
}
