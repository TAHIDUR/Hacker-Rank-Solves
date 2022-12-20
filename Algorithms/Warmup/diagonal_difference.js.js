let n = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

let diagonalSum1 = 0;
let diagonalSum2 = 0;
let length = n.length;


for(let i=0; i < n.length; i++){
    length--
    diagonalSum1+=n[i][i]
    diagonalSum2+=n[length][i]
}

console.log(Math.abs(diagonalSum1-diagonalSum2))
