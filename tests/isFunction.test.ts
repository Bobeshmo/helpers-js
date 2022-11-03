import isFunction from "../lib/isFunction";

describe("Is function test", () => {
    test("Is function -> true", () => {
        expect(isFunction(() => {})).toBe(true)
    });

    test("Is function -> true", () => {
        expect(isFunction(function () {})).toBe(true)
    });

    test("Is function -> false", () => {
        expect(isFunction({})).toBe(false)
    });
});