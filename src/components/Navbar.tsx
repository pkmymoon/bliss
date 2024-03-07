"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={` sticky z-10 bg-background top-0 w-full`}>
            <div className="py-4 px-5 max-w-7xl mx-auto flex justify-between items-center">
                <h1>
                    <Link
                        href="/"
                        className=" font-extrabold tracking-tight text-3xl text-primary"
                    >
                        Bliss
                    </Link>
                </h1>
                <div className=" bg-lightGray rounded-full px-3 py-2 flex items-center gap-2">
                    <FaStar className=" size-4 text-yellow-500 " />
                    <h3 className=" font-medium text-primary">143</h3>
                </div>
            </div>
        </div>
    );
}
