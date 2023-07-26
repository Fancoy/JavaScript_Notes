let js = "amazing";
console.log(40 + 80 + 3);

console.log("Emre");

let firstName = "Emre";
console.log(23);
console.log(firstName);

let tempString = `${firstName}`;

//Type conversion is manual, coercion is automatically by JS

const inputYear = '1991';
console.log(Number(inputYear) + 18);

//Switch statement
const day = 'monday';

switch(day){
    case 'monday':
        console.log('Plan my week');
        console.log('Go to gym');
        break;
    case 'tuesday':
        console.log('Prepare for meeting')
    case 'wednesday':
    case 'thursday':
        console.log('Go to cinema')
        break;
    default:
        console.log('Not a valid day');
}
//Challange 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//Challange 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if(BMIJohn > BMIMark){
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
else{
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}

//Challange 3
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if(scoreKoalas < scoreDolphins){
    console.log("Dolphins win the trophy");
}
else if (scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
}
else{
    console.log("Both win the trophy");
}


//Challange 4
const bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

