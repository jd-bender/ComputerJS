import HalfAdder from "./HalfAdder";
import OR from "../../gates/OR";

export default (a: number, b: number, carry_in: number): [number, number] => {
    const HalfAdder_1 = HalfAdder(a, b);

    const HalfAdder_1_sum_out = HalfAdder_1[0];
    const HalfAdder_1_carry_out = HalfAdder_1[1];
    
    const HalfAdder_2 = HalfAdder(HalfAdder_1_sum_out, carry_in);
    
    const HalfAdder_2_sum_out = HalfAdder_2[0];
    const HalfAdder_2_carry_out = HalfAdder_2[1];

    const final_sum_out = HalfAdder_2_sum_out;
    const final_carry_out = OR(HalfAdder_1_carry_out, HalfAdder_2_carry_out);

    return [final_sum_out, final_carry_out];
};