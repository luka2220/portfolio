import Link from 'next/link';
import HeaderThemeToggle from './headerThemeToggle';
import { HeaderGithubIcon } from './headerGithubIcon';
import { HeaderLinkedinIcon } from './headerLinkedinIcon';
import { Rss } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex mt-6 text-gray-800 dark:text-light">
      <div className="flex-1 px-16">
        <Link href={'/'}>
          <h1>Title</h1>
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex justify-end gap-6 px-16">
          <Link href={'/blog'}>
            <Rss className="stroke-gray-800 dark:stroke-light" />
          </Link>
          <Link
            href={
              'https://www.linkedin.com/in/luka-piplica-1b5028185/'
            }
            target="_blank"
          >
            <HeaderLinkedinIcon />
          </Link>
          <Link href={'https://github.com/luka2220'} target="_blank">
            <HeaderGithubIcon />
          </Link>
          <HeaderThemeToggle />
        </div>
      </div>
    </header>
  );
}
