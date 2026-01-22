import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <div id="sentinel" className="h-1"></div>
      <main className="max-w-7xl mx-auto px-5 py-6">
        {children}
      </main>
    </div>
  );
}
