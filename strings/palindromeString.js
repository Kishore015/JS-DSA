function palindromeStr(str){
    let givenStr = str.toLowerCase();
    let rev = '';
    for(let i=0;i<givenStr.length;i++){
        rev += givenStr[givenStr.length-1 - i]
    }
    console.log(rev, givenStr)
    if(rev === givenStr){
        console.log('Palindrome String')
    } else{
        console.log('Not a palindrome string')
    }
}
palindromeStr("Madam");

function checkpalindromeStr(mystr){
    let str = mystr.toLowerCase();
    let reverese = '';
    for(let i=str.length-1;i>=0;i--){
        reverese += str[i]
    }
    console.log(reverese, str)
    if(reverese === str){
        console.log('Palindrome String')
    } else{
        console.log('Not a palindrome string')
    }
}
checkpalindromeStr("Civil");

// Builtin Methods
const a = "eveve";
const b = a.split('').reverse().join('').trim();
(a === b) ? console.log("Palindrome") : console.log("Not a palindrome")

// two - pointer
function isPalindrome(str){
    let left = 0;
    let right = str.length-1;
    while(left<right){
        if(str[left].toLowerCase() !== str[right].toLowerCase()){
            console.log("Two-pointer = Not a palindrome")
            return false; 
        }
        left++;
        right--;
    }
    console.log("Two-pointer = Palindrome string")
    return true; 
   
}

isPalindrome("iTopiNonAvevanoNipoti")