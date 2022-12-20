let n = 6

let a = n;
for(let x=0; x<n; x++){
    console.log(`${' '.repeat(a-1)}${'#'.repeat(x+1)}`);
    a--;
}