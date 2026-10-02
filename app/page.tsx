import Navbar from "@/components/navbar";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function Home() {
  return (
    <KineticGrid className="min-h-dvh flex-1">
      <header className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <main className="flex min-h-dvh flex-col items-center justify-center px-margin">
        <p className="text-label-caps text-primary">Anubhab Mowar</p>
        <h1 className="mt-gutter text-headline-xl text-on-background">
          Move your cursor
        </h1>
        <p className="mt-unit max-w-md text-center text-body-lg text-on-surface-variant">
          Interactive grid with warp, glow, and click ripples.
        </p>
      </main>
    </KineticGrid>
  );
}
