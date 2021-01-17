/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const odd = s.length % 2 !== 0,
    last = {
      ')': true,
      '}': true,
      ']': true
    },
    first = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  let temp = '';

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (last[curr]) {
      if (s[i] === temp[temp.length - 1]) {
        temp = temp.slice(0, temp.length - 1);
        continue;
      }
      return false;
    }
    temp += first[curr];
  }
  return temp ? false : true;
}
