
let findSecond = arr =>{
    let sortArr = arr.sort(function(a, b){return a - b});
    // console.log(sortArr);
    return sortArr[1]
}

let arr = [0,4,5,6,7,9,11,12,10]

let number = findSecond(arr)
console.log(number);

