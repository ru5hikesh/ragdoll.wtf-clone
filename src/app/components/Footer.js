import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 400) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="p-4 mt-96 bg-near-black relative">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Ragdoll Logo"
                        width={56}
                        height={56}
                        className="mr-4"
                    />
                    <h5 className="andika-bold mr-8">
                        For Ragdoll cats (RAGDOLL)
                    </h5>
                    <Link href="https://x.com/Ragdoll_Base" className="inline-block align-middle">
                        <Image
                            src="/twitter.png"
                            alt="Twitter"
                            width={64}
                            height={64}
                            className="p-2"
                        />
                    </Link>
                    <Link href="https://t.me/BaseRagdoll" className="inline-block align-middle">
                        <Image
                            src="/Tg.svg"
                            alt="Telegram"
                            width={64}
                            height={64}
                            className="p-2"
                        />
                    </Link>
                </div>
            </footer>

            <button
                onClick={scrollTop}
                className={`fixed bottom-12 right-0 m-4 border-2 bg-blue-400 text-white p-3 z-10 rounded-full duration-300 ease-out ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <svg
                    viewBox="0 0 448 512"
                    className="m-auto w-5"
                >
                    <path
                        fill="currentColor"
                        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                    />
                </svg>
            </button>
        </>
    );
};

export default Footer;