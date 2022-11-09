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
});