var reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        console.log(c);
        if (c === ' ') {
            res = res+word + c;//
            console.log(res);
            word = '';
        } else {
            word = c + word;//eht
        }
    }
    return res + word;
};