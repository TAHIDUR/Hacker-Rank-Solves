function hurdleRace(k, height) {
    let highest_hurdle = Math.max(...height)

    if(k < highest_hurdle)
    {
        return highest_hurdle - k
    }

    return 0
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))