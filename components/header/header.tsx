import Link from 'next/link';
import HeaderThemeToggle from './headerThemeToggle';
import { HeaderGithubIcon } from './headerGithubIcon';
import { HeaderLinkedinIcon } from './headerLinkedinIcon';
import { Rss } from 'lucide-react';

export default function Header() {
  return (
    <header className="mt-3 flex flex-wrap items-center justify-between py-4 px-6 sm:px-12 text-gray-800 dark:text-light">
      <div className="sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        <Link href={'/'}>Luka Piplica</Link>
      </div>

      <nav className="flex items-center gap-4 sm:gap-6">
        <Link href={'/blog'}>
          <Rss className="stroke-gray-800 dark:stroke-light w-6 h-6" />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/luka-piplica-1b5028185/'}
          target="_blank"
        >
          <HeaderLinkedinIcon />
        </Link>
        <Link href={'https://github.com/luka2220'} target="_blank">
          <HeaderGithubIcon />
        </Link>
        <HeaderThemeToggle />
      </nav>
    </header>
  );
}
