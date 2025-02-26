import Link from 'next/link';
import HeaderThemeToggle from './headerThemeToggle';
import { HeaderGithubIcon } from './headerGithubIcon';
import { HeaderLinkedinIcon } from './headerLinkedinIcon';
import { Rss } from 'lucide-react';

// BUG: Currently there is an issue with the responsivness size of the icons. Once the screen width is below 730px the icons become very small (except rss). Fix the responsivness, possibly add a menu button once the width gets below 730px

export default function Header() {
  return (
    <header className="flex mt-8">
      <div className="flex-1">
        <Link href={'/'}>
          <h2>Luka Piplica</h2>
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex justify-end gap-6">
          <Link href={'/blog'}>
            <Rss className="stroke-gray-800 dark:stroke-light" />
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
        </div>
      </div>
    </header>
  );
}
