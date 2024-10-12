import NOT from "./NOT";
import AND from "./AND";

export default (a: number, b: number): number => NOT(AND(a, b));