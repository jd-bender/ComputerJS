import FullAdder from "../../../src/components/adders/FullAdder";

describe("Full Adder", () => {
    test("0 + 0 + 0", () => {
        expect(FullAdder(0, 0, 0)).toStrictEqual([0, 0]);
    });
    test("0 + 0 + 1", () => {
        expect(FullAdder(0, 0, 1)).toStrictEqual([1, 0]);
    });
    test("0 + 1 + 1", () => {
        expect(FullAdder(0, 1, 1)).toStrictEqual([0, 1]);
    });
    test("1 + 1 + 1", () => {
        expect(FullAdder(1, 1, 1)).toStrictEqual([1, 1]);
    });
});