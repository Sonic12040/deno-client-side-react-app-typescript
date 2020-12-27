// @deno-types="https://cdn.skypack.dev/types/react.d.ts@16.14.0"
import { React, ReactDOM } from "../../deps.ts";
import { App } from "./App.tsx";

ReactDOM.render(<App />, document.querySelector("#root"));
// To-Do: Get React app up and running with deno bundle. Blocked by setting up routes.
