import XOR from "../gates/XOR";

type EightBitArrayType = [number, number, number, number, number, number, number, number];

export default (isSubtracting: number, bits: EightBitArrayType): EightBitArrayType => {
    const XOR_1 = XOR(isSubtracting, bits[0]);
    const XOR_2 = XOR(isSubtracting, bits[1]);
    const XOR_3 = XOR(isSubtracting, bits[2]);
    const XOR_4 = XOR(isSubtracting, bits[3]);
    const XOR_5 = XOR(isSubtracting, bits[4]);
    const XOR_6 = XOR(isSubtracting, bits[5]);
    const XOR_7 = XOR(isSubtracting, bits[6]);
    const XOR_8 = XOR(isSubtracting, bits[7]);

    return [XOR_1, XOR_2, XOR_3, XOR_4, XOR_5, XOR_6, XOR_7, XOR_8];
};