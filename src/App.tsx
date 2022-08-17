import React from "react";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import ErrorBound from "./components/ErrorBound";

function App() {
  return (
    <div>
      <ErrorBound>
        <Homepage />
      </ErrorBound>
    </div>
  );
}

export default App;
