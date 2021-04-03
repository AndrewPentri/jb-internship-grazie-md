/**
* Module exports context with editor values.
* */
import React, { useContext, useState } from 'react';

const EditorContext = React.createContext( '' );

export const useEditor = () => {
    return useContext( EditorContext );
}

export const EditorContextProvider = ( { children} ) => {
    const [ editorValue, setEditorValue ] = useState( '' );

    const editorChangeHandler = codeMirror => setEditorValue( codeMirror.getValue() );

    return (
        <EditorContext.Provider
        value = { { editorValue, editorChangeHandler } }>
            { children }
        </EditorContext.Provider>
    )
}


