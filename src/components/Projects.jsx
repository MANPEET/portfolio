import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "NoteAI",
    tagline: "AI Meeting Summarizer + Real-Time Kanban Board",
    description: "Full-stack SaaS that transcribes and summarizes meeting recordings with AI, then organizes action items on a real-time, Trello-style Kanban board with an AI chat agent for querying meetings, Stripe-powered Pro subscriptions, and PDF export.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Pusher", "Google Gemini", "Tailwind CSS", "Framer Motion", "Stripe"],
    github: "https://github.com/MANPEET/NoteAI",
    live: "https://note-ai-kanban.vercel.app/",
    image: "/img/NoteAi-hero.png",
  },
  {
    title: "Chatty",
    tagline: "Real-Time Messaging with WhatsApp-Style Delivery & Read Receipts",
    description: "Full-stack MERN chat application supporting 1-on-1 and group messaging over Socket.IO, with live typing indicators, delivered/read receipts down to the per-member level in group chats, group admin roles with kick/promote/leave permissions, and a searchable contacts system to start new conversations.",
    tech: ["React", "Express", "MongoDB", "Socket.IO", "Zustand", "Cloudinary", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "/img/chat-app.png",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="lg:px-27 py-20">
      <h2 className="text-5xl font-semibold py-18 lg:text-8xl text-center">Projects</h2>

      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <div key={project.title} className="lg:flex items-start justify-between gap-16 border-b pb-16">
            <div className="lg:w-[45%] mb-6 lg:mb-0">
              
                <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover rounded-xl"
                />
           
            </div>

            <div className="lg:w-[50%]">
              <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm uppercase text-gray-500 mb-4">{project.tagline}</p>
              <p className="text-[#54575D] text-lg mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="border rounded-full px-3 py-1 text-xs uppercase">{t}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} className="border rounded-full px-5 py-2 flex items-center gap-2 uppercase text-sm hover:bg-black hover:text-white transition-colors duration-200">
                  <Github className="size-4" /> Code
                </a>
                <a href={project.live} className="border rounded-full px-5 py-2 flex items-center gap-2 uppercase text-sm hover:bg-black hover:text-white transition-colors duration-200">
                  <ExternalLink className="size-4" /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;