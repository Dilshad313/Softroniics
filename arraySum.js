// Sum of array
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+arr[i];
    }
    return sum;
}

console.log(`Sum of array = ${arraySum([1,2,3,4,5])}`);

// Average of array
function averageArray(arr){
    let sum = 0;
    let average = 0;
    for (let i = 0; i < arr.length; i++){
        sum=sum+arr[i];
    }
    average = sum/arr.length;
    return average;
}

console.log(`Average of array = ${averageArray([10,20,30])}`);

// Maximum and Minimum
function maxMin(arr) {
    let max=arr[0];
    let min=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return {max, min};
}

console.log(maxMin([10, 20, 30, 40, 50])); 

// Convert negative number to positive
function convertNtoP(arr){
    for (let i = 0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=Math.abs(arr[i])
            // arr[i]=-arr[i];
        } 
    }
    return arr;
}

console.log(convertNtoP([10,-5,2,3]));


// Sum of odd numbers of an array
function sumOdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(`Sum of Odd Number is : ${sumOdd([1,2,3,4,5])}`);

// Sum of Even numbers of an array
function sumEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(`Sum of Even Number is : ${sumEven([1,2,3,4,5])}`);


