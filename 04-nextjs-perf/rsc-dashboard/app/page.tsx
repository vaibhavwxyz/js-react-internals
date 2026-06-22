import { Suspense } from "react";
import { StatsCard } from "../components/StatsCard";
import { UpdateForm } from "../components/UpdateForm";

// Server Component: fetches data on the server and streams the UI.
// TODO:
//  - async data fetch (await) here
//  - wrap slow sections in <Suspense> so the shell streams first
async function Stats() {
  // TODO: const data = await fetch(...);
  return <StatsCard />;
}

export default function Page() {
  return (
    <main>
      <h1>RSC Dashboard</h1>
      <Suspense fallback={<p>Loading stats…</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Stats />
      </Suspense>
      <UpdateForm />
    </main>
  );
}
