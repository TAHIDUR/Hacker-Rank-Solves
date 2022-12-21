function kangaroo(x1, v1, x2, v2) {
    return v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}

console.log(kangaroo(1571, 4240, 9023, 4234))
console.log(kangaroo(4523, 8092, 9419, 8076))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))
