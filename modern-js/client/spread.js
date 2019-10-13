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
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", x: 43 };


let cloneObject = {...obj1}; // new memory location






