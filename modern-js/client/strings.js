// multi-line
const str = 'IN ES6 ' + 
            'Multi-line is Okay.';
console.log(str);
const str2 = `
Hi my name is Auwat.
This message from ES6 new feature.
             `;
console.log(str2);

// expression
const firstName = 'Cypher';
const lastName = 'jox';
const date = new Date();
const greet = 'Hello ' + firstName + ' ' + lastName + ', how are you ' + date;

const greet2 = `Hello ${firstName} ${lastName}, how are you ${date}`;

console.log(greet);
console.log(greet2);