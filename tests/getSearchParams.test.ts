import getSearchParams from "../lib/getSearchParams";

describe("Get search params test", () => {
    test("First test", () => {
        expect(getSearchParams("?name=test&age=18")).toStrictEqual({name: "test", age: "18"})
    });

    test("Second test", () => {
        expect(getSearchParams("?name=Chris&age=22&birthdate=01.01.2000")).toStrictEqual({name: "Chris", age: "22", birthdate: "01.01.2000"})
    });
});