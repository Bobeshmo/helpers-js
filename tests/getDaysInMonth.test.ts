import getDaysInMonth from "../lib/getDaysInMonth";

describe("Is correct date test", () => {
    test("Is correct date", () => {
        expect(getDaysInMonth(1, 2022)).toBe(28)
    });

    test("Is correct date", () => {
        expect(getDaysInMonth(1, 2000)).toBe(29)
    });

    test("Is incorrect date", () => {
        expect(getDaysInMonth(0, 2022)).toBe(31)
    });
});