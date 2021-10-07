import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState("Click Me");
  return <button onClick={() => setState("Clicked")}>{state}</button>;
};

export default App;
