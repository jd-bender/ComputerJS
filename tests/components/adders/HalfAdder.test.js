import HalfAdder from "../../../src/components/adders/HalfAdder";

describe("Half Adder", () => {
    test("0 + 0", () => {
        expect(HalfAdder(0, 0)).toStrictEqual([0, 0]);
    });
});