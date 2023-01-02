function utopianTree(n) {
    let height = 1
    for (let x=1; x<n+1; x++){

        if (x%2 !== 0)
            height = height*2
        else
            height++
    }

    return height
}

console.log(utopianTree(5))