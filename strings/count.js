//  Count the number of vowels and consonants in a string
const str = "abcdefghijklmnopqrstuvwxyz";
let vowel_count = 0,consonant_count = 0;
for(let i=0;i<str.length;i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        vowel_count++
    }
    else{
        consonant_count++
    }
}
console.log(`Number of vowels is ${vowel_count}`);
console.log(`Number of constanants is ${consonant_count}`)

// using  set
function countVowels(str){
    const vowels = new Set("aeiouAEIOU");
    let vowelsCount = 0;
    let constCount = 0;
    let frequency = {};

    for(char of str){
        if(/[a-zA-z]/.test(char)){
            if(vowels.has(char)){
                vowelsCount++;
            }
            else{
                constCount++;
            }
        }
    }
    return {vowels : vowelsCount, consonants : constCount}
}
const result = countVowels("asdfimvnerrgrejhnsdASFGHMFBRHEGSMDFBAA")
console.log(result)