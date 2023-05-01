import { expect, it } from "vitest";
import { parse } from "./parse.js";

it("parse", () => {
    expect(parse("$100.00", { prefix: "$" })).toBe(100.00);
    expect(parse("US$0", { prefix: "US$" })).toBe(0);
    expect(parse("R$-1.53", { prefix: "R$" })).toBe(-1.53);
    expect(parse("^1.4", { prefix: "^" })).toBe(1.4);
});

it("parse", () => {
    expect(parse("100px", { suffix: "px" })).toBe(100);
    expect(parse("0px", { suffix: "px" })).toBe(0);
    expect(parse("-1.53m/s", { suffix: "m/s" })).toBe(-1.53);
    expect(parse("1.4kº", { suffix: "kº" })).toBe(1.4);
    expect(parse("74%", { suffix: "%" })).toBe(74);
});

it("parse", () => {
    expect(
        parse(
            "width: 100px",
            { prefix: "width: ", suffix: "px" },
        ),
    ).toBe(100);
    expect(
        parse(
            "speed: -1.53m/s",
            { prefix: "speed: ", suffix: "m/s" },
        ),
    ).toBe(-1.53);
});

it("parse", () => {
    expect(parse("US$4", { prefix: "R$" })).toBe(undefined);
    expect(parse("R$-6", { prefix: "rem" })).toBe(undefined);
    expect(parse("@-1", { prefix: "km/h" })).toBe(undefined);
});

it("parse", () => {
    expect(parse("4px", { suffix: "rem" })).toBe(undefined);
    expect(parse("-6em", { suffix: "rem" })).toBe(undefined);
    expect(parse("-1m/s", { suffix: "km/h" })).toBe(undefined);
});

it("parse", () => {
    expect(
        parse(
            "US$4 donnut",
            { prefix: "R$", suffix: "apple" },
        ),
    ).toBe(undefined);
    expect(
        parse(
            "US$4 donnut",
            { prefix: "US$", suffix: "apple" },
        ),
    ).toBe(undefined);
});

it("parse", () => {
    expect(
        parse(
            "speed: -4px",
            { prefix: "speed: " },
        ),
    ).toBe(undefined);
    expect(parse(":2em", { prefix: ":" })).toBe(undefined);
});

it("parse", () => {
    expect(
        parse(
            "speed: -4px",
            { suffix: "px" },
        ),
    ).toBe(undefined);
    expect(parse(":2em", { suffix: "em" })).toBe(undefined);
});

it("parse", () => {
    expect(
        parse("I see", { prefix: "I see" }),
    ).toBe(undefined);
    expect(
        parse("penguins", { suffix: "penguins" }),
    ).toBe(undefined);
    expect(
        parse("I see penguins", {
            prefix: "I see ",
            suffix: "penguins",
        }),
    ).toBe(undefined);
});
