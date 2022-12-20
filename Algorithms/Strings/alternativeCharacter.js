let s = "ABABABAB"

let old = s.split('')


old.reduce((a,b) => 
    ((a===b)?console.log(`${a} matched ${b}`):console.log(`${a} not matched ${b}`)),0
)
// let newOne = new Set(old)



// console.log(old.length - newOne.size)
// console.log(old, newOne)

