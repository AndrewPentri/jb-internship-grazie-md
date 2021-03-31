import React from "react";
import './App.scss';

import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";


function App() {
  return (
    <div className="App">
      <Editor/>
      <Preview/>
    </div>
  );
}

export default App;
