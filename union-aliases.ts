type Combinable = number | string;
type ConversaionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversaionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  console.log(resultConversion);
  return result;
}
