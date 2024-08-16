"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
const links = [
    // {
    //     label: "Features",
    //     href: "#Features",
    // },
    // {
    //     label: "Pricing",
    //     href: "#Pricing",
    // },
    // {
    //     label: "Wall of Love",
    //     href: "#WallOfLove",
    // },
    // {
    //     label: "FAQ",
    //     href: "#FAQ",
    // },
    {
        label: "Feedback",
        href: "https://noiton-card.canny.io/feature-requests",
        external: true,
    },
    {
        label: "Twitter",
        href: "https://twitter.com/your-twitter-handle", // Replace with your Twitter URL
        icon: faXTwitter,
        external: true, // Custom property to mark external links
    },
];

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-between">
                <div className="flex items-center md:gap-x-12">
                    <Link
                        href="/"
                        aria-label="Landing Page Boilerplate"
                        title="Landing Page Boilerplate"
                        className="flex items-center space-x-1 font-bold"
                    >
                        <Image
                            alt="Notion Card"
                            src="/logo.svg"
                            className="w-8 h-8"
                            width={32}
                            height={32}
                        />
                        <span className="text-gray-950 dark:text-gray-300 hidden md:block">
                            Notion Card
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                aria-label={link.label}
                                title={link.label}
                                className="tracking-wide transition-colors duration-200 font-norma hover:text-blue-500 flex items-center"
                                target={link.external ? "_blank" : "_self"}
                                rel={link.external ? "noopener noreferrer" : ""}
                            >
                                {link.icon ? (
                                    <FontAwesomeIcon
                                        icon={link.icon}
                                        className="text-xl"
                                    />
                                ) : (
                                    link.label
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-50 bg-white">
                            <div className="p-5 bg-background border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            href="/"
                                            aria-label="Landing Page Boilerplate"
                                            title="Landing Page Boilerplate"
                                            className="inline-flex items-center"
                                        >
                                            <Image
                                                alt="Notion Card"
                                                src="/logo.svg"
                                                className="w-8 h-8"
                                                width={32}
                                                height={32}
                                            />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                                                Notion Card
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="tracking-wide transition-colors duration-200 font-norma"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <FontAwesomeIcon icon={faX} />
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    aria-label={link.label}
                                                    title={link.label}
                                                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center"
                                                    target={
                                                        link.external
                                                            ? "_blank"
                                                            : "_self"
                                                    }
                                                    rel={
                                                        link.external
                                                            ? "noopener noreferrer"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setIsMenuOpen(false)
                                                    }
                                                >
                                                    {link.icon ? (
                                                        <FontAwesomeIcon
                                                            icon={link.icon}
                                                            className="text-xl"
                                                        />
                                                    ) : (
                                                        link.label
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
