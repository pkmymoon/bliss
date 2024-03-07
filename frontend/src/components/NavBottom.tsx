"use client";
import { motion } from "framer-motion";
import { HomeIcon, IndianRupee, Library, Shapes, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCamera, FaMapLocationDot } from "react-icons/fa6";
import { HiChatBubbleLeftRight, HiMiniHome } from "react-icons/hi2";

let tabs = [
    { path: "/map", label: "Map" },
    { path: "/camera", label: "Ledgers" },
    { path: "/forum", label: "Categories" },
    { path: "/profile", label: "Categories" },
];
export default function NavBottom() {
    const pathname = usePathname();
    return (
        <div className={`  fixed z-10 w-full   bottom-0`}>
            <div className="max-w-4xl mx-auto p-2 w-full">
                <div className="p-1 w-min mx-auto max-w-full flex border shadow-xl bg-background backdrop-blur-md  rounded-full justify-center gap-2 items-center">
                    <Link
                        href="/"
                        className="relative text-primary rounded-full group p-3 text-sm font-medium flex items-center gap-2  transition focus-visible:outline-2 active:scale-95"
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {pathname === "/" && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 -z-10 bg-accent drop-shadow-lg"
                                style={{ borderRadius: 9999 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6,
                                }}
                            />
                        )}
                        <HiMiniHome className=" w-6 h-6 " />
                    </Link>
                    {tabs.map((tab) => (
                        <Link
                            href={tab.path}
                            key={tab.path}
                            className="relative text-primary rounded-full group p-3 text-sm font-medium flex items-center gap-2  transition focus-visible:outline-2 active:scale-95"
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {pathname.startsWith(tab.path) && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 -z-10 bg-accent drop-shadow-lg"
                                    style={{ borderRadius: 9999 }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                />
                            )}
                            {tab.path === "/map" && (
                                <FaMapLocationDot className=" w-6 h-6 " />
                            )}
                            {tab.path === "/camera" && (
                                <FaCamera className=" w-6 h-6 " />
                            )}
                            {tab.path === "/forum" && (
                                <HiChatBubbleLeftRight className=" w-6 h-6 " />
                            )}
                            {tab.path === "/profile" && (
                                <FaUserCircle className=" w-6 h-6 " />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
