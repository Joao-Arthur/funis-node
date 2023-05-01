import { describe, expect, it } from "vitest";
import { disjoint } from "./disjoint.js";

describe("disjoint", () => {
    it("should disjoint empty", () => {
        expect(disjoint([])).toEqual([]);
    });

    it("should disjoint one array", () => {
        expect(disjoint([[1, 2, 3]])).toEqual([1, 2, 3]);
    });

    it("should return empty for equal arrays", () => {
        expect(disjoint([[1, 2, 3], [1, 2, 3]])).toEqual([]);
    });

    it("should return the items not present more than once", () => {
        expect(disjoint([[4, 5, 6], [5, 6, 7]])).toEqual([4, 7]);
        expect(disjoint([
            ["George", "Paul", "John", "Ringo", "George"],
            ["Ringo"],
            ["John"],
        ])).toEqual(["George", "Paul"]);
        expect(disjoint([[false, true], []])).toEqual([false, true]);
    });
});
