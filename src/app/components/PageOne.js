"use client";

import React, { useState, useEffect } from "react";

export default function PageOne() {
    const [menuHidden, setMenuHidden] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuHidden(!menuHidden);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Adjust 50 to the scroll threshold
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main
            className="min-h-screen w-full relative"
            style={{
                transition: "background-position 0.5s ease-out",
                background: "fixed url(/swim.jpg) center / cover no-repeat",
                backgroundPositionY: "10%",
                height: "100vh",
            }}
        >
            <div
                className="top-0 inset-0 absolute pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, #1e40af, #047857, #000000)",
                    opacity: 0.8,
                    "--tw-gradient-stops":
                        "var(--tw-gradient-from), #047857, var(--tw-gradient-to, rgba(4, 120, 87, 0))",
                }}
            />

            {/* Top Left Logo */}
            <div
                className={`fixed top-0 left-0 z-50 p-6 transition-opacity duration-300 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
                <img
                    className="w-24 sm:w-20 md:w-28 duration-300 ease-out"
                    src="/logo.png"
                    alt="Logo"
                />
            </div>

            {/* Navigation Menu */}
            <div
                className={`fixed right-0 top-0 p-10 bg-background h-full text-3xl font-bold text-center px-16 md:top-10 z-50 ${menuHidden ? "translate-x-full" : "translate-x-0"}`}
            >
                <img
                    src="/logo.png"
                    className="w-32 sm:w-28 md:w-36 duration-300 ease-out m-auto"
                    alt="Logo"
                />
                <a
                    className="hover:text-blue-400 block mt-6"
                    href="#origin"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#origin").scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    RAGDOLL ORIGIN
                </a>
                <a
                    className="hover:text-blue-400 block my-16"
                    href="#roadmap"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#roadmap").scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    ROADMAP
                </a>
                <a
                    className="hover:text-blue-400 block"
                    href="#tokenomics"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#tokenomics").scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    TOKENOMICS
                </a>
                <a
                    className="hover:text-blue-400 block my-16"
                    href="#team"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#team").scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    TEAM
                </a>
            </div>

            {/* Menu Button */}
            <button
                onClick={toggleMenu}
                className={`text-blue-200 p-4 right-0 fixed top-0 m-3 space-y-1 z-[51] md:top-12 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-100"}`}
            >
                <div
                    className={`bg-white h-1 w-10 transform duration-300 ease-out ${!menuHidden ? "rotate-45 absolute mt-1" : ""}`}
                />
                <div
                    className={`bg-white h-1 w-10 duration-300 ease-out ${!menuHidden ? "opacity-0 absolute" : ""}`}
                />
                <div
                    className={`bg-white h-1 w-10 transform duration-300 ease-out ${!menuHidden ? "-rotate-45" : ""}`}
                />
            </button>

            {/* Main Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="relative text-center font-fredoka-semi font-bold text-8xl md:text-9xl text-white mt-[80px]">
                    For the love of Ragdoll cats
                </h1>
            </div>
        </main>
    );
}
