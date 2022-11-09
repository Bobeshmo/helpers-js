import deepEqual from "../lib/deepEqual";

describe("deep equal test", () => {
    test("equal numbers", () => {
        expect(deepEqual(5, 5)).toBe(true)
    });

    test("equal simple objects", () => {
        expect(deepEqual({}, {})).toBe(true)
    });

    test("equal arrays", () => {
        expect(deepEqual([1, 2], [1, 2])).toBe(true)
    });

    test("equal nested objects", () => {
        expect(deepEqual({a: {b: "foo"}}, {a: {b: "foo"}})).toBe(true)
    });

    test("non-equal objects", () => {
        expect(deepEqual({a: {b: "foo"}}, {a: {b: "bar"}})).toBe(false)
    });

    test("equal null", () => {
        expect(deepEqual(null, null)).toBe(true)
    });

    test("comparison of null and undefined", () => {
        expect(deepEqual(undefined, null)).toBe(false)
    });

    test("comparison of zero and false", () => {
        expect(deepEqual(0, false)).toBe(false)
    });
});