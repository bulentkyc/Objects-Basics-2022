//Styntax + Concept:

//object literal:
let objectVar = {}

//object constructor:
let objectVar2 = new Object();
console.log('objectVar: ', objectVar);
console.log('objectVar2: ', objectVar2);

/* 
//Syntax:
{
    key: value,
    key2: value
}
//"key" (name) and "value" together called as "property"
 */


//////////////////////////////////////////////////////////
//CRUD = Create, Read, Update, Delete
//////////////////////////////////////////////////////////
//Create
let myPen = {
    color: 'blue',
    material: 'metal'
};

let myPencil = new Object({
    color: 'red',
    material: 'wood'
});

console.log('myPen: ', myPen);
console.log('myPencil: ', myPencil);

//////////////////////////////////////////////////////////
//Read
console.log('myPen.color: ', myPen.color);
console.log("myPen['color']: ", myPen['color']);

let myKeyName = 'color';

console.log('myPen.myKeyName', myPen.myKeyName); // Don't do it!!
console.log('myPen[myKeyName]', myPen[myKeyName]); // This is OK

//////////////////////////////////////////////////////////
//Update
console.log('myPen.color: ', myPen.color);

myPen.color = 'pink';
console.log('myPen: ', myPen);
console.log('myPen.color: ', myPen.color);

myPen['color'] = 'purple';
console.log('myPen: ', myPen);
console.log('myPen.color: ', myPen.color);
//Mistake, variable are not able to be used with "."
//myKeyName is a variable which is defined on line 43
// If there's no key with the name here, JS creates a new property with that
myPen.myKeyName = 'yellow';
console.log('myPen: ', myPen);

//myPen[myKeyName] = prompt('Tell me your favorite color')
console.log('myPen: ', myPen);

//Mistake, variable names should be used without quotes
//myKeyName is a variable which is defined on line 43
myPen['myKeyName'] = 'orange';
console.log('myPen: ', myPen);

//////////////////////////////////////////////////////////
//JSON.stringify
//Syntax:
//JSON.stringify(object);

//JSON.parse
//Syntax:
//JSON.parse(object);
//////////////////////////////////////////////////////////
//Delete


let strMyPen = JSON.stringify(myPen);
console.log('String myPen: ', strMyPen);
console.log(typeof strMyPen);
console.log('Before deleting myPen', myPen);
delete myPen.material;
console.log('myPen: ', myPen);

delete myPen['myKeyName'];
console.log('myPen: ', myPen);

delete myPen[myKeyName];
console.log('myPen: ', myPen);
console.log('strMyPen: ', strMyPen);
console.log('toStr: ', myPen.toString());

let newPen = JSON.parse(strMyPen);
console.log('newPen: ', newPen);
//////////////////////////////////////////////////////////
let myFirstObj = {};

console.log(myFirstObj);

let myCar = 'BMW';

let myAuto = {
    brand: 'BMW',
    color: 'gray',
    engine: '3.0'
}

console.log('myCar: ', myCar);
console.log('myAuto: ', myAuto);

let copyCar = myCar;
console.log('copyCar: ', copyCar);

copyCar= 'Porsche';

console.log("copyCar : ", copyCar);

let copyAuto = myAuto;
console.log('copyAuto: ', copyAuto);

myCar = 'Tesla';
myAuto.brand = 'Tesla';

console.log(myAuto);



//////////////////////////////////////////////////////////
//Dynamic parameter names
let curColor = 'white';

let criteria = prompt('Please tell me the most important future of a mobile phone for you')
let criteriaVal = prompt('Please tell me the value of the future')

let myHandy = {
    capacity: '512gb',
    color: curColor,
    [criteria]: criteriaVal
}

console.log(myHandy);
//////////////////////////////////////////////////////////
//Shortcuts:
let name = prompt('name:');
let age = prompt('age:');
let email = prompt('email:');

let person = {
    name,
    age,
    email
}

console.log(person);

//////////////////////////////////////////////////////////
//Shortcuts:
console.log('Bulent')
console.log(prompt('number?'))
console.log({name,age})

//////////////////////////////////////////////////////////
//Nested Objects

let myCar2 = {
    brand: 'Bugatti',
    color: 'White and blue',
    engine: 1000,
    damage: false,
    preOwner: undefined,
    audioSystem: {
        brand: 'Sony',
        power: 230,
        speakers: 20
    }
}

