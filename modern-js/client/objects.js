// object
const doBark = 'Bark';
const dog = {
    name: 'Doggy', age: 2,
    [doBark]: function(){
        console.log('Hong...');
    }
};

dog.Bark();
