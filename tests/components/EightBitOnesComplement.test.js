import EightBitOnesComplement from "../../src/components/EightBitOnesComplement";

describe("Eight Bit Ones Complement", () => {
    test("11111111 deactivated", () => {
        expect(EightBitOnesComplement(0, "11111111")).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1]);
    });
    test("11111111 activated", () => {
        expect(EightBitOnesComplement(1, "11111111")).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    });
});