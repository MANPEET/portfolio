import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="border-t px-5 py-10 lg:flex justify-between items-center text-[#262729]">
      <div>
        <p className="text-lg font-semibold">Manpreet</p>
        <p className="text-sm text-gray-500">sahejsingh2309@gmail.com</p>
      </div>

      <div className="flex gap-6 uppercase text-sm mt-6 lg:mt-0">
        <a href="https://github.com/MANPEET"><FaGithub className="inline mr-2" /> Github</a>
        <a href="https://www.linkedin.com/in/manpreet-singh-a365a4302/"><FaLinkedin className="inline mr-2" /> LinkedIn</a>
        <a href="https://www.instagram.com/man_siingh/"><FaInstagram className="inline mr-2" /> Instagram</a>
      </div>

      <p className="text-sm text-gray-500 mt-6 lg:mt-0">&copy; 2024 Manpreet. All rights reserved.</p>
    </footer>
  );
};

export default Footer;