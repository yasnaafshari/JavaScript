//bitwise operators and permissions
const readingPermission = 1;
const editPermission = 2;
const deletePermission = 4;
let adminPermissions = 0;
adminPermissions = adminPermissions | editPermission | deletePermission | readingPermission;
let userPermissions = 0;
userPermissions = userPermissions | readingPermission;
let message = (adminPermissions & editPermission) ? 'admin has edit permission' : 'admin can not edit anything';
// console.log(message);

function FizzBuzz(input) {
    let byThree = input % 3 == 0;
    let byFive = input % 5 == 0;
    if (typeof input !== 'number')
        return NaN;
    if (byThree && byFive)
        return "FizBuzz";
    if (byThree)
        return "Fizz";
    if (byFive)
        return "Buzz";
    return input;
}
// console.log(FizzBuzz(false));

function checkSpeed(speed) {
    if (speed < 75)
        return "ok";
    const points = Math.floor((speed - 70) / 5);
    if (points >= 12)
        return 'license suspended';
    else return 'points ' + points;
}
// console.log(checkSpeed(170));

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let label = (i % 2 == 0) ? "Even" : "Odd";
        console.log(i + " " + label);
    }
}
// showNumbers(10);

// Falsy values : NaN, 0 , '', false, null, undefined, falsy
function countTruthy(array) {
    let i = 0;
    for (thing of array) {
        if (thing)
            i++;
    }
    return i;
}
// const array = [1, 2, 3, "non empty string", true, false, undefined, '', 0, null, NaN];
// console.log(countTruthy(array));

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'string')
            console.log(key + " " + obj[key]);
    }
}
// let comic = {
//     name: "Miriam",
//     age: 29,
//     nickName: "Midge",
//     kids: 2
// }
// showProperties(comic);

function sum(limit) {
    let counter = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            counter += i;
    }
    return counter;
}
// console.log(sum(20));

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    let meanValue = sum / array.length;
    return meanValue;
}

function calculateValue(array) {
    let meanValue = calculateAverage(array);
    if (meanValue < 60) return "F";
    if (meanValue < 70) return "D";
    if (meanValue < 80) return "C";
    if (meanValue < 90) return "B";
    return "A";
}
// let grades = [50, 80, 80];
// console.log(calculateValue(grades));

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 0; j < i; j++)
            stars += '*';
        console.log(stars);
    }
}
// showStars(3);

function showPrime(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}
// showPrime(15);


// 2 types of declaring a new object:
//1. Factory Function:
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    }
}
// const circle = createCircle(2);

//2. Construction Function:
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

// const circle = new Circle(3);
// console.log(circle);


// For in -> going through properties of an object
for (let key in circle) {
    // console.log(key, circle[key]);
}

// For of -> iterating through an array or anything iterable 
for (let key of Object.keys(circle)) {
    // console.log(key, circle[key]);
}

// keys and values of an object are considered to be enumerable,
// therefore we can iterate through them using Object.Keys() or Object.entries() method


// cloning an object:
const newCircle = {};
for (const key in circle) {
    newCircle[key] = circle[key];
}
// console.log(newCircle);

//or
const secondCircle = Object.assign({}, circle);
console.log(secondCircle);

// we can also add properties to the new object using assign:
const thirdCircle = Object.assign({
    color: "red"
}, circle);
console.log(thirdCircle);

// or use the spread operator:
const anotherCircle = { ...circle };
console.log(anotherCircle);

// Factory function practice:
function CreateAddress(city, zipCode, street) {
    return {
        city,
        zipCode,
        street
    };
}
let address = CreateAddress('Los Angeles', '+1', 'Hollywood');
// console.log(address);

// Constructor function practice:
function Address(city, zipCode, street) {
    this.street = street;
    this.zipCode = zipCode;
    this.city = city
}
let secondAddress = new Address('London', '+43', 'first');
// console.log(secondAddress);

// equality of reference:
function areSame(address1, address2) {
    return address1 === address2;
}

// equality of value 
function areEqual(address1, address2) {
    return address1.city === address2.city &&
        address1.zipCode === address2.zipCode &&
        address1.street === address2.street;
}
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

// console.log(areEqual(address1, address2));
// return true because the individual values are the same

// console.log(areSame(address1, address2));
// returns false because the references are different

// console.log(areSame(address1, address3));
// returns true because they point at the same part of the memory


let newArray = ['a', 'b']

//  beginning 
newArray.unshift('aa');
newArray.shift('aa');

// to the end
newArray.push('d');
newArray.pop();

// to the middle
newArray.splice(2, 0, 'a', 'f');
newArray.splice(2, 1);

// console.log(newArray);

// getting sum of an array 
let numbers = [23, 33, 32, 30, 30];
let numbersSum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
// console.log(numbersSum);

function arrayFromRange(min, max) {
    let rangeArray = [];
    while (min <= max) {
        rangeArray.push(min);
        min++;
    }
    return rangeArray;
}
// console.log(arrayFromRange(0, 3));
function includes(array, searchElement) {
    for (element of array)
        if (element === searchElement)
            return true;
    return false;
}
// console.log(includes(numbers, '23'));
function except(array, excluded) {
    let outputArray = [];
    for (element of array) {
        if (!excluded.includes(element))
            outputArray.push(element);
    }
    return outputArray;

}
// console.log(except(numbers, [23]));

function move(array, index, offset) {
    const position = index + offset;
    if (array.length <= position || position < 0)
        console.error('invalid offset');
    let newArray = [...array];
    let element = newArray.splice(index, 1)[0];
    newArray.splice(index + offset, 0, element);
    return newArray;
}
// console.log(numbers);
// console.log(move(numbers, 1, 2));

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        let occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, occurrence);
        return accumulator + occurrence;
    }, 0);

}
// console.log(countOccurrences(numbers, 30));

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
}
// console.log(getMax(numbers));

let movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const result = movies.filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating > b.rating)
    .reverse()
    .map(m => m.title);

// console.log(result);


// another beautiful thing about JavaScript: rest operator 
function calculateCheck(discount, ...args) {
    const total = args.reduce((a, b) => a + b);
    return total * (1 - discount);
}

//console.log(calculateCheck(0.2, 20, 30, 30, 10));


// notes: 1. rest operator should be the last argument (seems logical)
//        2. argument operator is an iterable object 
//        3. we don't need to declare parameters when we're using argument operator

// getter and setter 
const person = {
    firstName: 'Oscar',
    lastName: 'Isaac',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const name = value.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

person.fullName = 'Edgar Ramirez';

// console.log(person.fullName);
// console.log(person.lastName);

function calculateCheck(...args) {
    if (args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]]
    return args.reduce((a, b) => a + b);
}

// console.log(calculateCheck(numbers));

const circle3 = {
    radius: 2,
    // area: 20,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
    // get radius() {
    //     return this.radius;
    // },
    // set radius(value) {
    //     this.radius = value;
    // }
}
try {

    let numbers1 = [23, 33, 32, 30, 30];
    console.log(countOccurrencesWithErrorHandling('1'));
} catch (error) {
    console.log(error.message);
}
function countOccurrencesWithErrorHandling(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid Array');
    return array.reduce((accumulator, currentValue) => {
        let occurrence = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);

}