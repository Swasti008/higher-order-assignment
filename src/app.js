const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
let modifiedFood = [];
function slice(startIndex,endIndex){
 for (let i=startIndex;i<endIndex-1;i++){
   modifiedFood.push(foods[i]);
 }
 return modifiedFood;
}

// Progression 2:
function spliced(){
  foods.splice(2,0,"noodles","icecream")
  return foods;
}

// Progression 3:
function checkNumber(numberArray,operation){
  let filteredArray=numberArray.filter(operation);
  return filteredArray;

}
function isEven(number){
  if (number%2==0){
    return true;
  }
  return false;
}
function isPrime(number){
  for (let i=2;i<=Math.sqrt(number);i++){
    if(number%i==0) return false;
  }
  return true;
}
// Progression 4:
function nonPrime(numberArray){
 return reject(numberArray);
}

function reject(numberArray){
  return numberArray.filter(number=>!isPrime(number));
}

// Progression 5:
let isEvenUsingLambda=isEven;

// Progression 6:
function findSquareOfNumbers(myArray){
  let squared=myArray.map(number=>number*number);
  return squared;
}

// Progression 7:
function sumOfSquares(myArray){
  return myArray.map(number=>number*number).reduce((sumOfSquares,number)=>{
      return sumOfSquares+number;
  },0)
}
function multiply(myArray){
  return myArray.reduce((finalMult, number)=>{
      return finalMult*number;
  },1);
}


