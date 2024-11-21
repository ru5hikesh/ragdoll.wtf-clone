"use client";

import React from "react";

export default function Roadmap() {
    return (
        <>
            {/* Roadmap Section */}
            <section
                id="roadmap" /* Added id for "Roadmap" section */
                className="bg-near-black relative mt-7 bg-[#222]"
                style={{ minHeight: "100vh" }}
            >
                {/* Roadmap Title */}
                <div className="scroll-x overflow-hidden w-full">
                    <h2 className="text-blue-300 text-center andika-bold whitespace-pre relative text-7xl sm:text-8xl">
                        ROADMAP
                        <div
                            className="inset-1 absolute text-green-100"
                            style={{ "--tw-bg-opacity": 0.3 }}
                        >
                            ROADMAP
                        </div>
                    </h2>
                </div>

                {/* Phase 1 */}
                <div className="sm:text-right mx-10 mt-10 overflow-hidden relative">
                    <div
                        style={{ backgroundImage: "url('/community.jpg')" }}
                        className="absolute sm:right-1/2 sm:rounded-full inset-0 duration-300 ease-out bg-cover md:bg-contain"
                    ></div>
                    <div className="w-full text-left bg-gradient-to-r from-blue-500 p-4 inline-block border-l-4 border-blue-300 sm:w-1/2 relative via-blue-500">
                        <h3 className="andika-bold text-2xl mb-4">PHASE 1</h3>
                        <ul className="space-y-3 text-lg">
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Website and Social Media Launch
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Airdrop Active Wallets
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Initial Marketing Campaigns
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Tokenomics Release
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Roadmap Release
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Phase 2 */}
                <div className="mx-10 mt-10 relative overflow-hidden">
                    <div
                        style={{ backgroundImage: "url('/surf-wave.jpg')" }}
                        className="absolute sm:left-1/2 sm:rounded-full inset-0 duration-300 ease-out bg-cover md:bg-contain"
                    ></div>
                    <div className="w-full text-left bg-gradient-to-r from-blue-500 via-blue-500 p-4 inline-block border-r-4 border-blue-300 sm:w-1/2 relative">
                        <h3 className="andika-bold text-2xl mb-4">PHASE 2</h3>
                        <ul className="space-y-3 text-lg">
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                AUDIT APPLICATIONS
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                CEX Listing
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                CMC Listing
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Social Media Marketing
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                First Meme Contest
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Further Payments
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Community Development
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Phase 3 */}
                <div className="sm:text-right mx-10 mt-10 relative overflow-hidden">
                    <div
                        style={{ backgroundImage: "url('/reward.jpg')" }}
                        className="absolute sm:right-1/2 sm:rounded-full inset-0 duration-300 ease-out bg-cover md:bg-contain"
                    ></div>
                    <div className="w-full text-left bg-gradient-to-r from-blue-500 via-blue-500 p-4 inline-block border-l-4 border-blue-300 sm:w-1/2 relative">
                        <h3 className="andika-bold text-2xl mb-4">PHASE 3</h3>
                        <ul className="space-y-3 text-lg">
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Further Ecosystem Development
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Listing on Major CEX
                            </li>
                            <li>
                                <img
                                    className="mr-3 inline-block w-5 filter invert"
                                    src="/mark.svg"
                                    alt="Mark"
                                />
                                Advanced Marketing
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tokenomics Section */}
            <section
                id="tokenomics" /* Added id for "Tokenomics" section */
                className="bg-[#222] bg-near-black relative p-7 flex flex-col items-center justify-center"
                style={{ minHeight: "60vh" }}
            >
                {/* Title */}
                <div className="mb-5 scroll-x overflow-hidden w-full">
                    <h2 className="text-blue-300 text-center andika-bold whitespace-pre relative text-7xl sm:text-8xl">
                        TOKENOMICS
                        <div
                            className="inset-1 absolute text-green-100"
                            style={{ "--tw-bg-opacity": 0.3 }}
                        >
                            TOKENOMICS
                        </div>
                    </h2>
                </div>

                {/* Tokenomics Image */}
                <img
                    src="/tokenomics_1.png"
                    className="m-10 align-middle inline-block md:w-[600px] w-[400px] toke_img"
                    alt="Tokenomics Graphic"
                />

                {/* Tokenomics Details */}
                <div className=" text-center">
                    <div className="inline-block mb-5 align-middle">
                        <h4
                            className="relative z-1 font-mono text-center text-3xl sm:text-4xl md:text-5xl"
                            style={{
                                backgroundClip: "text",
                                backgroundImage:
                                    "linear-gradient(40deg, rgb(88, 18, 218) 0%, rgb(232, 42, 163) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent", // Makes the gradient apply to the text
                            }}
                        >
                            <span className="countdown">88,888,888,888</span>
                        </h4>
                        <h4
                            className="font-mono text-3xl sm:text-4xl md:text-5xl"
                            style={{
                                color: "rgb(255, 255, 255)", // White text for "RAGDOLL"
                                fontSize: "36px",
                                fontWeight: "400",
                                lineHeight: "40px",
                                textAlign: "center",
                                display: "inline",
                            }}
                        >
                            RAGDOLL
                        </h4>
                    </div>
                </div>
            </section>

            <section
                id="team"
                className="bg-background bg-near-black relative"
                style={{ minHeight: "100vh" }}
            >
                <div className="mb-5 scroll-x overflow-hidden w-full">
                    <h2 className="text-blue-300 text-center andika-bold whitespace-pre relative text-7xl sm:text-7xl">
                        TEAM
                        <div
                            className="inset-1 absolute text-green-100"
                            style={{ "--tw-bg-opacity": 0.3 }}
                        >
                            TEAM
                        </div>
                    </h2>
                </div>

                {/* Team Profiles Section */}
                <main className="relative text-center md:mx-0 lg:w-3/4 lg:mx-auto bg-near-black">
                    <div className="container_grid grid grid-cols-2 md:grid-cols-2">
                        <div className="box">
                            <img
                                src="/t-1.png"
                                alt="Team Member 1"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                        <div className="box">
                            <img
                                src="/t-2.png"
                                alt="Team Member 2"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                        <div className="box">
                            <img
                                src="/t-3.png"
                                alt="Team Member 3"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                        <div className="box">
                            <img
                                src="/t-4.png"
                                alt="Team Member 4"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </main>
            </section>

            {/* Scrollin images */}
            <section
                id="scrolling-images" /* Added id for "Scrolling images" section */
                className="bg-background marquee w-full relative overflow-hidden whitespace-pre p-4 pt-14"
            >
                <div className="overflow-hidden relative">
                    <div className="flex space-x-4 animate-scroll">
                        {[...[
                            "brand.jpg",
                            "community.jpg",
                            "under-wave.jpg",
                            "more.jpg",
                            "hero.jpg",
                            "reward.jpg",
                            "7.jpg",
                            "1.jpg",
                        ], ...[
                            "brand.jpg",
                            "community.jpg",
                            "under-wave.jpg",
                            "more.jpg",
                            "hero.jpg",
                            "reward.jpg",
                            "7.jpg",
                            "1.jpg",
                        ]].map((image, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(/${image})`,
                                }}
                                className="p-20 inline-block bg-no-repeat bg-cover bg-center"
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .animate-scroll {
                    display: flex;
                    animation: scroll-left 6s linear infinite;
                }

                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </>
    );
}
