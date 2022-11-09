import deepClone from "../lib/deepClone";

describe("deep clone test", () => {
    const array: number[] = [1, 2, 3];
    const object: object = {name: "test"};

    test("is deep cloned array", () => {
        const clonedArray: number[] = deepClone(array)

        expect(array === clonedArray).toBe(false)
    });

    test("is deep cloned object", () => {
        const clonedObject: object = deepClone(object);

        expect(clonedObject === object).toBe(false)
    });
});