import getDaysInMonth from "../lib/getDaysInMonth";

describe("Is correct date test", () => {
    test("First test", () => {
        expect(getDaysInMonth(1, 2022)).toBe(28)
    });

    test("Second test", () => {
        expect(getDaysInMonth(1, 2000)).toBe(29)
    });

    test("Third test", () => {
        expect(getDaysInMonth(0, 2022)).toBe(31)
    });
});