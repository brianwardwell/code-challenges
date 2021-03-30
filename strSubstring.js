let needle = 'llp';
let haystack = 'hello';

var strStr = function(haystack, needle) {
    if (needle === '' ) return 0;
    for (i=0; i<haystack.length; i++) {
        const subString = haystack.slice(i, needle.length + i)
        console.log('subString', subString)
        if (subString === needle) {
          return i;
        }
    }
    return -1;
};

console.log('func', strStr(haystack, needle))