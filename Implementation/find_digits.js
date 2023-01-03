function findDigits(n) {
    let digits = n.toString().split('')

    let count = 0

    digits.map((d)=>{
        if(n%parseInt(d) === 0){
            count++
        }
    })

    return count
}

console.log(findDigits(124))
console.log(findDigits(111))
console.log(findDigits(10))