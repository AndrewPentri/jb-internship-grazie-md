/**
* Component renders view of CodeMirror based markdown editor.
* */

import React from 'react';
import './styles.scss';

import ReactCodemirror from "@uiw/react-codemirror";

const Editor = function () {
    return (
        <div className={'md-editor'}>
            <ReactCodemirror/>
        </div>

    )
}

export default Editor;
