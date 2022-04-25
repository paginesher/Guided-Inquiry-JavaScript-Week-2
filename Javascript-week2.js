//very easy*
function min ( firstNum, secondNum){
    if ( firstNum < secondNum)
return firstNum;
else
return secondNum;
}
console.log(min(5,10));
// 5
console.log(min(0,-20));
// -20

//easy**
let student1=[ "PJ","Her",25];
let student2=["Daniel","Yang",31];
let student3=["Nathan","Cha",26];

console.log(`Hello, my name is ${student1[0]} ${student1[1]} and I am ${student1[2]} years old.`);

//medium***
function months() {
    let userInput = prompt("Enter the coresponding number of your birth month , ex : 1 = January");
    let months = ["January", " February", " March", " April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
    if (userInput == `1`) {
        console.log(`January`)
    } else if (userInput == `2`) {
        console.log(`February`)
    } else if (userInput == `3`) {
        console.log(`March`)
    } else if (userInput == `4`) {
        console.log(`April`)
    } else if (userInput == `5`) {
        console.log(`May`)
    } else if (userInput == `6`) {
        console.log(`June`)
    } else if (userInput == `7`) {
        console.log(`July`)
    } else if (userInput == `8`) {
        console.log(`Augsut`)
    } else if (userInput == `9`) {
        console.log(`September`)
    } else if (userInput == `10`) {
        console.log(`October`)
    } else if (userInput == `11`) {
        console.log(`November`)
    } else if (userInput == `12`) {
        console.log(`December`)
    } else{
        alert( "Invalid . Please enter a # 1-12")
    }
}

//Hard****
const Tom = BMI (8,9);
const Jerry =BMI (45,10)

function BMI (mass, height) {
    return (mass) / (Math.pow(height,2))
}
console.log("Is Tom's BMI greater than Jerry's ?")