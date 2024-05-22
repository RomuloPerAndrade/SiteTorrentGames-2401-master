import Link from "next/link";

export function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-slate-800 w-full px-6 py-2 ">
            <Link href="/">
                <h1 className="text-4xl uppercase font-bold text-amber-500">
                    Pirate Torrents
                </h1>
            </Link>
            <Link href="/sobre">sobre</Link>
        </nav>
    )
}