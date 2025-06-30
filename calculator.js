function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


function getNumbers(numbers) {
  let delimiter = /,|\n/; // Default delimiters: comma or newline
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const rawDelimiter = numbers.slice(2, delimiterLineEnd);
    delimiter = new RegExp(escapeRegex(rawDelimiter));
    numbers = numbers.slice(delimiterLineEnd + 1);
  }
  const parts = numbers
    .split(delimiter)
    .map((n) => parseInt(n.trim()))
    .filter((n) => n !== "");
  return parts;
}

function checkForNegativeValues (numbers){
  const negatives  = numbers.filter(num=>num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
}

function getFilterValuesGreaterEqual(numbers,value=1000){
  return numbers.filter(num => num < value);
}

function calculateSum(numbers){
  const sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);

  return sum
}

function add(stringValue) {
  const actualValue = stringValue.trim();
  if (!stringValue || actualValue === "") return 0;

  //  get Array<Number>
  const parsedNumbers = getNumbers(actualValue);

  const filterValues = getFilterValuesGreaterEqual(parsedNumbers,1000)

  // get for negative values
   checkForNegativeValues(filterValues)
  return calculateSum(filterValues);
}
module.exports = { add };

