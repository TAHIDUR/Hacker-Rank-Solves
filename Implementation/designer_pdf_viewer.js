function designerPdfViewer(h, word) {
    let letters = word.split('')
    let width = letters.length
    let heights = []

    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    letters.map(x=> heights.push(parseInt(h[lowercase.indexOf(x)])))

    let tallest_height = Math.max(...heights)

    return width*tallest_height
}

let a = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'
console.log(designerPdfViewer(a.split(' '), 'abc'))