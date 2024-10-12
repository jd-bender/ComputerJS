import ThreeToEightDecoder from "./components/ThreetoEightDecoder.js";
import EightToThreeEncoder from "./components/EightToThreeEncoder.js";
import EightBitAdderSubtractor from "./components/adders/EightBitAdderSubtractor.js";

// console.log(ThreeToEightDecoder(1, 0, 0));
// console.log(EightToThreeEncoder(0, 0, 0, 0, 0, 0, 1, 0));


// addition
console.log(EightBitAdderSubtractor('01100101', '10110110', 0));

// subtraction
console.log(EightBitAdderSubtractor('11111101', '10110000', 1));