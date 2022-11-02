import {isEmpty as isEmptyTest} from "../lib/isEmpty/isEmpty";

describe("Is function test", () => {
    test("Is empty string -> true", () => {
        expect(isEmptyTest("")).toBe(true)
    });

    test("Is empty string -> false", () => {
        expect(isEmptyTest("test")).toBe(false)
    });

    test("Is empty object -> true", () => {
        expect(isEmptyTest({})).toBe(true)
    });

    test("Is empty object -> false", () => {
        expect(isEmptyTest({name: "Test"})).toBe(false)
    });

    test("Is empty array -> true", () => {
        expect(isEmptyTest([])).toBe(true)
    });

    test("Is empty array -> false ", () => {
        expect(isEmptyTest([1, 2, 3])).toBe(false)
    });
});