import React from 'react';
import Header from './components/Header';
import {
  AppWindow,
  ArrowDown,
  GitBranch,
  Pen,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Counter from './components/Counter';
import Card from './components/Card';
import ProgressCard from './components/ProgressCard';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const services = [
  {
    Icon: Pen,
    title: 'Frontend Development',
    description:
      'I craft responsive, interactive, and visually stunning user interfaces using React, Next.js, and Tailwind CSS, as seen across NoteAI\'s dashboard and Chatty\'s chat UI.',
  },
  {
    Icon: Zap,
    title: 'Real-Time Features',
    description:
      'I build live, socket-driven experiences: Socket.IO powers Chatty\'s typing indicators and read receipts, while Pusher drives NoteAI\'s real-time Kanban board.',
  },
  {
    Icon: Sparkles,
    title: 'AI Integration',
    description:
      'I integrate LLMs into real products, like NoteAI\'s Google Gemini-powered meeting summarizer and in-app AI chat agent for querying past meetings.',
  },
  {
    Icon: ShieldCheck,
    title: 'Auth & Payments',
    description:
      'I implement secure authentication and billing flows, from NextAuth session handling in NoteAI to Stripe-powered Pro subscription upgrades.',
  },
  {
    Icon: AppWindow,
    title: 'Database Design',
    description:
      'I model and query data with Prisma and PostgreSQL for structured SaaS data in NoteAI, and MongoDB for flexible, high-volume chat history in Chatty.',
  },
  {
    Icon: GitBranch,
    title: 'Version Control & Deployment',
    description:
      'I use Git and CI/CD workflows to ship full-stack applications with confidence, deploying to platforms like Vercel and Render with proper environment configs.',
  },
];

function App() {
  return (
    <div className="w-full">
      <div className="text-[#262729] py-6 sm:py-8 ">
        <Header />

        <div className="sm:mx-5 md:mx-8 lg:mx-28 mt-14 lg:mt-12 mx-3">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-[-0.03em] lg:tracking-[-0.045em] mb-8 lg:mb-10">
            <div className="flex flex-col mb-6 lg:mb-7 ">
              <h1 className=" leading-[0.98] tracking-tight text-left ">
                <span className="block md:hidden text-[2.7rem] xs:text-[2.6rem] sm:text-[4.2rem]">
                  Full-Stack Engineer
                  <br />
                  <span className="inline-flex items-center justify-center border-[0.06em] border-neutral-900 rounded-full w-[1.62em] h-[1.62em] text-[0.62em] font-semibold mx-[0.05em] align-middle">
                    &amp;
                  </span>{" "}
                  Fr
                  <span className="inline-block border-[0.09em] border-neutral-900 rounded-full w-[2.05em] h-[0.52em] mx-[0.02em] align-middle" />
                  nt
                  <br />
                  -End Developer
                </span>
 
                <span className="hidden md:block text-[3rem] lg:text-[4rem] xl:text-[8.5rem]">
                  Full-Stack Engineer{" "}
                  <span className="inline-flex items-center justify-center border-[0.05em] border-neutral-900 rounded-full w-[1.2em] h-[1.2em] text-[0.6em] font-semibold mx-[0.05em] align-middle">
                    &amp;
                  </span>
                  <br />
                  Fr
                  <span className="inline-block border-[0.08em] border-neutral-900 rounded-full w-[1em] h-[0.5em] mx-[0.03em] align-middle" />
                  nt-End Developer
                </span>
        
              </h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight relative mb-2">
                Building
                <span className="px-2 py-1 bg-gray-900 text-white rounded-lg ml-2">Real Products</span>
              </h2>

              <div className="lg:text-center">
                <p className="text-lg text-gray-600">Not Just Demos</p>
              </div>
            </div>

            <div className="hidden lg:block mx-15 border-r h-25" />
            <div className="lg:hidden border-b w-100 lg:my-2 my-1" />

            <div className="text-[#54575D] text-base sm:text-lg lg:w-[65%]">
              I'm <b>Manpreet, a recent diploma graduate and Full-Stack Developer</b> specializing
              in React, Next.js, and Node.js. This site showcases projects I've actually shipped,
              from an AI-powered meeting summarizer SaaS to a real-time MERN chat app, as I build
              toward my first junior developer role.
            </div>
          </div>
        </div>

        <div className="mx-5 sm:mx-6 md:mx-8 lg:mx-10 mt-14 lg:mt-16 flex flex-col lg:flex-row justify-between lg:items-center gap-10">
          <div className="flex flex-wrap items-center gap-6 lg:gap-25 justify-between lg:justify-start">
            <p className="text-lg">&copy; 2024</p>

            <button
              className="border rounded-full relative w-42 py-2
                hover:scale-95 hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center justify-center uppercase">
                Scroll Down <ArrowDown className="animate-bounce ml-2" />
              </span>
            </button>
          </div>

          <div className="w-full lg:w-[50%] flex items-center justify-center lg:block">
            <div className="flex flex-wrap gap-x-20 gap-y-3 lg:justify-between uppercase items-center">
              <a href="https://github.com/MANPEET" className="flex items-center hover:opacity-60 transition-opacity">
                <FaGithub className="inline mr-2" /> Github
              </a>
              <a href="https://www.linkedin.com/in/manpreet-singh-a365a4302/" className="flex items-center hover:opacity-60 transition-opacity">
                <FaLinkedin className="inline mr-2" /> LinkedIn
              </a>
              <a href="#" className="flex items-center hover:opacity-60 transition-opacity">
                <FaInstagram className="inline mr-2" /> Instagram
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-b mx-5 sm:mx-6 md:mx-8 lg:mx-0 my-16 lg:my-28" />

        <div className="lg:px-20 lg:pb-32">
          <div className="lg:flex block gap-10">
            <div className="lg:w-[61%] mx-5 sm:mx-6 md:mx-8 lg:mx-0" id="about">
              <div className="flex items-center">
                <ul className="list-disc ml-8 mb-4">
                  <li className="marker:text-4xl">
                    <span className="text-sm uppercase">Get in touch with me</span>
                  </li>
                </ul>
              </div>

              <div className="lg:p-7">
                <p className="border-b pb-8 lg:pb-10 text-xl sm:text-2xl lg:text-[28px] font-semibold">
                  I'm passionate about full-stack web development and love building interactive,
                  user-friendly applications. With hands-on experience in React, Next.js, Node.js,
                  Express, MongoDB, and PostgreSQL, I create seamless, functional, and responsive
                  web experiences and solve real problems through clean, thoughtful code.
                </p>
              </div>

              <div className="py-5 lg:px-7 flex flex-wrap gap-y-8 justify-between">
                <Counter end="300" title="Hours of Coding" />
                <Counter end="5" title="Personal Projects" />
                <Counter end="6.2" title="Technologies Used" />
              </div>
            </div>

            <div className="lg:w-[50%] mx-5 sm:mx-6 md:mx-8 lg:mx-0 mt-8 lg:mt-0">
              <img
                src="../img/portfolio.png"
                alt="portfolio-image"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        <section className="text-center px-5 sm:px-6 md:px-8 lg:px-27">
          <h2 className="text-4xl sm:text-5xl font-semibold py-12 lg:py-18 lg:text-8xl">
            What I Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
            {services.map((service) => (
              <Card key={service.title} {...service} />
            ))}
          </div>
        </section>

        <Projects />

        <Experience />

        <ProgressCard />

        <Footer />
      </div>
    </div>
  );
}

export default App;