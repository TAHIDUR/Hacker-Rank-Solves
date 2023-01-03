function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0
    for(i; i<=j; i++){
        let start = i
        if(Number.isInteger(Math.abs(start-(parseInt((i.toString().split('').reverse()).join(''))))/k)){
            count++
        }
    }
    return count
}

console.log(beautifulDays(20, 23, 6))