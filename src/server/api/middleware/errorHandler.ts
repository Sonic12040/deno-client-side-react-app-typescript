import { Context, send, Status } from "../../../../deps.ts";

export async function errorHandler(ctx: Context, next: () => Promise<void>) {
  try {
    await next();
  } catch (error) {
    console.log("error occurred", error.status);
    if (error.status === Status.NotFound) {
      await send(ctx, "404.html", {
        root: `${Deno.cwd()}/src/server/static`,
      });
    } else {
      await send(ctx, "error.html", {
        root: `${Deno.cwd()}/static`,
      });
    }
  }
}
