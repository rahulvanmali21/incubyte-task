function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }


function add(stringValue){
    if(!stringValue || stringValue.trim() == "") return 0
    let numbers = ""+stringValue.trim();
    let delimiter = /,|\n/; // Default delimiters: comma or newline
    // Handle custom delimiter syntax
    if (numbers.startsWith('//')) {
        const delimiterLineEnd = numbers.indexOf('\n');
        const rawDelimiter = numbers.slice(2, delimiterLineEnd);
        delimiter = new RegExp(escapeRegex(rawDelimiter));
        numbers = numbers.slice(delimiterLineEnd + 1);
      }

    // Split the input string by the delimiter(s) "," basic
    const parts = numbers.split(delimiter).map(n => n.trim()).filter(n => n !== '');

    const sum = parts.reduce((total, numStr) => {
        const num = parseInt(numStr, 10);
        return total + num;
      }, 0);
      return sum;

}
module.exports = {add}