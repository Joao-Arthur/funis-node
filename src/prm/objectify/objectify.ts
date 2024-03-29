type returnType<V, E> = {
    readonly value: V;
    readonly error: undefined;
    readonly type: "resolved";
} | {
    readonly value: undefined;
    readonly error: E;
    readonly type: "rejected";
};

/**
 * # objectify
 *
 * Returns an object with value and error entries corrensponding to resolved or rejected value of the promise.
 *
 * ## Example
 *
 * ```ts
 * await prm.objectify(
 *     Promise.resolve(undefined)
 * ) // { value: undefined, error: undefined, type: 'resolved' }
 * await prm.objectify(
 *     Promise.resolve('Symbolic acts')
 * ) // { value: 'Symbolic acts', error: undefined, type: 'resolved' }
 * ```
 *
 * ```ts
 * await prm.objectify(
 *     Promise.reject(undefined)
 * ) // { value: undefined, error: undefined, type: 'rejected' }
 * await prm.objectify(
 *     Promise.reject('So vivid')
 * ) // { value: undefined, error: 'So vivid', type: 'rejected' }
 * ```
 */
export async function objectify<V, E>(
    prm: Promise<V>,
): Promise<returnType<V, E>> {
    try {
        return {
            value: await prm,
            error: undefined,
            type: "resolved",
        };
    } catch (err) {
        return {
            value: undefined,
            error: err as E,
            type: "rejected",
        };
    }
}
