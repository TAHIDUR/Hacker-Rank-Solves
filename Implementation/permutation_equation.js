function permutationEquation(p) {
    let x = 1
    let y = []
    for (x; x <= p.length; x++) {
        let indexOfX = p.indexOf(x)+1
        y.push(p.indexOf(indexOfX)+1)
    }

    return y;
}

console.log(permutationEquation([ 2, 3, 1 ]))