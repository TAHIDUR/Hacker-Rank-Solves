let s = "aaaabbccddd"

let m1 = [];
let m2 = [];
let s2 = '';
for (let i=0; i<s.length-1; i++) {

    if(i%2 !== 1) {
        if (s[i] === s[i + 1]) {
            // s = s.slice(i+2)
            console.log('matched', s[i], i)
            // m1.push(i);
            // m2.push(i+1);
        } else {
            console.log('not matched', s[i], i)
        }
    }
}

// console.log(m1, m2)

// let difference = m1.filter(x => !m2.includes(x));
//
// difference.map((a) => {
//     s2 += s[a]
// })
//
// console.log(s2)
