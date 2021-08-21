function print255(){
var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
}
    return arr;
}
console.log(print255());

const oddNumbers = () => {
    for (var i = 1; i <= 100; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
oddNumbers();

const sumOddNumbers = () => {
    let sum = 0;
    for (var i = 1; i <= 5000; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOddNumbers());

const itterateArray = (arr) => {
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
itterateArray([3,5,6,7,8,9]);

const findMax = (arr) => {
    let max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([3,8,99,10,100,890,20200203993434, 1,-300,-900,-10000, 9000292,2020020399346]));

const findAverage = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return "the average of this array is " + avg;
}
console.log(findAverage([2,4,6,8,10]));

const arrayWithOddNumbers = () => {
    let y = [];
    for (var i = 1; i <= 255; i++){
        if (i % 2 !== 0){
            y.push(i);
        }
    }
    return y;
}
console.log(arrayWithOddNumbers());

const greaterThanY = (arr, y) => {
    let count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            count ++;
        }
    }
    return count;
}
console.log(greaterThanY([1000,3000,500,7, 200, 6, -29, 1000, 10002, 90000], 1000));

const squareValues = (arr) => {
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(squareValues([1,5,10,-2]));

const noNegatives = (arr) => {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(noNegatives([1,5,10,-2]));

const minMaxAvg = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        else if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return "min is: " + min + " max is: " + max + " avg is: " + avg 
}
console.log(minMaxAvg([1,5,10,-2]));

const shiftingValues = (arr) => {
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1] ;  
    }
    arr[arr.length-1] = 0;
    return arr;
}
console.log(shiftingValues([1,5,10,7,-2]));

const numberToString = (arr) => {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(numberToString([-1,-3,2,-6,66]))















// class Deck {
//     constructor() {
//         const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         for (const suit of suits) {
//             for (const face of faces) {
//             deck.push(this.createCard(suit, face));
//             }
//         }
//         this.deck = deck;
//         }
//         createCard(suit, face) {
//         return face + " of " + suit;
//         }
// }
// deck1 = new Deck;
// console.log(deck1);