import isObject from "../lib/isObject";

describe("is an object test", () => {
    test("is an object", () => {
        expect(isObject({})).toBe(true)
    });

    test("isn't an object", () => {
        expect(isObject([])).toBe(false)
    });
});