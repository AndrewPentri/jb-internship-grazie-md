/**
* Component renders view of CodeMirror based markdown editor.
* */

import React from 'react';
import './styles.scss';

import ReactCodemirror from "@uiw/react-codemirror";
import { useEditor } from "../EditorContext";

const Editor = function () {
    const { editorValue, editorChangeHandler } = useEditor();

    return (
        <div className={'md-editor'}>
            <ReactCodemirror
                value={ editorValue }
                onChange={ editorChangeHandler }
            />
        </div>

    )
}

export default Editor;
