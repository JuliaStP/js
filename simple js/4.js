const mixedArray = [3,13,74,14,66,15,22,4];

let isEven = function (number) {
    return number % 2 ===0;
}

let filterArray = function (arr, filter) {
    let newArr = [];

    arr.forEach(function(number){
        if (filter(number)) {
            newArr.push(number);
        }
    })
    return newArr;
}

console.log(filterArray(mixedArray, isEven));