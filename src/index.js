import React from "react";
import ReactDOM from "react-dom";

import One from './One.jsx'


// contexes
import NameContextProvider from './NameContextProvider'


import "./styles.css";

function App() {
  return (
    <div className="App">

      <NameContextProvider>
        <One />
      </NameContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
