/**
* Module exports instance of WritingStopwatcher class.
* */

/**
 * @cfg
 * {Number} NO_TIMER_ID - constant describes null value of timer id.
 * */
const NO_TIMER_ID = -1;

/**
* @cfg
* {Number} DURATION_DEFAULT - constant describes default value of time over.
* */
const DURATION_DEFAULT = 250;

/**
* @class Class for tracking keystrokes at a specific time.
* */
class WritingStopwatcher {
    /**
    * @constructor
    * @param {Number} duration=250 - duration of time out interval that will apply callback function.
    * */
    constructor( duration= DURATION_DEFAULT ) {
        this._timerId = NO_TIMER_ID;
        this.duration = duration;
    }

    /**
    * Method apply callback function duration.
    * @param {Function} callback - callback that is called when time duration is over.
    * */
    setTimeout( callback ) {
        this._setTimerId( setTimeout( callback, this.duration ) );
    }

    /**
    * Method clears timeout and sets NO_TIMER_ID constant to @private this._timerId property.
    * */
    clear() {
        if( this._timerId >= 0 ) {
            clearTimeout( this._timerId );
            this._setTimerId( NO_TIMER_ID );
        }
    }

    /**
    * @private Method sets new value to @private this._timerId.
    * @param {Number} value - new timer ID.
    * */
    _setTimerId( value ) {
        this._timerId = value;
    }
}

export default new WritingStopwatcher();
