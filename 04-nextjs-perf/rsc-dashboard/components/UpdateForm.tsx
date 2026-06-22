"use client";

import { useOptimistic } from "react";
import { updateStat } from "../actions";

// UpdateForm.tsx — calls a Server Action and shows an optimistic update.
// TODO:
//  - useOptimistic to reflect the change instantly
//  - <form action={updateStat}> wiring
export function UpdateForm() {
  // const [optimistic, addOptimistic] = useOptimistic(...);
  return (
    <form action={updateStat}>
      {/* TODO: inputs + submit */}
    </form>
  );
}
