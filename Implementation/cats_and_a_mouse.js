function catAndMouse(x, y, z) {
    if(Math.abs(x-z) > Math.abs(y-z)){
        return 'Cat B'
    }else if(Math.abs(y-z) > Math.abs(x-z)){
        return 'Cat A'
    }else{
        return 'Mouse C'
    }
}

console.log(catAndMouse(1,2,3))
console.log(catAndMouse(1,3,2))