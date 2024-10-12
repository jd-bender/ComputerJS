import HalfAdder from "../../../src/components/adders/HalfAdder";

describe("Half Adder", () => {
    test("0 + 0", () => {
        expect(HalfAdder(0, 0)).toStrictEqual([0, 0]);
    });
    test("0 + 1", () => {
        expect(HalfAdder(0, 1)).toStrictEqual([1, 0]);
    });
    test("1 + 1", () => {
        expect(HalfAdder(1, 1)).toStrictEqual([0, 1]);
    });
});