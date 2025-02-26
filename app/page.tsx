export default function Home() {
  return (
    <>
      <section className="max-w-[50%] min-h-screen flex flex-col justify-center">
        <h3 className="mb-4 text-gray-800 dark:text-gray-400">Hey, there 👋</h3>
        <h1 className="leading-tight text-gray-800 dark:text-gray-400">
          I&apos;m{' '}
          <span className="text-gray-800 dark:text-name">Luka Piplica</span>
          <br />
          <span className="text-gray-800 dark:text-light">
            a Software Engineer
          </span>
        </h1>
        <h3 className="mt-3 leading-[1.45] text-gray-800 dark:text-gray-400">
          specializing in designing, building, and optimizing full-stack web
          applications.
        </h3>
      </section>
      {/* <section className="min-h-screen">
        <h2>Projects</h2>
        <h3>Project</h3>
        <h3>Project</h3>
        <h3>Project</h3>
        <h3>Project</h3>
        <h3>Project</h3>
        <h3>Project</h3>
        <h3>Project</h3>
        <h3>Project</h3>
      </section> */}
    </>
  );
}
