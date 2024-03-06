"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={` sticky z-10 bg-background top-0 w-full  border-b`}>
            <div className="py-4 px-5 max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1>
                        <Link
                            href="/"
                            className=" font-bold tracking-tight text-xl"
                        >
                            Bliss
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
}
