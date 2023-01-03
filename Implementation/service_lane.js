function serviceLane(n, width, cases) {
    let x = 0
    let y = []
    for (x; x < cases.length; x++) {
        let start = cases[x][0]
        let end = cases[x][1]
        y.push(Math.min(...width.slice(start, end+1)))
    }

    return y;
}

console.log(serviceLane(8,[2, 3, 1, 2, 3, 2, 3, 3],[[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]))