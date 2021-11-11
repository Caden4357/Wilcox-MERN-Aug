//This code will output Telsa And Mercedes 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar,car2 ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//This code will output an error because name isnt defined if we comment out line 17 its runs and prints Elon
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);

//This code will output another error because theres no password in the person object 
// it actually ran the code but printed 12345 then undefined 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//this will output false and then true first=2, second=5, third=2
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// console.log(first);
// console.log(second);
// console.log(third);

//this will output value then the whole array then 1 then 5 
const lastTest = {
    key: 'value',
    arr: [1, 5,"caden", 1, 8, 3, 3]
}
const { key } = lastTest;
const { arr } = lastTest;
const [,,willThisWork] = arr;
//Predict the output
console.log(key);
console.log(arr);
console.log(arr[0]);
console.log(willThisWork);


function smallest( sortedArray ) {
    sortedArray = [2, 5, 6, 12, 14, 28, 37, 41, 44, 45]
        return sortedArray[4];
    }

console.log(smallest());

