import { Context, send } from "../../../../deps.ts";

export async function staticFiles(context: Context) {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
}
