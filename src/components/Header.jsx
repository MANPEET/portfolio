import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-[#262729] mx-5 sm:mx-6 lg:mx-10">
      <div className="flex items-center justify-between gap-6 text-md uppercase">

        <div id="logo" className="shrink-0">
          <img src="../img/logo.svg" alt="Logo" className="w-32 sm:w-40 lg:w-50" />
        </div>

        <nav className="mr-5 hidden lg:block">
          <ul className="underline uppercase flex flex-col space-y-0.5">
            <li>
              <a href="#" className="hover:text-primary transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </li>
          </ul>
        </nav>


        <div className="w-50 font-medium hidden lg:block">
          Full-Stack Developer Portfolio
        </div>
        <div className="w-55 font-medium hidden lg:block">
          Open to Junior Developer Roles
        </div>
        <div className="w-50 font-medium hidden lg:block lowercase">
          <p>sahejsingh2309@gmail.com</p>

          <div className="text-right text-md">
            (+1)825-526-2309

            <button className="border rounded-full relative w-40 py-2 mt-6 bg-[#D3CAFF]
              hover:scale-95 hover:bg-black hover:text-white  transition-colors duration-200 ease-in-out">
              <span className="flex items-center justify-center uppercase">Let's Talk</span>
            </button>
          </div>
        </div>


        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="lg:hidden border rounded-full p-2 shrink-0"
        >
          <Menu className="size-5" />
        </button>
      </div>


      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 max-w-[80vw] bg-white z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out lg:hidden
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <img src="../img/logo.svg" alt="Logo" className="w-28" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="border rounded-full p-2"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="px-6 py-8">
          <ul className="flex flex-col gap-6 uppercase text-lg">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-6 border-t mt-auto text-sm font-medium normal-case text-gray-500">
          <p>sahejsingh2309@gmail.com</p>
          <p className="mt-1">(+1) 825-526-2309</p>
          <p className="mt-4 uppercase text-xs tracking-wide text-gray-400">
            Open to Junior Developer Roles
          </p>

          <button
            className="border rounded-full relative w-full py-2 mt-6 bg-[#D3CAFF]
              hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
            onClick={() => scrollTo('#contact')}
          >
            <span className="flex items-center justify-center uppercase text-xs">Let's Talk</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;