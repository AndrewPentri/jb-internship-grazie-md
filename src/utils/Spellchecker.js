/**
* Module exports an util which checks orthography of whole editor's text.
* */

import { dictionaryEn } from "../common/dictionaries/Dictionaries";

const markers = [];

const Spellcheck = codeMirror => {
    markers.forEach( marker => marker.clear() )

    codeMirror.eachLine( line => {
        let text = line.text;
        const lineNumber = codeMirror.getLineNumber( line ),
            cmDoc = codeMirror.getDoc(),
            wordRegexp = /^([0-9]|[a-z])+([0-9a-z]+)$/i,
            words = text.split(/[\s,.\n;:\\/()\[\]{}?!<>#$=+\-_%@*^]/).filter( item => wordRegexp.test( item ) );

        words.forEach( word => {
            if( !Number.isNaN( Number( word ) ) ) {
                return
            }

            const from = { line: lineNumber, ch: text.indexOf( `${word}` ) },
                to = { line: lineNumber, ch: from.ch + word.length };

            if( !dictionaryEn.check( word ) ) {
                markers.push(cmDoc.markText(from, to, {
                    className: 'cm-error'
                }));
            }

            text = text.replace( word, ''.padEnd( word.length, '0' ) );
        })
    })
}

export default Spellcheck;
