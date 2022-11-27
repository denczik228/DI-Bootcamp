//Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. 
let sentence = "How its going bro, not bad";
console.log(sentence);
//Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");
console.log(wordNot);

//Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

//If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result. 
if (wordBad > wordNot) {
    console.log(sentence.replace('not bad', 'good'));
} else if (wordBad < 0 & wordNot < 0) {
    console.log(sentence);
} else {
    console.log(sentence);
}
//If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
