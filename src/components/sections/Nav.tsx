import { useState } from 'react';
import { navLinks } from '../../data/navLinks.ts';
import '../../index.css';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
    {navLinks.map((item) => (
      <li
        key={item.id}
        className="text-neutral-400  max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
      >
        <a
          href={item.href}
          className="text-lg hover:text-neutral-500 transition-colors"
          onClick={onClick}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center">
              <img
                src="/assets/images/king-protea.png"
                alt="logo"
                width={50}
                height={50}
                className="inline-block"
              />
              <span className="text-neutral-400 font-bold text-xl ml-3 hover:text-neutral-500 transition-colors">
                Dummy Dental Surgery
              </span>
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={
                isOpen ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'
              }
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={` absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
