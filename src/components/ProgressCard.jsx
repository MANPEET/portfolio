import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ProgressCard = () => {
    const features = [
        {
            title:"HTML",
            description:"The backbone of every webpage. I use semantic HTML to ensure accessibility, SEO optimization, and well-structured foundation for web applications.",
            progressWidth:"92%"
        },
        {
            title:"CSS & Tailwind CSS",
            description:"I design sleek, responsive, and visually appealing interfaces using CSS. With Tailwind CSS, I speed up the development process by leveraging its utility-first approach for styling.",
            progressWidth:"95%"
        },
        {
            title:"JavaScript",
            description:"The language that brings interactivity to the web. From DOM manipulation to API integrations, I use JavaScript to create dynamic and engaging user experiences.",
            progressWidth:"80%"
        },
        {
            title:"React & Next.js",
            description:"I build fast, scalable UI with React's component-based structure and hooks, and use Next.js for full-stack SaaS applications with server components, routing, and API integration.",
            progressWidth:"93%"
        },
        {
            title:"Node.js & Express.js",
            description:"For backend development, I use Node.js and Express.js to build robust, scalable, and efficient APIs, ensuring smooth data handling and authentication for web applications.",
            progressWidth:"89%"
        },
        {
            title:"MongoDB & PostgreSQL",
            description:"I work with both NoSQL and relational databases — MongoDB for flexible, scalable data storage and PostgreSQL (with Prisma) for structured, relational SaaS data models.",
            progressWidth:"85%"
        },
    ];
    
    return (
        <div className="mx-5 sm:mx-6 md:mx-8 lg:mx-22 px-0 sm:px-4 py-16 sm:py-24">
            <div className="flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-30">
                <div className="w-full lg:order-2">
                    <div className="lg:sticky lg:top-10 flex flex-col gap-8 lg:gap-12 pb-6 lg:pb-10">
                        <h2 className="text-4xl sm:text-5xl lg:text-8xl tracking-[-0.03em] lg:tracking-[-0.045em] font-semibold">Special Skills</h2>
                        <div className="font-medium">
                            <h3 className="text-lg mb-2 font-bold">Let's work together...</h3>
                            <p className="text-[16px] text-muted-foreground">
                                Looking for a web developer to bring your ideas to life? Let's connect and create something impactful!
                            </p>
                            <button className="border rounded-full relative w-40 py-2 mt-6 bg-[#D3CAFF] hover:scale-95 hover:bg-black hover:text-white transition-transform duration-200 ease-in-out">
                                <a href="document/resume-indeed.pdf" download className="flex items-center justify-center uppercase text-sm">
                                    Download CV <ArrowDown className="animate-bounce size-4 ml-2" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:order-1">
                    <ul>
                        {features.map((item) => (
                            <li key={item.title} className="pb-10 lg:pb-17">
                                <div className="flex justify-between text-lg sm:text-[22px] mb-3 lg:mb-4 font-bold">
                                    <h2>{item.title}</h2>
                                    <span>{item.progressWidth}</span>
                                </div>

                                <p className="text-sm sm:text-[16px]">{item.description}</p>

                                <div className="py-3">
                                    <div className="bg-[#26272924] inline-block w-[calc(100%-30px)] sm:w-[calc(100%-50px)] h-1 relative">
                                        <motion.div
                                            className="h-full relative bg-[#262729] before:absolute 
                                            before:right-0 before:top-[-12.5px] before:w-[25px] before:h-[25px] before:bg-white before:rounded-full"
                                            initial={{ width: "0%" }} 
                                            whileInView={{ width: item.progressWidth }}
                                            viewport={{ once: true, amount: 0.8 }}
                                            transition={{ duration: 1.4, ease: "easeInOut" }} 
                                        >
                                            <div className="absolute right-2 bottom-0 rounded-full bg-[#262729] w-2 h-2"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;