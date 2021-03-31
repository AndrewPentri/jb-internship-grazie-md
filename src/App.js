import React from "react";
import './App.scss';

import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";
import {EditorContextProvider} from "./components/EditorContext";


function App() {
  return (
    <div className="App">
        <EditorContextProvider>
            <Editor/>
            <Preview/>
        </EditorContextProvider>
    </div>
  );
}

export default App;
