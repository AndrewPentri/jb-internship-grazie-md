/**
* Component renders view of CodeMirror based markdown editor.
* */

import React from 'react';
import './styles.scss';

import ReactCodemirror from "@uiw/react-codemirror";

import { useEditor } from "../EditorContext";
import WritingStopwatcher from "../../utils/WritingStopwatcher";
import Spellcheck from '../../utils/Spellchecker'

const Editor = function () {
    const { editorValue, editorChangeHandler } = useEditor();

    const onReactCodemirrorChange = codeMirror => {
        const editorValue = codeMirror.getValue();

        WritingStopwatcher.clear();
        WritingStopwatcher.setTimeout( () => editorChangeHandler( codeMirror ) );

        Spellcheck( codeMirror );
    }

    return (
        <div className={ 'md-editor' }>
            <ReactCodemirror
                value={ editorValue }
                onChange={ onReactCodemirrorChange }
                options={{
                    mode: 'Markdown'
                }}
            />
        </div>
    )
}

export default Editor;
