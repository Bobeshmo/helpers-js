import isFunction from "../lib/isFunction";

describe("is a function test", () => {
    test("is a callback", () => {
        expect(isFunction(() => {})).toBe(true)
    });

    test("is a function", () => {
        expect(isFunction(function () {})).toBe(true)
    });

    test("isn't a function", () => {
        expect(isFunction({})).toBe(false)
    });
});