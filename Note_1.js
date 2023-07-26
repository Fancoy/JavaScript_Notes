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