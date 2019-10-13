// array
let fruit = ['Apple', 'Banana'];
console.log(fruit.length);
console.log(fruit[0]);
console.log(fruit[1]);

// loop
fruit.forEach((item, index, arr) => {
    console.log(item, index);

});

// push
fruit.push('Orange');
console.log(fruit);

// pop
fruit.pop('Orange');
console.log(fruit);
