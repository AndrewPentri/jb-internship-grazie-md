/**
* Component renders view of CodeMirror based markdown editor.
* */

import React from 'react';
import ReactCodemirror from "@uiw/react-codemirror";

const Editor = function () {
    return (
        <ReactCodemirror
            width={'50%'}
            height={'100vh'}
        />
    )
}

export default Editor;
