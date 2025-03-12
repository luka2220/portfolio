import Link from 'next/link';
import { HeaderGithubIcon } from './header/headerGithubIcon';

export interface IProjectCardProps {
  name: string;
  description: string;
  technologies: Array<string>;
  github: string;
  site?: string;
  article?: string;
}

export default function ProjectCard({
  name,
  description,
  technologies,
  github,
  site,
  article,
}: IProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 my-4 transition-transform hover:scale-[1.02] hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <Link href={github} target="_blank" aria-label="GitHub Repository">
          <HeaderGithubIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" />
        </Link>
        {site && (
          <Link
            href={site}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Live Site
          </Link>
        )}
        {article && (
          <Link
            href={article}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Article
          </Link>
        )}
      </div>
    </div>

    // <div className="border-4 border-solid rounded-lg para-text mt-5 p-4">
    //   <p>{name}</p>
    //   <p>{description}</p>
    //   <br />
    //   <div className="flex flex-row flex-wrap gap-3 w-full">
    //     {technologies.map((tech) => (
    //       <p className="text-sm" key={tech}>
    //         {tech}
    //       </p>
    //     ))}
    //   </div>
    //   <br />
    //   <Link href={github} target="_blank">
    //     <HeaderGithubIcon />
    //   </Link>
    //   {site !== undefined ? (
    //     <>
    //       <br />
    //       <Link href={site} target="_blank">
    //         Live Site
    //       </Link>
    //     </>
    //   ) : undefined}
    // </div>
  );
}
