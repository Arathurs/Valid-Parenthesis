/**
 * @param {string} s
 * @return {boolean}
 */
// This solutions is identical to the one in isValid-men-hash.js,
// except it includes two additional vars, firstChar and lastChar,
// as well an an extra conditional in the beginning to cause the
// algorithm to rapidly return false in the case of a clearly
// invalid string.

// Such cases are if s has a length of < 2, s has an odd length,
// the first character in the string is a closing tag and if the
// last character is an opening tag. If any single one of these
// conditions fail the algorithm will rapidly return false.


function isValid(s) {

    const isOdd = s.length % 2 !== 0,
      firstChar = s[0],
      lastChar = s[s.length - 1],
      lastChars = {
        ')': true,
        '}': true,
        ']': true
      },
      firstChars = {
        '(': true,
        '{': true,
        '[': true
      };
    let temp = '';
    
    // Here is the fail fast conditional
    if (
      s.length < 2 ||
      isOdd ||
      lastChars[firstChar] ||
      firstChars[lastChar]
    ) {
      return false;
    }
  
    for (let i = 0; i < s.length; i++) {
      const curr = s[i];
      if (lastChars[curr]) {
        if (s[i] === temp[temp.length - 1]) {
          temp = temp.slice(0, temp.length - 1);
          continue;
        }
        return false;
      }
  
      if (curr == '(') {
        temp += ')';
      } else if (curr == '{') {
        temp += '}';
      } else {
        temp += ']';
      }
    }
    return temp ? false : true;
  }  