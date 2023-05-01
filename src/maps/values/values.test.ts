import { describe, expect, it } from "vitest";
import { values } from "./values.js";

describe("values", () => {
    it("should return the values of the Map instance", () => {
        expect(values(new Map())).toEqual([]);
        expect(values(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        )).toEqual([
            { name: "Paul McCartney" },
            { name: "George Harrison" },
        ]);
    });
});
