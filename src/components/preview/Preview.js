/**
* Component renders view of translated to HTML Markdown text from editor.
* */
import React from 'react';
import './styles.scss'
import { useEditor } from "../EditorContext";
import Converter from "../../utils/Converter";

const Preview = function () {
    const { editorValue } = useEditor();

    return (
        <div className={ 'preview' }>
            <div className={ 'preview-content' }
                 dangerouslySetInnerHTML={ { __html: Converter.makeHtml( editorValue ) } }>
            </div>
        </div>
    )
}

export default Preview;