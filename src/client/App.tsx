// @deno-types="https://cdn.skypack.dev/types/react.d.ts@16.14.0"
import { React } from "../../deps.ts";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <React.Fragment>
      <button onClick={() => setCounter(counter + 1)}>Increment Count</button>
      <div>The current count is: {counter}</div>
    </React.Fragment>
  );
};

export { App };
// To-Do: Get type-hints working on the React application. No casting to anys are acceptable.
