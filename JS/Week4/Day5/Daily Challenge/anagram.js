//write a finction anagram that recieves two string parametrs and comparing them in special way and returns boolean(true/false)

//like {c:1,a:1...} {h:1,l:2,o:1}

//additional function that receives an object of str like letters and counts a duplication
function buildCharObj(str) {
    const CharObj = {};//creation of empty object
    str = str.toLowerCase().replace(/[^w]/g);//preparation of str for all char that will not dependents on size of it(tolovercase) and removing all not the letter symbols(replase)

    //how many times does this character appear
    for (let char of str) {
        CharObj[char] = CharObj[char] + 1 || 1;
    }
    return CharObj;
}

function anagram(strA, strB) {
    const aCharObj = buildCharObj(strA);
    const bCharObj = buildCharObj(strB);

    //checing if two words have a same lenght
    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
        return false;
    }

    //comparing symbols of words - letters of two words should be the same but in diffrent order
    for (let char in aCharObj) {
        if (aCharObj[char] !== bCharObj[char]) {
            return false;
        }
    }
    return true;
}

anagram(`canada`, `hello`);
anagram(`friend`, `endFir`);