import { Application } from "../../deps.ts";
import { logger } from "./api/middleware/logger.ts";
import { timing } from "./api/middleware/timing.ts";
import { errorHandler } from "./api/middleware/errorHandler.ts";
import { router } from "./api/routes.ts";
import { staticFiles } from "./api/middleware/staticFiles.ts";

const port = 3000;

// To-Do: Add code to bundle up the React application and output it into the specified directory here.
// This will allow deno run ./src/server/server.ts to bundle up the react app and start the server simultaneously.

const app = new Application();
// Middleware
app.use(logger);
app.use(timing);
app.use(errorHandler);

// Routes
app.use(router.routes());

// Static Files
app.use(staticFiles);

// Start Server
await app.listen({ port: port });
