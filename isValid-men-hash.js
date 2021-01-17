/**
 * @param {string} s
 * @return {boolean}
 */
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
  /*if (
    s.length < 2 ||
    isOdd ||
    lastChars[firstChar] ||
    firstChars[lastChar]
  ) {
    return false;
  }*/

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
