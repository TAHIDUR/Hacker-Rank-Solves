function pickingNumbers(a) {
    return a
    const counts = {};
    a.forEach((num) => {
        // Increment the count for each number
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    });
    return counts;

    let keys = Object.keys(counts)

    // console.log(counts, keys)


    if(keys.length === 1)
    {
        return counts[keys]
    }


    keys.sort((a,b)=>b-a)

    let combinationSum = []

    for(let z=0; z<keys.length; z++){
        if(keys[z]-keys[z+1]<=1){
            combinationSum.push(counts[keys[z]]+counts[keys[z+1]])
        }
    }

    return Math.max(...combinationSum)

}
// let a = '4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4'
// let a = '66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66'
let a = '4 97 5 97 97 4 97 4 97 97 97 97 4 4 5 5 97 5 97 99 4 97 5 97 97 97 5 5 97 4 5 97 97 5 97 4 97 5 4 4 97 5 5 5 4 97 97 4 97 5 4 4 97 97 97 5 5 97 4 97 97 5 4 97 97 4 97 97 97 5 4 4 97 4 4 97 5 97 97 97 97 4 97 5 97 5 4 97 4 5 97 97 5 97 5 97 5 97 97 97'
console.log(pickingNumbers(a.split(' ')))
// let a = '4 6 5 3 3 1'

// console.log(pickingNumbers([ 4, 6, 5, 3, 3, 1 ]))
