// default param

function howAreYou(mood = 'happy') {
    console.log(mood);
}

howAreYou();
howAreYou('Sad');

let [x, y = 0] = [1];
console.log(x, y);

let [j = 9, k = 8] = [];
console.log(x, y);
console.log(j, k);

const [{ prop: t = 999 }] = [{ prop: undefined}];
console.log(t);