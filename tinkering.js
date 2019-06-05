/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  let result = "";
  for(let i = 0; i < num; i++) {
    result += "ha";
  }
  result += "!";
  return result;
}

console.log(laugh(10));
