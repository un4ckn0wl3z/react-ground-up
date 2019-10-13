// Rest param

function howManyArgs(...args) {
    console.log(args.length);
}

howManyArgs(1);
howManyArgs(1, 'A', 'C');
howManyArgs(1, 2, 3, 1, 3, 1, 3);

function mul(imul, ...arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= imul;
    }
    console.log(arr)
}

mul(2, 10, 9, 8, 7, 6);

