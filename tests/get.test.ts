import get from "../lib/get";

describe("get the value of an object", () => {

    const obj = {
        name: "Chris",
        info: {
            address: "K. Mark",
            age: 22
        }
    }

    test("get a info from an object", () => {
        expect(get(obj, "info", {})).toStrictEqual({address: "K. Mark", age: 22})
    });

    test("get a nested value from an object", () => {
        expect(get(obj, "info.address")).toEqual("K. Mark")
    });

    test("get a name from an object", () => {
        expect(get(obj, "name")).toEqual("Chris")
    });

    test("get a nonexistent value from an object", () => {
        expect(get(obj, "phone")).toBeUndefined()
    });

    test("must be equal to the default value", () => {
        expect(get(obj, "phone", "")).toBe("")
    });
});