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
const lastOne = fruit.pop('Orange');
console.log(fruit);
console.log(lastOne);

// shift
fruit.shift();
console.log(fruit);

// unshift
fruit.unshift('Mango');
console.log(fruit);

// index
console.log(fruit.indexOf('Orange'));
console.log(fruit.indexOf('Banana'));


// remove
let vegats = ['Radish', 'Carrot', 'Turnip'];
console.log(vegats);
vegats.splice(1, 2);
console.log(vegats);

// copy

let copy = fruit.slice();
console.log(copy);

// map
let arr1 = [1, 2, 3, 4, 6, 5];
const map1 = arr1.map((x) => {
    return x * 2;
});
console.log(map1);
