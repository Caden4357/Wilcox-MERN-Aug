const randomArray = () => {
    let arr = [];
    for (var i = 0; i <= 10; i ++){
        arr.push((Math.floor) (Math.random() * 100))
    }
    return arr
}
console.log(randomArray());

const swappingValues = (arr) => {
    let firstValue = arr[0];
    let secondValue = arr[arr.length-1];
    arr[0] = secondValue;
    arr[arr.length-1] = firstValue;
    return arr;
}
console.log(swappingValues([32,2,3,5,7,6.1,3,66,10,-202,-20202,-332]));

const reverse = (arr) => {
    for (var i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}
console.log(reverse([-3,5,1,3,2,4,10]));

const insertXintoY = (arr, x, y) => {
    arr[y] = x;
    return arr;
}
console.log(insertXintoY([1, 3, 5, 7], 10, 2));

const noNegatives2 = (arr) => {
    let negativeNums = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negativeNums ++;
        }else{
            arr[i - negativeNums] = arr[i];
        }
    }
    while (negativeNums--){
        arr.pop();
    }
    return arr;
}
console.log(noNegatives2([1,3,4,-6,-1,2,-66,0,-7,1]));

// this linear search will stop the first time it sees the right number obviously the issue with this is what if theres more than one of the same number? we'll take care of this below
const linearSearch1 = (x, arr) => {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === x){
            return [i];
        }
    }
    return false;
}
console.log(linearSearch1(8,[24, 8, 23, 3, 8]));

// Doing the the above function except this time were gonna count how many correct numbers instead of exiting on the first right number trigger
const linearSearch2 = (x, arr) => {
    let count = 0;
    let index = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === x){
            count ++;
            index.push([i])
        } else{
            arr[i] === arr[i];
        }
    }if(count === 0){
        return false;
    }
    return count +" number(s) match what your looking for" + " and they are found at these or this index(s) " + index;
}
console.log(linearSearch2(23929,[24, 8, 23, 3, 8, -8, 10, 9,100000, 32432902, 23929, 8585, 888888, 8]));

const rSum = (num) => {
    let total = 0;
    for (var i = 1; i <= num; i++){
        total += i;
    }
    return total;
}
console.log(rSum(15));


// a quicker way to do the rSum function above 
const rSum2 = (num) => {
    if (num === 1) {
        return 1;
    }else{
        return num + rSum2(num - 1);
    }
}
console.log(rSum2(5));

const iFact = (num) => {
    let sum = 1;
    for (var i = 1; i <= num; i++){
        sum *= i;
    }
    return sum;
}
console.log(iFact(5));

// Fibonnaci algorithm recursive this increases the time complexity 

// const fibonacci = (num) => {
//     let num1=0;
//     let num2=1;
//     let sum;
//     for (var i = 0; i < num; i++) 
//     {
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//     }
//     return num2;
//     }
//     console.log(fibonacci(5));

const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length-1;
    while(low <= high){
        let mid = Math.floor((low + high) /2);
        let guess = arr[mid];
        if(guess === item){
            return mid;
        }
        if(guess > item){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
}
console.log(binarySearch([1,3,5,7,9,12,15,19,99,2000], 3));


                        // 12:01:00AM -> 00:01:00
    const convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        
        let [hours, minutes] = time.split(':');
        
        if (hours === '12') {
            hours = '00';
        }
        
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        
        return `${hours}:${minutes}`;
        }
        
        console.log(convertTime12to24('01:02 PM'));
        console.log(convertTime12to24('05:06 PM'));
        console.log(convertTime12to24('12:00 PM'));
        console.log(convertTime12to24('12:00 AM'));