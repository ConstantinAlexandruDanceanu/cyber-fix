import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CyberFix</h1>
        <div className="space-x-6">
          <Link href="/">Acasă</Link>
          <Link href="/servicii">Servicii</Link>
          <Link href="/build-your-pc">Build Your PC</Link>
          <Link href="/cctv">Alarme & CCTV</Link>
          <Link href="/despre">Despre Noi</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}