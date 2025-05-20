import { JSX } from "react";
import { fetcher } from "@/requests/fetcher";

export default async function Page(): Promise<JSX.Element> {
  const data = await fetcher("/categories", {
    method: "GET",
  });
  console.log({ data });

  return <div>TEST</div>;
}
