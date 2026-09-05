import { createFileRoute } from "@tanstack/react-router";
import { CambioApp } from "@/components/cambio-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <CambioApp />
    </main>
  );
}
