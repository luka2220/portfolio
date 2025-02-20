import Link from 'next/link';
import HeaderThemeToggle from './headerThemeToggle';
import { HeaderGithubIcon } from './headerGithubIcon';
import { HeaderLinkedinIcon } from './headerLinkedinIcon';

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
            <p>Blog</p>
          </Link>
          <Link
            href={
              'https://www.linkedin.com/in/luka-piplica-1b5028185/'
            }
          >
            <HeaderLinkedinIcon />
          </Link>
          <Link href={'https://github.com/luka2220'}>
            <HeaderGithubIcon />
          </Link>
          <HeaderThemeToggle />
        </div>
      </div>
    </header>
  );
}
