import getDaysInMonth from "../lib/getDaysInMonth";

describe("days in month test", () => {
    test("february 2022", () => {
        expect(getDaysInMonth(1, 2022)).toBe(28)
    });

    test("february 2020", () => {
        expect(getDaysInMonth(1, 2000)).toBe(29)
    });

    test("january 2022", () => {
        expect(getDaysInMonth(0, 2022)).toBe(31)
    });
});