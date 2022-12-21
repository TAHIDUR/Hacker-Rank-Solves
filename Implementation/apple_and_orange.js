function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0
    let orangeCount = 0
    apples.map((x) => {
        let appleDistance = x+a
        if(s <= appleDistance && appleDistance <= t){
            appleCount ++
        }    
    })
    oranges.map((y) => {
        let orangeDistance = y+b
        if(s <= orangeDistance && orangeDistance <= t){
            orangeCount ++
        }    
    })
    
    console.log(appleCount)
    console.log(orangeCount)
    
}

countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ])