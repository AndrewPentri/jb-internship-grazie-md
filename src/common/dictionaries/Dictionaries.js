/**
* Module loads dictionaries from typo-js package and exports it.
* */
import Typo from 'typo-js';

import affDataEN from './en_US.aff';
import dicDataEN from './en_US.dic';

export const dictionaryEn = new Typo( 'en_US', affDataEN, dicDataEN );
