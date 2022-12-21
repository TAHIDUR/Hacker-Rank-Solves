function hackerrankInString(s) {
    // Write your code here    

    let expected = 'hackerrank'

    let target_length = expected.split('').length

    let count = 0

    for(let i in s){
        if(s[i] === expected[count]){
            count++
        }
    }

    if(target_length === count){
        return 'YES'
    }else{
        return 'NO'
    }
}

console.log(hackerrankInString('hereiamstackerrank'))
console.log(hackerrankInString('hackerworld'))