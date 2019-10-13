// arrow function

let greet1 = function (fname, lname) {
    return fname + ' ' + lname;
}

console.log(greet1('Anwuat', 'K.'));


let greet2 = (fname, lname) => {
    return fname + ' ' + lname;
}
console.log(greet2('Anwuat', 'K.'));

const person1 = {
    name: 'Anuwat',
    handleMessage: (message, handler) => {
        handler(message);
    },
    greet: () => {
        this.handleMessage('Hi', (message) => {
            console.log(message, ' ', this.name);
        })
    }
}


person1.greet;