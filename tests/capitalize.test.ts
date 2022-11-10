import capitalize from "../lib/capitalize";

describe("capitalize first letter test", () => {
    test("capitalize «test»", () => {
        expect(capitalize("test")).toBe("Test")
    });

    test("capitalize «hello, world»", () => {
        expect(capitalize("hello, world")).toBe("Hello, world")
    });
});