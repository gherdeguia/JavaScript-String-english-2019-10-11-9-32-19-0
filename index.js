console.log("=======================================================================");
// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var nameUpper = 'HELLO';

console.log('Original String output: '+nameUpper);
var lowerCaseName = nameUpper.toLowerCase();
console.log(lowerCaseName);
console.log("=======================================================================");

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
console.log('Original String output: '+sentence);
var splitStr = sentence.split(' ');
var outputStr = '';
for(var x = 0; x < splitStr.length; x++){
    var firstChar = splitStr[x].charAt(0).toUpperCase();
    splitStr[x] = firstChar + splitStr[x].slice(1);
    outputStr += splitStr[x]+' ';
}

console.log(outputStr.trim());
console.log("=======================================================================");

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...

console.log('Original String output: '+money);
console.log(money.slice(1));
console.log("=======================================================================");
