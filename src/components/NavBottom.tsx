"use client";
import { motion } from "framer-motion";
import { HomeIcon, IndianRupee, Library, Shapes, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

let tabs = [
    { path: "/transactions", label: "Transactions" },
    { path: "/ledgers", label: "Ledgers" },
    { path: "/categories", label: "Categories" },
];
export default function NavBottom() {
    let [activeTab, setActiveTab] = useState(tabs[0].path);
    const pathname = usePathname();
    return (
        <div
            className={`${
                pathname === "/login" ? "hidden" : "block"
            }  fixed z-10 w-full   bottom-0`}
        >
            <div className="max-w-4xl mx-auto p-2 w-full">
                <div className="p-1 w-min mx-auto max-w-full flex border shadow-xl bg-inherit/20 backdrop-blur-md  rounded-full justify-center gap-2 items-center">
                    <Link
                        href="/"
                        className={`${
                            pathname === "/"
                                ? "text-primary py-3 px-4"
                                : "hover:text-primary/60 text-primary/50 p-3"
                        } relative rounded-full group  text-sm font-medium flex items-center gap-2  transition focus-visible:outline-2 active:scale-95`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {pathname === "/" && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 -z-10 bg-secondary drop-shadow-lg"
                                style={{ borderRadius: 9999 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6,
                                }}
                            />
                        )}
                        <HomeIcon className=" w-5 h-5 " />
                        <span
                            className={`${
                                pathname === "/" ? "block" : "hidden"
                            } `}
                        >
                            Home
                        </span>
                    </Link>
                    {tabs.map((tab) => (
                        <Link
                            href={tab.path}
                            key={tab.path}
                            className={`${
                                pathname.startsWith(tab.path)
                                    ? "text-primary py-3 px-4"
                                    : "hover:text-primary/60 text-primary/50 p-3"
                            } relative rounded-full group  text-sm font-medium flex items-center gap-2  transition focus-visible:outline-2 active:scale-95`}
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {pathname.startsWith(tab.path) && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 -z-10 bg-secondary drop-shadow-lg"
                                    style={{ borderRadius: 9999 }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                />
                            )}
                            {tab.path === "/ledgers" && (
                                <Library className=" w-5 h-5 " />
                            )}
                            {tab.path === "/transactions" && (
                                <IndianRupee className=" w-5 h-5 " />
                            )}
                            {tab.path === "/categories" && (
                                <Shapes className=" w-5 h-5 " />
                            )}
                            <span
                                className={`${
                                    pathname.startsWith(tab.path)
                                        ? "block"
                                        : "hidden"
                                } `}
                            >
                                {tab.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
