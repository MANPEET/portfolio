import React, { useRef, useState } from "react";

const Card = ({ Icon, title, description }) => {
    const divRef = useRef(null);
    const [opacity, setOpacity] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    const onMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setRotate({
            x: (y - centerY) / 7,
            y: (centerX - x) / 7,
        });

        setPosition({ x, y });
        setOpacity(1);
        setActive(true);
    };

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setActive(false);
        setOpacity(0);
    };

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border p-7 mb-5 shadow-sm transition-colors duration-300 ${
                active ? "text-white bg-black border-black" : "border-black/40 hover:border-black/20"
            }`}
            ref={divRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: "transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99), background-color 300ms, border-color 300ms",
            }}
        >
            {/* cursor spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.25), transparent 40%)`,
                }}
            />

            {/* corner accent */}
            <div
                className={`pointer-events-none absolute -right-8 -top-8 size-24 rounded-full blur-2xl transition-opacity duration-500 ${
                    active ? "opacity-40 bg-[#D3CAFF]" : "opacity-0"
                }`}
            />

            <div className="relative flex flex-col gap-8">
                <div
                    className={`flex items-center justify-center size-14 rounded-xl border transition-colors duration-300 ${
                        active ? "border-white/20 bg-white/10" : "border-black/40 bg-black/5"
                    }`}
                >
                    <Icon className="size-6" />
                </div>

                <div className="text-left">
                    <h2 className="text-[20px] lg:text-2xl font-semibold mb-3 flex items-center gap-2">
                        {title}
                        <span
                            className={`inline-block transition-transform duration-300 ${
                                active ? "translate-x-1" : "translate-x-0"
                            }`}
                        >
                            →
                        </span>
                    </h2>
                    <p
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                            active ? "text-white/70" : "text-black/60"
                        }`}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;