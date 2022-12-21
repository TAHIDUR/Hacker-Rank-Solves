function alternate(s) {
    // Write your code here    
    let occurances = []

    let letters = []
    for(let i in s){
        let letter = s[i]
        if(!letters.includes(letter)){  
            letters.push(letter)
        }
    }

    let total_letters = letters.length

    letters.map(x => {
        occurances.push(s.split(x).length-1)
    })

    

    console.log(occurances)
}

console.log(alternate('beabeefeab'))
// console.log(alternate('hackerworld'))