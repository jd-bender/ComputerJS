import { parseByte } from "../../utilities.js";
import EightBitOnesComplement from "../EightBitOnesComplement.js";
import FullAdder from "./FullAdder.js";
import XOR from "../../gates/XOR.js";

export default (num1: string, num2: string, isSubtracting: number): string => {    
    const num1bits = parseByte(num1);
    const num2bits = EightBitOnesComplement(isSubtracting, parseByte(num2));

    const FullAdder_0 = FullAdder(num1bits[7], num2bits[7], isSubtracting);
    const FullAdder_0_sum = FullAdder_0[0];
    const FullAdder_0_carry_out = FullAdder_0[1];

    const FullAdder_1 = FullAdder(num1bits[6], num2bits[6], FullAdder_0_carry_out);
    const FullAdder_1_sum = FullAdder_1[0];
    const FullAdder_1_carry_out = FullAdder_1[1];

    const FullAdder_2 = FullAdder(num1bits[5], num2bits[5], FullAdder_1_carry_out);
    const FullAdder_2_sum = FullAdder_2[0];
    const FullAdder_2_carry_out = FullAdder_2[1];

    const FullAdder_3 = FullAdder(num1bits[4], num2bits[4], FullAdder_2_carry_out);
    const FullAdder_3_sum = FullAdder_3[0];
    const FullAdder_3_carry_out = FullAdder_3[1];

    const FullAdder_4 = FullAdder(num1bits[3], num2bits[3], FullAdder_3_carry_out);
    const FullAdder_4_sum = FullAdder_4[0];
    const FullAdder_4_carry_out = FullAdder_4[1];

    const FullAdder_5 = FullAdder(num1bits[2], num2bits[2], FullAdder_4_carry_out);
    const FullAdder_5_sum = FullAdder_5[0];
    const FullAdder_5_carry_out = FullAdder_5[1];

    const FullAdder_6 = FullAdder(num1bits[1], num2bits[1], FullAdder_5_carry_out);
    const FullAdder_6_sum = FullAdder_6[0];
    const FullAdder_6_carry_out = FullAdder_6[1];

    const FullAdder_7 = FullAdder(num1bits[0], num2bits[0], FullAdder_6_carry_out);
    const FullAdder_7_sum = FullAdder_7[0];
    
    const overflow = XOR(FullAdder_7[1], isSubtracting);

    return `${overflow}${FullAdder_7_sum}${FullAdder_6_sum}${FullAdder_5_sum}${FullAdder_4_sum}${FullAdder_3_sum}${FullAdder_2_sum}${FullAdder_1_sum}${FullAdder_0_sum}`;
};