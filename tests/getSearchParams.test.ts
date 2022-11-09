import getSearchParams from "../lib/getSearchParams";

describe("search params test", () => {
    test("two parameters", () => {
        expect(getSearchParams("?name=test&age=18")).toStrictEqual({name: "test", age: "18"})
    });

    test("three parameters", () => {
        expect(getSearchParams("?name=Chris&age=22&birthdate=01.01.2000")).toStrictEqual({name: "Chris", age: "22", birthdate: "01.01.2000"})
    });
});