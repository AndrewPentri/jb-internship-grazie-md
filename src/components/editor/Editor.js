/**
* Component renders view of CodeMirror based markdown editor.
* */

import React, { useState } from 'react';
import './styles.scss';

import ReactCodemirror from "@uiw/react-codemirror";

import { useEditor } from "../EditorContext";
import WritingStopwatcher from "../../utils/WritingStopwatcher";
import PhraseMatcher from "../../utils/PhraseMatcher";
import Spellcheck from '../../utils/Spellchecker'
import SuggestionBox from "../suggestionBox/SuggestionBox";

const Editor = function () {
    const { editorValue, setEditorValue } = useEditor();
    const [ suggestion, setSuggestion ] = useState( {} );
    const onReactCodemirrorChange = codeMirror => {
        WritingStopwatcher.clear();
        WritingStopwatcher.setTimeout( () => setEditorValue( codeMirror.getValue() ) );

        // const wordPos = codeMirror.findWordAt( codeMirror.getCursor() );
        //
        // if( Math.abs( wordPos.head.ch - wordPos.anchor.ch ) > 1 ) {
        //     const line = codeMirror.getLine( wordPos.anchor.line ),
        //         suggestionData = new Set(),
        //         word = line.substring( wordPos.anchor.ch, wordPos.head.ch );
        //
        //     Array.from( phrasesJSON ).forEach( ( { phrase } ) => {
        //         if( phrase.match( word ) ) {
        //             suggestionData.add( phrase );
        //         }
        //
        //         if( phrase.toLowerCase().match( word ) ) {
        //             suggestionData.add( phrase )
        //         }
        //     });
        //
        //
        //     if( suggestionData.size > 0 ) {
        //         setPhraseData( suggestionData );
        //         setSuggestionHandler( { handler: ( event ) => {
        //             if( !event ) {
        //                 return;
        //             }
        //             codeMirror.replaceRange( event.target.innerText, wordPos.anchor, wordPos.head );
        //             setPhrasePos({} );
        //             setPhraseData( new Set() );
        //         }})
        //     }
        // }
        Spellcheck( codeMirror );
        setSuggestion( PhraseMatcher( codeMirror ) );
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
            { Object.keys( suggestion ).length > 0 && <SuggestionBox data={suggestion.data}
                                                                     pos={suggestion.pos}
                                                                     onClick={(e) => {
                                                                         suggestion.handler(e);
                                                                         setSuggestion( {} );
                                                                     }}/> }
        </div>
    )
}

export default Editor;
