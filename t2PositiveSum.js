let arr = [1, 2,-10,10, 3, 4,1,-4, 5, -1, -2, -3, -4, 5, -10]

let positiveSum = Arr => {

    let sum = 0;

    for (const iterator of Arr) {
        if (iterator > 0) {
            sum = sum + iterator;
        }
    }

    return sum;

}

let result = positiveSum(arr);

console.log(result);