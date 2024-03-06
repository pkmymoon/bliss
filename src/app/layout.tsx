import NavBottom from "@/components/NavBottom";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
    title: "Bliss - Citizen Ai Partner",
    description: "",
};
const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Navbar/>
                <main className="min-h-screen mb-8 bg-background max-w-7xl mx-auto">
                    {children}
                </main>
                <NavBottom />
            </body>
        </html>
    );
}
