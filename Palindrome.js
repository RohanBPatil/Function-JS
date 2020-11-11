var prompt = require('prompt-sync')();
function isPalindrome(number) {
    let num = number;
    let reverseNum = 0;
    while (num != 0) {
        reverseNum = reverseNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    if (number == reverseNum) {
        return true;
    }
    else {
        return false;
    }
}

let first = prompt('Enter first number : ');
let second = prompt('Enter second number : ');
if (isPalindrome(first)) {
    console.log(first + " is a palindrome number");
} else {
    console.log(first + " is NOT a palindrome number");
}
if (isPalindrome(second)) {
    console.log(second + " is a palindrome number");
} else {
    console.log(second + " is NOT a palindrome number");
}