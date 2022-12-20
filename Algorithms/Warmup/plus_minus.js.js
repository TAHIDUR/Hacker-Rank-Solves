let arr = [ -4, 3, -9, 0, 4, 1 ]

let pos = 0;
let neg = 0;
let zero = 0;

arr.map((a) => {
  if(a>0)
  {
    pos++
  }else if(a<0)
  {
    neg++
  }else{
    zero++
  }
})

console.log((pos/arr.length).toFixed(6))
console.log(neg/arr.length.toFixed(6))
console.log(zero/arr.length.toFixed(6))
