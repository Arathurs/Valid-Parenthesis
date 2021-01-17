/**
 * @param {string} s
 * @return {boolean}
 */
// This solution is the highest performing by making use of memorization,
// efficient data structures as well as minimalistic conditionals
function isValid(s) {
  const isOdd = s.length % 2 !== 0,
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
