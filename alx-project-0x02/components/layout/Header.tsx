import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between">
        <h1 className="font-bold">ALX Project</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between">
        <h1 className="font-bold">ALX Project</h1>
        <div className="space-x-4">
          <Link href="/">Index</Link>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
