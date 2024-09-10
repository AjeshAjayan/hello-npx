#!/usr/bin/env node
import {charArt} from './chartArt.js';

/**
 * @type {Array<string>}}
*/
const sequence = (() => {
    const header = 'god of programming'
    /**
     * @type {string}
     */
    const art = [];
    header.split('').forEach((s, i) => {
        if(s === ' ') {
            art[i] = '\n';
        } else {
            /**
             * @type {String}
             */
            const char = charArt[s]
            art[i] = char;
        }
    })

    return art;
})()

console.log(sequence.join(''));