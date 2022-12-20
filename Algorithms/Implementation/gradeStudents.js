let grades = [ 75,67,38,33 ]
let finalGrades = []
grades.map((a)=>{
    let modeOf = Math.ceil(a/5)
    let nextMulipleOfFive = modeOf*5
    if((nextMulipleOfFive-a)<3 && a>37){
        finalGrades.push(nextMulipleOfFive)
        console.log(nextMulipleOfFive)
    }else{
        finalGrades.push(a)
        console.log(a)
    }
})

console.log(finalGrades)
