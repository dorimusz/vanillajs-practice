const isPalindrome = (str) => {
    const base = str;
    let reversed = '';

    for (let char of str) {
        console.log(char + reversed)
        console.log('char ' + char)
        console.log('reversed ' + reversed)
        reversed = char + reversed
    }

    if (base === reversed) {
        return true
    } else { return false }

}


console.log(isPalindrome('hahah'))