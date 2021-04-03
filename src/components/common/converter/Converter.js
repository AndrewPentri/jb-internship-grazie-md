/**
* Module exports configured showdown's converter.
* */

import { Converter } from 'showdown';

const converterCfg = {
    tables: true,
    requireSpaceBeforeHeadingText: true
}

export default new Converter( converterCfg );