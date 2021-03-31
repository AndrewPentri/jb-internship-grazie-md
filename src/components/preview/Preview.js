/**
* Component renders view of translated to HTML Markdown text from editor.
* */
import React from 'react';
import './styles.scss'
import { useEditor } from "../EditorContext";

const Preview = function () {
    const { editorValue } = useEditor();

    return (
        <div className={'preview'}>
            { editorValue.split( '\n' ).map( ( item, key ) => <div key={ key }>{ item }</div>) }
        </div>
    )
}

export default Preview;