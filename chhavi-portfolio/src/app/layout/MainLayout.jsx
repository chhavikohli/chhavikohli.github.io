import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
}
