function viralAdvertising(n) {
    let liked = 2
    let person = 2
    for (let x=2; x<=n; x++){
        person = Math.floor((person*3)/2)
        liked += person
    }

    return liked
}

console.log(viralAdvertising(5))