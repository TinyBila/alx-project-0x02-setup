import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-lg">ALX Project</h1>
        <div className="space-x-6">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
        </div>
      </nav>
    </header>
  );
}
