import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Navbar />
      <header className="text-center py-20">
        <h1 className="text-4xl font-bold">Bine ai venit la CyberFix</h1>
        <p className="text-lg mt-4">Soluții profesionale pentru reparații PC, rețelistică și securitate.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg">
          Vezi Serviciile Noastre
        </button>
      </header>
    </div>
  );
}