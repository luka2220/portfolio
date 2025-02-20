import Link from 'next/link';
import HeaderThemeToggle from './headerThemeToggle';

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
          <HeaderThemeToggle />
        </div>
      </div>
    </header>
  );
}
