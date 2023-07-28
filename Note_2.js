'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("Hey nice car");

function logger () {
    console.log('My name is Emre');
}
logger();

function cutFruit (fruit){
    return fruit * 4;
}

function fruitMachine (apples, strawberries){
console.log(apples, strawberries);
apples = cutFruit(apples);
strawberries = cutFruit(strawberries);
const juice = `Juice with ${apples} apple pieces and ${strawberries} strawberry pieces`;
return juice;
}


const newJuice = fruitMachine(3, 4);
console.log(newJuice);

//Function declaration
function calcAge (birthYear){
return 2023 - birthYear;
}

const age1 = calcAge(1997);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear){
return 2023 - birthYear;
}

const age2 = calcAge2(1997);

console.log(age1, age2);

//If you use function declaration, you can call it before and after the declaration

//Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const retirementCalculator = (birthYear, name) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${name} retires in ${retirement} years`;
}

console.log(retirementCalculator(1997, "Emre"));

const friends = ['a', 'b', 'c'];

console.log(friends.length);

//Even though we created array with const, we can change elements but not array's itself like friends = ['a', 'b']

//Add element
const newLength = friends.push('d');
console.log(friends);
friends.unshift('x');
console.log(friends);

//Remove element
friends.pop(); //Last element, returnes removed element
console.log(friends);
friends.shift(); //First element
console.log(friends);

console.log(friends.indexOf('b')); //-1 if the element is not in array

//includes() method checks if the element is in array or not with boolean value

//Challange 1

const calcAverage = (param1, param2, param3) => {
    return (param1 + param2 + param3) / 3;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
    if(avgKoalas < avgDolphins){
        if(avgDolphins === avgKoalas * 2){
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        }
        else{
            console.log("No team wins...");
        }
    }
    else if(avgDolphins < avgKoalas){
        if(avgKoalas === avgDolphins * 2){
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        }
        else{
            console.log("No team wins...");
        }
        
    }
    else{
        console.log("No team wins...");
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas))

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(scoreDolphins, scoreKoalas))


//Challange 2
function calcTip(bill){
    if(bill >= 50 && bill <= 300){
        return bill * 15 / 100;
    }
    else{
        return bill * 20 / 100;
    }
}

const bills = [125, 555, 44];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}


//Objects

const emre = {
    firstName: 'Emre',
    lastName : 'Gurbuz',
    birthYear: 2000,

    calcEmreAge: function(){ //Method
        this.age = 2023 - this.birthYear; //Creating new object variable
        return 2023 - this.birthYear;
    }
}

//All same
console.log(emre.firstName);
console.log(emre['firstName']);
const nameKey = 'Name';
console.log(emre['first' + nameKey]);

const option = prompt('Which information you want from Emre, name, last name, or birth year');
console.log(emre[option]); //We cannot use dot notation here

emre.location = 'Ankara';
emre['university'] = 'Bilkent';
console.log(emre)

console.log(emre.calcEmreAge());
//Arrays are also objects

//Challange 3
const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.mass / (this.height * this.height);
    }
}

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
   calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.mass / (this.height * this.height);
    }
}
mark.calcBMI(); //To give value to the variables, we should call first
john.calcBMI();
if(john.bmi > mark.bmi){
    console.log(`${john.fullName}\'s BMI (${john.bmi}) is higher than ${mark.fullName}\'s (${mark.bmi})!`)
}
else if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}\'s BMI (${mark.bmi}) is higher than ${john.fullName}\'s (${john.bmi})!`)
}
else{
    console.log('Same');
}

//Continue and break statements

console.log('Only Strings')

const emreArr = [1, true, 'Mithat', 'Emre', 78, 0]

for(let i = 0; i < emreArr.length; i++){
    if(typeof emreArr[i] !== 'string'){
        continue;
    }
    console.log(emreArr[i]);
}

//Break terminates the loop and itself as well

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log('You got 6');
    }
}

//Challange 4

const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

  
  const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips2 = [];
  const totals2 = [];
  let sum = 0;
  
  
  
  for(let i = 0; i < bills2.length; i++){
      tips2[i] = calcTip2(bills2[i]);
      totals2[i] = bills2[i] + tips2[i];
  }
  for(let j = 0; j < totals2.length; j++){
      sum = sum + totals2[j];
  }
  console.log(sum / totals2.length); //Average