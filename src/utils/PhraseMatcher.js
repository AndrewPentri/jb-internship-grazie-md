/**
* Module exports an util which match phrases by codemirror last wrote word.
* */
import phrasesJSON from "./phrases.json";

/*
* Util returns object which will apply to SuggestionBox component.
* */
const PhraseMatcher = codeMirror => {
    const { head, anchor } = codeMirror.findWordAt( codeMirror.getCursor() );

    if( Math.abs( head.ch - anchor.ch ) > 1 ) {
        const line = codeMirror.getLine( anchor.line ),
            suggestionData = new Set(),
            word = line.substring( anchor.ch, head.ch );

        Array.from( phrasesJSON ).forEach( ( { phrase } ) => {
            const firstWord = phrase.split(/[\s,.\n;:\\/()\[\]{}?!<>#$=+\-_%@*^]/)[0];
            if( firstWord.match( word ) ) {
                suggestionData.add( phrase );
            }

            if( firstWord.toLowerCase().match( word ) ) {
                suggestionData.add( phrase.toLowerCase() )
            }
        });


        if( suggestionData.size > 0 ) {
            return {
                data: suggestionData,
                pos: codeMirror.cursorCoords(),
                handler: event => event && codeMirror.replaceRange( event.target.innerText, anchor, head )
            }
        }
    }

    return {};
}

export default PhraseMatcher;