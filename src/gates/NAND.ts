import NOT from "./NOT.js";
import AND from "./AND.js";

export default (a: number, b: number): number => NOT(AND(a, b));