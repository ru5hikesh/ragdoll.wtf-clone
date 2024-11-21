"use client";

import React from "react";

export default function PageTwo() {
    return (
        <section
            id="origin"
            className="min-h-screen w-full flex flex-col items-center mt-10 p-3 bg-background text-white relative"
        >
            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center items-center space-x-4 mb-6">
                <a href="https://x.com/Ragdoll_Base" target="_blank" rel="noopener noreferrer">
                    <img src="/twitter.png" alt="Twitter" className="w-16" />
                </a>
                <a href="https://t.me/BaseRagdoll" target="_blank" rel="noopener noreferrer">
                    <img src="/Tg.svg" alt="Telegram" className="w-16" />
                </a>
            </div>

            {/* Logo */}
            <div className="mt-1">
                <img src="/logo.png" alt="Ragdoll Logo" className="w-56 m-auto" />
            </div>

            {/* "RAGDOLL ORIGIN" Section */}
            <div className="scroll-x overflow-hidden w-full mt-20">
                <h2 className="text-blue-300 text-center andika-bold whitespace-pre relative text-5xl sm:text-6xl lg:text-8xl">
                    RAGDOLL ORIGIN
                    <div
                        className="inset-1 absolute text-green-100"
                        style={{ "--tw-bg-opacity": 0.3 }}
                    >
                        RAGDOLL ORIGIN
                    </div>
                </h2>
            </div>

            {/* Text and Image Content */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 mt-10">
                {/* Text Content */}
                <div className="text-left andika-regular mx-6 sm:w-2/3 lg:w-1/2">
                    <p>
                        The RAGDOLL project is about Ragdoll cats, which are one of the famous cat breeds, and their popularity holds high brand value in cat-related products and the content market.
                    </p>
                    <hr className="border-green-700 my-2 mr-0 sm:mr-16" />
                    <p>
                        The RAGDOLL project came about in trying to provide new enjoyment for cat lovers as well as opening up the potential for continuous growth in the cat market.
                    </p>
                    <hr className="border-green-700 my-2 mr-0 sm:mr-8" />
                    <p>
                        The project &quot;RAGDOLL&quot; seeks to distribute entertaining memes featuring Ragdoll cats with the ultimate objective of leading it with the participation of all involved.
                    </p>
                </div>

                {/* Image */}
                <img
                    className="rounded-lg w-60 sm:w-72 lg:w-80"
                    src="/more.jpg"
                    alt="Ragdoll Project Image"
                />
            </div>
        </section>
    );
}
