import isArray from "../lib/isArray";

describe("is an array test", () => {
    test("is an array", () => {
        expect(isArray([])).toBe(true)
    });

    test("isn't an array", () => {
        expect(isArray({})).toBe(false)
    });
});