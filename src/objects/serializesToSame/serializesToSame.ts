import { combinations } from '../../arrays/combinations/combinations.js';
import { plainObject } from '../../types/plainObject.js';
import { serialize } from '../serialize/serialize.js';

/**
 * # objects.serializesToSame
 *
 * Returns whether the [serialized](./serialize.md) version of every object are equal or not.
 *
 * ## Example
 *
 * ```ts
 * objects.serializesToSame([
 *     { x: 10.12, y: -1.53 },
 *     { x: 10.12, y: -1.53 },
 *     { x: 10.12, y: -1.53 },
 * ]) // true
 * ```
 *
 * ```ts
 * class CartesianPoint {
 *     constructor(
 *         private readonly x: number,
 *         private readonly y: number,
 *     ) { }
 * }
 *
 * objects.serializesToSame([
 *     new CartesianPoint(5.25, 7.77) as unknown as plainObject,
 *     { x: 5.25, y: 7.77 },
 * ]) // true
 * ```
 */
export function serializesToSame(
    objs: plainObject[],
): boolean {
    return combinations(objs)
        .every(([a, b]) => serialize(a) === serialize(b));
}
