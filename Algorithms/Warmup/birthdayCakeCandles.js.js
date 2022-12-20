let candles = [ 3, 2, 1, 3 ]

let highest_candles = 0

let min_max = candles.sort((a,b) => b-a)

min_max.map(a => {
	if(a === min_max[0])
	{
		highest_candles++
	}
})

console.log( highest_candles);