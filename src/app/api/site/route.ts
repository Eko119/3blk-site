import { NextResponse } from "next/server";
import { CAPABILITIES, PROCESS, PROJECTS, PROMISE, SITE } from "@/lib/site";

export const revalidate = 300;

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    {
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      tagline: SITE.tagline,
      promise: PROMISE.short,
      contactEmail: SITE.contactEmail,
      process: PROCESS,
      capabilities: CAPABILITIES,
      projects: PROJECTS,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    },
  );
}
