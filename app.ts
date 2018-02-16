console.log("It works!, good job");
let myName = 'favio';
console.log("oh " + myName);
//myName = 28;

let address: [string, number] = ["magnolia", 102];
console.log(address);

type addressType  = [string, number];
let address2: addressType;
address2 = ["ok",1];
console.log(address2);
let address3: addressType[3];
//address3[0] = ["A",1];
//simple function
function returnMyName() : string{
  return 'favio';
}
console.log(returnMyName());

function makeArray(...arg1:number[]){
  return arg1;
}
console.log(makeArray(1,2));
