/**
 * # numbers.compareDesc
 *
 * Compare the numbers in descending order.
 *
 * ## Example
 *
 * ```ts
 * [1, 9, 2, 8, 3, 7, 4].sort(compareDesc) // [1, 2, 3, 4, 7, 8, 9]
 * ```
 */
export function compareDesc(a: number, b: number): number {
    return a > b ? -1 : 1;
}
