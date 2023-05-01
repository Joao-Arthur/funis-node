import { describe, expect, it } from "vitest";
import { last } from "./last.js";

describe("last", () => {
    it("should return the last item of the array", () => {
        expect(last([4, 5, 6])).toBe(6);
        expect(
            last(["George", "Paul", "John", "Ringo"]),
        ).toBe("Ringo");
        expect(last([false, true])).toBe(true);
    });

    it("should return undefined for empty arrays", () => {
        expect(last([])).toBe(undefined);
    });
});
