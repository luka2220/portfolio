export default function Home() {
  return (
    <>
      {/* Hero section  */}
      <section className="w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:max-w-4xl mx-auto">
        <h3 className="mb-4 text-gray-800 dark:text-gray-400 lg:text-2xl md:text-2xl sm:text-xl">
          Hey, there 👋
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-gray-400">
          I&apos;m{' '}
          <span className="text-gray-800 dark:text-name">Luka Piplica</span>
          <br />
          <span className="text-gray-800 dark:text-light">
            a Software Engineer
          </span>
        </h1>
        <h3 className="mt-3 text-xl sm:text-xl md:text-2xl leading-[1.45] text-gray-800 dark:text-gray-400">
          Specializing in designing, building, and optimizing full-stack web
          applications.
        </h3>
      </section>

      <section className="min-h-screen flex flex-col items-center px-6 md:px-16 lg:max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 dark:text-name">
          A little bit about me
        </h1>
        <h3 className="my-5 text-gray-800 dark:text-gray-400 text-center lg:text-2xl md:text-2xl sm:text-xl leading-7">
          I am a software developer passionate about building software and
          contributing to open-source projects and tools. My main programming
          languages are TypeScript and JavaScript, however I love learning new
          technologies and digging deep into how things run and work at a low
          level. I specialize in web applications and software tooling, and have
          an interest in high-performance applications from server-side APIs to
          client-side optimizations. I also like working on tools for myself and
          other developers to help speed up development time 💨.
        </h3>
      </section>
    </>
  );
}
