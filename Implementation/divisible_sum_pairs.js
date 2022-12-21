function divisibleSumPairs(n, k, ar) {
    let divisible = 0
    for (let x = 0; x < ar.length; x++) {
        for (let y = x + 1; y < ar.length; y++) {
            if ((ar[x] + ar[y]) % k === 0) {
                divisible++
            }
        }
    }
    return divisible
}

// console.log(divisibleSumPairs(6, 3,[1, 3, 2, 6, 1, 2]))
console.log(divisibleSumPairs(5, 2,[5, 9, 10, 7, 4]))