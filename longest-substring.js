//Finding Longest Substring without repeating characters

// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    var chars = s.split('');
    let map = {};
    let max = 0;
    let start = 0;
    for(i=0; i< chars.length;i++){
      let temp = map[chars[i]];
      if(temp != null && start <= temp )
      {
          start = temp + 1;
              
      } else {
          max = Math.max(max, i-start+1);
      }
    
      map[chars[i]] = i;
    }
    
    return max;
};
