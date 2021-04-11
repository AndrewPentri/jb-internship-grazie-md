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

    return (
        <EditorContext.Provider value = { { editorValue, setEditorValue } }>
            { children }
        </EditorContext.Provider>
    )
}


