import {isFunction as isFunctionTest} from "../lib/isFunction/isFunction";

describe("Is function test", () => {
    test("Is function -> true", () => {
        expect(isFunctionTest(() => {})).toBe(true)
    });

    test("Is function -> false", () => {
        expect(isFunctionTest({})).toBe(false)
    });
});