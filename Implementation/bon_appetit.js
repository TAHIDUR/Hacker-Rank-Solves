function bonAppetit(bill, k, b) {
    // let sum = bill.slice(k, 1).reduce((a,b) => a+b,0)

    let sum = 0

    bill.map((value,index) => {
        if(index!==k){
            sum = sum+value
        }
    })

    let billPortion = Math.floor(sum/2)

    let ans = (b > billPortion) ? b-billPortion : 'Bon Appetit'

    return [billPortion, b, ans]
}

console.log(bonAppetit([3, 10, 2, 9], 1,12))