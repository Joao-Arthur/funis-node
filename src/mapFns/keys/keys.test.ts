import { describe, expect, it } from 'vitest';
import { keys } from './keys';

describe('keys', () => {
    it('should return the keys of the map in an array', () => {
        expect(keys(new Map())).toEqual([]);
        expect(keys(new Map([
            [1, { name: 'Paul McCartney' }],
            [2, { name: 'George Harrison' }],
        ]))).toEqual([1, 2]);
    });
});