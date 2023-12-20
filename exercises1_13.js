//1# Write a JavaScript program to calculate the factorial of a number.  
//In mathematics, the factorial of a non-negative integer n, denoted by n!, 
//is the product of all positive integers less than or equal to n
function calculateFactorial(x) {
    // Base case: factorial of 0 or 1 is 1
    if (x === 0 || x === 1) {
        return 1;
    }

    // Recursive case: n! = n * (n-1)!
    return x * calculateFactorial(x - 1);
}
// Example usage: Calculate and print the factorial of 5.
//console.log(calculateFactorial(5));

//#2 Write a JavaScript program to find the greatest common divisor (GCD) of 
//two positive numbers using recursion.  
function findGCD(a, b) {
    // Base case: GCD(a, 0) = a, GCD(0, b) = b
    if (b === 0) {
        return a;
    }

    // Recursive case: GCD(a, b) = GCD(b, a % b)
    return findGCD(b, a % b);
}
//#3 Write a JavaScript program to get integers in the range (x, y) using recursion.  
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]
function range(x, y) {
    // Base case: If x is greater than or equal to y, return an empty array
    if (x >= y - 1) {
        return [];
    } else {
        // Recursive case: Concatenate the current value of x with the result of the next range
        return [x + 1, ...range(x + 1, y)];
    }
}
//#4Write a JavaScript program to compute the sum of an array of integers.  
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21
function calculateSum(array) {
    // Using the reduce function to sum up the array elements
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6];
const result = calculateSum(inputArray);
console.log("Expected Output:", result);
//#5Write a JavaScript program to compute the exponent of a number.  
//Note : The exponent of a number says how many times the base number is used as a factor.
//8(2) = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// Recursive JavaScript function to calculate the exponent (a^n).
var exponent = function(a, b) {
    // Base case: if n is 0, return 1.
    if (b === 0) {
      return 1;
    } else {
      // Recursive case: a^n = a * a^(n-1).
      return a * exponent(a, b - 1);
    }
  };

  //#6  Write a JavaScript program to get the first n Fibonacci numbers.  
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
  function generateFibonacci(n) {
    const fibonacciArray = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return fibonacciArray;
}

// Example usage:
const n = 10;
const fibonacciNumbers = generateFibonacci(n);
//console.log("First", n, "Fibonacci Numbers:", fibonacciNumbers);

//#7 Write a JavaScript program to check whether a number is even or not. 
function isEven(number) {
    return number % 2 === 0;
}

// Example usage:
const num1 = 8;
const num2 = 15;

console.log(num1 + " is even? " + isEven(num1)); // Output: true
console.log(num2 + " is even? " + isEven(num2)); // Output: false

//#8Write a JavaScript program for binary search.  
//Sample array : [0,1,2,3,4,5,6]
//console.log(l.br_search(5)) will return '5'
Array.prototype.br_Search = function(target) {
    let low = 0;
    let high = this.length - 1;

    while (low <= high) {
        let half = Math.floor((low + high) / 2);
        let guess = this[half];

        if (guess === target) {
            return half; // Target found, return the index
        } else if (guess > target) {
            high = half - 1; // Adjust the search range to the left half
        } else {
            low = half + 1; // Adjust the search range to the right half
        }
    }

    return -1; // Target not found
};

// Example usage:
const sortedArray = [0, 1, 2, 3, 4, 5, 6];
const targetValue = 5;

console.log(br_Search(5)); // Output: 5

//#9 Write a merge sort program in JavaScript.  
//Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Sample array
const sampleArray = [34, 7, 23, 32, 5, 62];

// Sorting the array using merge sort
const sortedArray = mergeSort(sampleArray);

// Output
console.log("Sample Array:", sampleArray);
console.log("Sorted Array:", sortedArray);

//#10Write a JavaScript program to check whether a given string is a palindrome or not using recursion.  
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".
/*Test Data:
("madam") -> true
("abdb") -> false
("ab") -> false
(test("a") -> true

*/
function isPalindrome(str) {
    // Base case: if the string has 0 or 1 characters, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
        // Recursively check the substring without the first and last characters
        return isPalindrome(str.slice(1, -1));
    }

    // If the first and last characters are not the same, it's not a palindrome
    return false;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("abdb"));   // false
console.log(isPalindrome("ab"));     // false
console.log(isPalindrome("a"));      // true


//#11 Write a JavaScript program to convert binary number (positive) 
//to decimal number using recursion. 
function binaryToDecimal(binaryString) {
    // Base case: if the binary string is empty, return 0
    if (binaryString === "") {
        return 0;
    }

    // Get the last character of the binary string
    const lastDigit = parseInt(binaryString[binaryString.length - 1], 10);

    // Convert the remaining binary string (excluding the last character) to decimal
    const remainingDecimal = binaryToDecimal(binaryString.slice(0, -1));

    // Calculate the decimal value using the formula: (lastDigit * 2^position) + remainingDecimal
    return lastDigit * Math.pow(2, binaryString.length - 1) + remainingDecimal;
}

// Test case
const binaryNumber = "1101";
const decimalNumber = binaryToDecimal(binaryNumber);

console.log(`Binary: ${binaryNumber}`);
console.log(`Decimal: ${decimalNumber}`);

/*#11  Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.  
Test Data:
([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1*/
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    // Base case: if start index is greater than end index, the target is not found
    if (start > end) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((start + end) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is smaller, search in the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }

    // If the target is larger, search in the right half
    return binarySearch(arr, target, mid + 1, end);
}

// Test cases
const sortedArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];

const target1 = 6;
const result1 = binarySearch(sortedArray, target1);
console.log(`Index of ${target1}: ${result1}`);

const target2 = 16;
const result2 = binarySearch(sortedArray, target2);
console.log(`Index of ${target2}: ${result2}`);


/*#13A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.  
Test Data:
("12") -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
("9") -> ["y", "z"]*/

function letterCombinations(digits) {
    if (!digits) {
        return [];
    }

    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function generateCombinations(current, index) {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        const currentDigit = digits[index];
        const letters = digitMap[currentDigit];

        for (const letter of letters) {
            generateCombinations(current + letter, index + 1);
        }
    }

    generateCombinations('', 0);
    return result;
}

// Test cases
const result1 = letterCombinations('12');
console.log(result1); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

const result2 = letterCombinations('9');
console.log(result2); // ["w", "x", "y", "z"]

