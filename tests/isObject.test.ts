import isObject from "../lib/isObject";

describe("Is an object test", () => {
    test("Is an object", () => {
        expect(isObject({})).toBe(true)
    });

    test("Isn't an object", () => {
        expect(isObject([])).toBe(false)
    });
});