let s = "saveChangesInTheEditor"

let upperCase = s.replace(/[A-Z]/g, '');

console.log(s.split('').length-upperCase.split('').length+1)

//
// for(let i=0; i<s.split('').length; i++)
// {
// 	if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90)
// 	{
// 		upperCase++
// 	}
// }
//
// console.log(upperCase)