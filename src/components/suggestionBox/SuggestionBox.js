/**
* Module exports view of suggestion phrases list.
* */

import React from 'react';
import './styles.scss'

/**
* Component renders suggestion phrases list.
* @param {Object} props - component's props.
* @param {String} props.data - begin of phrase.
* @param {Object} props.pos - position where component should render.
* @param {Function} props.onClick - handler when suggestion selected.
* */
const SuggestionBox = props => {
    const style = {
        top: `${props.pos.top + 17}px`,
        left: `${props.pos.left}px`
    };
    console.log( props);
    const suggestionList = [];
    let keyCounter = 0;
    for( const suggestion of props.data ) {

        suggestionList.push( <div key={keyCounter} className='suggestion-item' onClick={(e) => props.onClick( e )}>{suggestion}</div>)
        keyCounter++;
    }
    return(
        <div className='suggestion-box'
             style={style}>
            { suggestionList }
        </div>
    )
};

export default SuggestionBox;