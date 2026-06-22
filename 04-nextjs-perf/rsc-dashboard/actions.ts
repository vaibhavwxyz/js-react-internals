"use server";

import { revalidatePath } from "next/cache";

// actions.ts — Server Actions run on the server, callable from the client.
// TODO:
//  - validate the FormData
//  - mutate the data source
//  - revalidatePath('/') so the RSC re-renders with fresh data
export async function updateStat(formData: FormData) {
  // TODO: implement
  revalidatePath("/");
}
