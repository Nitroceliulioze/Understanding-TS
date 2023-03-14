type Combinable = number | string; // alias
type ConversionDescriptor = 'as-number' | 'as-text' //alias instead of literal type


function combine(
  input1: Combinable,
  input2: number | string,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
  return result;
}

const combineAges = combine(30, 26, 'as-number');

const combineNames = combine("Max", "Anna", 'as-text');
