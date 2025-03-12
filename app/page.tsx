import ProjectCard, { IProjectCardProps } from '@/components/ProjectCard';

const projects: IProjectCardProps[] = [
  {
    name: 'Memcached Client Tool',
    description:
      'CLI tool for interacting with the memcached server via a TCP client',
    technologies: ['go', 'cli', 'memcahed', 'network-programming'],
    article:
      'https://medium.com/@piplicaluka64/building-a-memcached-cli-client-in-go-493874b30a79',
    github: 'https://github.com/luka2220/memcached-cli-client',
  },
  {
    name: 'Vocalytics',
    description:
      'An application allows invidiauls to enhance their english speaking skills through AI',
    technologies: ['python', 'react', 'docker', 'flask', 'terraform'],
    article: 'https://devpost.com/software/vocalytics-djewvc',
    github: 'https://github.com/luka2220/Vocalytics',
  },
  {
    name: 'DNS Forwarder',
    description:
      'A cli tool that can resolve the IP address for a host either from its local cache or by forwarding the request to an authoritative nameserver',
    technologies: ['go', 'cli', 'udp', 'network-programming'],
    github: 'https://github.com/luka2220/DNS-Forwarder',
    article:
      'https://medium.com/@piplicaluka64/building-a-dns-forwarder-cli-application-in-golang-79c3fe8eda5a',
  },
  {
    name: 'DNS Resolver API',
    description:
      "An API that turns the hostname of a url address into it's associated ip address",
    technologies: ['typescript', 'node.js', 'network-programming', 'rfc1035'],

    github: 'https://github.com/luka2220/dns-resolver-api',
  },
  {
    name: 'File Encrypt Decrypt',
    description:
      'A cli tool that encrypts and decrypts files using symmetric encryption algorithms',
    technologies: ['go', 'cli', 'aes-encryption'],
    github: 'https://github.com/luka2220/File-Encrypt-Decrypt',
    article:
      'https://medium.com/@piplicaluka64/introducing-a-golang-cli-application-for-file-encryption-and-decryption-df3588b3d708',
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:max-w-4xl mx-auto">
        <h3 className="mb-4 text-gray-800 dark:text-gray-400 para-text !leading-[1.45]">
          Hey, there 👋
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-400 !leading-[1.2]">
          I&apos;m{' '}
          <span className="text-gray-800 dark:text-name">Luka Piplica</span>
          <br />
          <span className="text-gray-800 dark:text-light">
            a Software Engineer
          </span>
        </h1>
        <h3 className="mt-3 para-text !leading-[1.45] text-gray-800 dark:text-gray-400">
          Specializing in designing, building, and optimizing full-stack web
          applications.
        </h3>
      </section>

      <section className="min-h-screen flex flex-col items-center px-6 md:px-16 lg:max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 dark:text-name">
          A little bit about me
        </h1>
        <h3 className="my-10 text-gray-800 sm:text-2xl md:text-2xl lg:text-3xl sm:!leading-[4rem] dark:text-gray-400 text-center justify-between text-balance">
          I am a software engineer passionate about building software and
          contributing to open-source projects and tools. My main programming
          languages are TypeScript and JavaScript, however I love learning new
          technologies and digging deep into how things run and work at a low
          level. I specialize in web applications and software tooling, and have
          an interest in high-performance applications from server-side APIs to
          client-side optimizations. I also like working on tools for myself and
          other developers to help speed up development time 💨.
        </h3>
      </section>

      <section className="min-h-screen flex flex-col items-center px-6 md:px-16 lg:max-w-[100%] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 dark:text-name">
          Projects Archive
        </h1>

        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
