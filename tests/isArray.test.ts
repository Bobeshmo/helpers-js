import isArray from "../lib/isArray";

describe("Is an array test", () => {
    test("Is an array", () => {
        expect(isArray([])).toBe(true)
    });

    test("Isn't an array", () => {
        expect(isArray({})).toBe(false)
    });
});