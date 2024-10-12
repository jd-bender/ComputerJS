import NOT from "../../src/gates/NOT";

describe("NOT Gate", () => {
    test("!0", () => {
        expect(NOT(0)).toBe(1);
    });
    test("!1", () => {
        expect(NOT(1)).toBe(0);
    });
});