"use client";

import React from "react";

export default function Ragdoll() {
    return (
        <h1
            className="fixed bottom-20 left-0 right-5 text-center text-blue-400 font-andika-bold text-[calc(110px+((100vw-400px)/(1200-400))*(240-100))] tracking-[-15px] z-[-1] pointer-events-none"
        >
            <span
                className="absolute inset-0 text-near-black animate-round"
                style={{
                    "--reach": "3px",
                    "--_reach": "calc(-1 * var(--reach))",
                }}
            >
                RAGDOLL
            </span>
            RAGDOLL
        </h1>
    );
}
