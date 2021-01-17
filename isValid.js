/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const isOdd = s.length % 2 !== 0;
      let temp = '';
    
	if(!s.length)  {
        return true;
	} else if ((s.length < 2) || 
               (isOdd) || 
               (s[0] === ')') || 
               (s[0] === '}') || 
               (s[0] === ']') || 
               (s[s.length-1] === '(') || 
               (s[s.length-1] === '{') || 
               (s[s.length-1] === '[')) {
        return false;
    }
	 
	for (let i = 0; i < s.length; i++) {
	    const curr = s[i];
        if(curr == ')' ||curr == '}' ||curr == ']') {
               
            if (s[i] === temp[temp.length-1]) {
                temp = temp.slice(0,temp.length-1);              
                continue;           
            }
            temp = '';
            return false;
        }            
        
        if(curr == '(') {
            temp += ')';
        } else if (curr == '{') {
            temp += '}';
        } else {
            temp += ']';
        }
    }
    return temp ? false : true;
};