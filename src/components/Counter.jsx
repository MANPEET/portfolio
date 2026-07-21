import React, { useEffect, useState } from 'react';

const Counter = ({start = 0, end = 300, duration = 2, title}) => {
    const [count,setCount] = useState(start)
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const aboutSection = document.getElementById("about");
    
          if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            // Trigger when 50% of the section is visible
            if (rect.top < windowHeight / 2 && rect.bottom > 0) {
              setHasStarted(true);
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run once in case it's already in view
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    useEffect(() => {
        const totalSteps = duration * 60
        const increment = (end - start)/totalSteps
        let currentCount = start
        let steps = 0;

        const Interval = setInterval(() => {
            currentCount += increment
            setCount(Math.floor(currentCount))

            steps++
            if(steps >=totalSteps) clearInterval(Interval)
        }, 1000/60)

        return () => clearInterval(Interval)
    },[start,end,duration])

    return (
        <div className='font-bold  w-[50%]'>
            <div className=' lg:mb-2'>
                <span className='lg:text-6xl text-[42px]'>{count.toLocaleString()}</span>
                <span className='lg:text-3xl text-2xl mb-8'>+</span>
            </div>
            <h2 className='text-lg'>{title}</h2>
        </div>
    )
}

export default Counter
