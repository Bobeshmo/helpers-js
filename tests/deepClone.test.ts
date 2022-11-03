import deepClone from "../lib/deepClone";

describe("Deep clone test", () => {
    const array: number[] = [1, 2, 3];
    const object: object = {name: "test"};

    test("Is deep cloned array", () => {
        const clonedArray: number[] = deepClone(array)

        expect(array === clonedArray).toBe(false)
    });

    test("Is deep cloned object", () => {
        const clonedObject: object = deepClone(object);

        expect(clonedObject === object).toBe(false)
    });
});