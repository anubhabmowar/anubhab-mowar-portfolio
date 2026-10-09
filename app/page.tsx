import Navbar from "@/components/navbar";
import KineticGrid from "@/components/ui/kinetic-grid";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <KineticGrid className="min-h-dvh flex-1">
      <header className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <main className="flex min-h-dvh flex-col items-center justify-center px-margin">
        <Hero />
      </main>
    </KineticGrid>
  );
}
