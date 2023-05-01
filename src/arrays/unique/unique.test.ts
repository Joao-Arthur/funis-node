import { describe, expect, it } from "vitest";
import { unique } from "./unique.js";

describe("unique", () => {
    it("should return an array with the unique values only", () => {
        const symbolValue = Symbol(1);

        expect(unique([
            1,
            1,
            "john",
            "john",
            true,
            false,
            true,
            symbolValue,
            symbolValue,
        ])).toEqual(
            [1, "john", true, false, symbolValue],
        );
        expect(unique([1])).toEqual([1]);
        expect(unique([])).toEqual([]);
    });
});
