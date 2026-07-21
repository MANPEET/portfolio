import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="px-5 sm:px-6 md:px-8 lg:px-27 py-12 lg:py-20">
      <h2 className="text-4xl sm:text-5xl font-semibold py-12 lg:py-18 lg:text-8xl text-center">
        Experience
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10 border-b pb-12 lg:pb-16">
        <div className="lg:w-[25%] mb-6 lg:mb-0 flex flex-col gap-6">
          <p className="text-sm uppercase text-gray-500">Final Semester Capstone, NAIT</p>

          <div>
            <p className="text-3xl sm:text-4xl font-semibold">10</p>
            <p className="text-sm text-gray-500">person team — my first time leading a backend team at this scale</p>
          </div>

          <div className="border rounded-xl p-4 text-left">
            <p className="text-xs uppercase text-gray-500 mb-2">Key Feature I Built</p>
            <p className="text-sm text-[#54575D]">
              An automatic ordering system letting clients schedule recurring orders biweekly or
              monthly, up to 3 months out, with separate pricing tiers for bulk vs. standard
              buyers.
            </p>
          </div>
        </div>

        <div className="lg:w-[65%]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-1">Backend Team Lead</h3>
          <p className="text-sm uppercase text-gray-500 mb-4">
            Alberta Food Security — AFS Shopping Centre
          </p>

          <p className="text-[#54575D] text-base sm:text-lg mb-4">
            Alberta Food Security is a farm-to-table produce company specializing in small-batch
            hydroponics. As Backend Team Lead, I helped design and build a Django-based
            e-commerce application to replace their manual, phone-based ordering process with a
            structured online catalogue and cart experience.
          </p>

          <ul className="list-disc ml-5 text-[#54575D] text-base sm:text-lg space-y-2 mb-6">
            <li>Led technical architecture and implementation planning for a client-facing Django e-commerce application</li>
            <li>Helped replace a manual phone-based ordering workflow with a structured online catalogue and cart experience</li>
            <li>Built and integrated core application workflows across Django, HTMX, and Bootstrap to support responsive user interactions</li>
            <li>Worked on pricing and catalogue logic to support product display, cart behavior, and ordering flows</li>
            <li>Coordinated backend and deployment integration using Django, Gunicorn, and Nginx</li>
            <li>Helped design the hosting and traffic flow model to align application behavior with server configuration and deployment requirements</li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Django', 'HTMX', 'Bootstrap', 'Gunicorn', 'Nginx', 'Cloudflare', 'GitHub'].map(
              (tech) => (
                <span key={tech} className="border rounded-full px-3 py-1 text-xs uppercase">
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;