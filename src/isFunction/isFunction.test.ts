import isFunctionTest from "./isFunction";

describe("Is function test", () => {
    test("Is function -> true", () => {
        expect(isFunctionTest(() => {})).toBe(true)
    });

    test("Is function -> false", () => {
        expect(isFunctionTest({})).toBe(false)
    });
});