// using for loop - Pattern Used: Single Loop with Backward Indexing
function reverseString(str){
    console.log(`Original string = ${str}`)
    let rev = '';
    for(let i=0;i<str.length;i++){
        rev = rev + str[str.length-1 - i]
    }
    console.log(`Reverse string = ${rev}`)
}

reverseString("Javascript")
// Time Complexity O(n)
// space complexity O(n)
/* ======================================================================================================= */

// using for each - For Each with Backward Indexing
const revStr = (str) => {
    let result = '';
    console.log(`String is ${str}`)
    const strArr = str.split('');
    strArr.forEach((index) => {
        result +=strArr[strArr.length-1-index]
    })
    console.log(`Reversed string is ${result}`)
}

revStr("Python")
// Time Complexity O(n)
// space complexity O(n)

/* ======================================================================================================= */

// using array methods - builltin array methods
const str = "   My name is Kishore   "
const res = str.split('').reverse().join('').trim()
console.log(res)
// Time Complexity O(n)
// space complexity O(n)

/* ======================================================================================================= */

// using for loop with different approach 
const myStr = "It's a string";
console.log(myStr.length)
let reversedStr = '';
for(let k= myStr.length-1;k>=0;k--){
    reversedStr = reversedStr+myStr[k];
}
console.log(`reversed string --- ${reversedStr}`)
// Time Complexity O(n)
// space complexity O(n)

/* ======================================================================================================= */

// two pointer approach
function reverseString(str) {
    // Convert the string to an array to allow in-place modification
    let strArr = str.split('');
    let left = 0;
    let right = strArr.length - 1;

    // Move pointers towards the center, swapping values
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]; // Swap characters
        left++;
        right--;
    }

    // Join array back into a string
    return strArr.join('');
}

console.log(reverseString("hello"));  // Output: "olleh"
// Time Complexity O(n)
// space complexity O(1)
/* ======================================================================================================= */

function twoPointerApproach(mystr){
let ArrStr = myStr.split('');
let left = 0;
let right = ArrStr.length-1;
while(left<right){
    // swap
    [ArrStr[left], ArrStr[right]] = [ArrStr[right], ArrStr[left]];
    left++;
    right--;
}

console.log(`ArrStr is ${ArrStr.join('').trim()}`)
}

twoPointerApproach("Venkatasai Kishore")

// Time Complexity O(n)
// space complexity O(1)

/* ======================================================================================================= */

