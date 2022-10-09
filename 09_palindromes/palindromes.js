const palindromes = function (string) {
    let str = string;

    function removeSpaces() {
        str = str.replace(/\s/g, '');
    }

    removeSpaces();

    function lowerCase() {
        str = str.toLowerCase();
    }

    lowerCase();

    
    function removePunctuation() {
        const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        let charArray = str.split('');
        let noPunct = charArray.filter(char => char.replace(punctuation, ''));
        str = noPunct;
    }

    removePunctuation();

    function isPalindrome(str) {
        let strLen = str.length;
        for (i = 0; i < strLen; i++) {
            if (i === (strLen - 1)) {
                return true;
            }
            else if (str[i] === str[strLen - 1]) {
                strLen--;
            }
            else {
                return false;
            }
        }

    }

    if (isPalindrome(str) == true) {
        return true;
    }
    else {
        return false;
    };
};

/*
remove punctuation and spaces from String
to lower case
convert string to array
get length of array
create variable within loop that updates i-- from array length and compares to the i++ until they are equal

create variable for array[0] and also array[array.length -1]

is array[0] === array[array.length -1]

iterate through loop

if all true, return true
if ever false, stop and return false
*/

// Do not edit below this line
module.exports = palindromes;
