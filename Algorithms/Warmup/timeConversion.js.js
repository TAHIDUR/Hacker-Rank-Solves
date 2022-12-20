let s = '09:05:45AM'

let times = s.split(':')
let hour = s.split(':')[0]

let format = s.slice(-2)

if(format === 'AM')
{
	if(parseInt(times[0]) === 12){
		times[0] = '00'
	
		console.log(times.join(':').slice(0,-2))
	}else{
		console.log(s.slice(0,-2))
	}
}else if(format === 'PM')
{
	if(parseInt(times[0]) === 12){
		console.log(times.join(':').slice(0,-2))
		
	}else{

		times[0] = parseInt(times[0])+12
	
		console.log(times.join(':').slice(0,-2))
	}
}