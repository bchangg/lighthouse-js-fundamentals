/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(lines) {
  let result = ""
  for(let i = 1; i <= lines; i++) {
    result += makeLine(i);
  }
  return result;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));
