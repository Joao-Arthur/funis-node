import { first as arrayFirst } from '../../arrays/first/first.js';
import { entries } from '../entries/entries.js';

/**
 * # maps.first
 *
 * Returns the first entry of the map.
 *
 * ## Example
 *
 * ```ts
 * maps.first(new Map()) // undefined
 * ```
 *
 * ```ts
 * maps.first(
 *     new Map([
 *         [1, { name: 'Paul McCartney' }],
 *         [2, { name: 'John Lennon' }],
 *     ])
 * ) // [1, { name: 'Paul McCartney' }]
 * ```
 */
export function first<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arrayFirst(entries(map));
}
