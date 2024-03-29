import { expect, it } from "vitest";
import { camelCase } from "./camelCase.js";

it("camelCase", () => {
    expect(camelCase("")).toBe("");
});

it("camelCase", () => {
    expect(camelCase("hey")).toBe("hey");
});

it("camelCase", () => {
    expect(camelCase("j S o N")).toBe("jSON");
    expect(camelCase("j_S_o_N")).toBe("jSON");
    expect(camelCase("j-S-o-N")).toBe("jSON");
});

it("camelCase", () => {
    expect(camelCase("hey Jo3")).toBe("heyJo3");
    expect(camelCase("hey_Jo3")).toBe("heyJo3");
    expect(camelCase("hey-Jo3")).toBe("heyJo3");
});
