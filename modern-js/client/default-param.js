// default param

function howAreYou(mood = 'happy') {
    console.log(mood);
}

howAreYou();
howAreYou('Sad');

let [x, y = 0] = [1];
console.log(x, y);