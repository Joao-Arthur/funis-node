/**
 * # once
 *
 * Returns true if the callback returns true once. Returns false otherwise.
 *
 * ## Example
 *
 * ```ts
 * arrays.once(
 *     ['Axl', 'Slash', 'Duff', 'Buckethead'],
 *     item => item === 'Roses'
 * ) // false
 * arrays.once(
 *     ['Axl', 'Slash', 'Duff', 'Buckethead'],
 *     item => item === 'Buckethead'
 * ) // true
 * arrays.once(
 *     ['Axl', 'Slash', 'Duff', 'Buckethead'],
 *     item => item.length > 2
 * ) // false
 * ```
 */
export function once<const T>(
    arr: readonly T[],
    cb: (item: T, index: number, arr: readonly T[]) => boolean,
): boolean {
    return arr.map(cb).filter(Boolean).length === 1;
}
