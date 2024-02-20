import "./Navbar.css";

function Navbar() {
  return (
    <nav className="sticky-top bg-transparent p-4 mt-4 mr-0">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="mr-8">
              <a className="text-white text-lg" href="#home">
                Home
              </a>
            </li>
            <li className="mr-8">
              <a className="text-white text-lg" href="#about">
                About
              </a>
            </li>
            <li className="mr-8">
              <a className="text-white text-lg" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-white text-lg" href="#technologies">
                Technologies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
