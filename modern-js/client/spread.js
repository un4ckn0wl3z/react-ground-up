// spread

function add(x, y, z) {
    return x + y + z;
}

const sum1 = add(1, 2, 3);
console.log('1|', sum1);

const numbers = [2, 4, 6];
const sum2 = add(numbers[0], numbers[1], numbers[2]);
console.log('2|', sum2);
const sum3 = add(...numbers);
console.log('2|', sum3);

const arr = [7, 8, 9];
const append = [7, 8, 9, ...arr];
console.log(append);

// spread object
let obj1 = { fooa: "bar", x: 42 };
let obj2 = { foob: "baz", y: 43 };


let cloneObject = {...obj1, ...obj2}; // new memory location
console.log('cloneObject ', cloneObject);


// ----- spread object

let {fooa, foob} = cloneObject;

console.log(fooa, foob);



