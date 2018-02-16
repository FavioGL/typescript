class Person {
  name: string;
  private type: string;
  protected age: number;
  constructor(name: string, username: string, age: number){
    this.name = name;
    this.age = age;
  }
  setType(type:string){
    this.type = type;
    console.log(this.type);
  }
  printAge(){
    console.log(this.age);
  }

}

const person = new Person("max","max", 20);
console.log(person);
person.printAge();

//inheritance
class Favio extends Person{
  name : string = 'favio';
  constructor(){
    super("","",0);
  }
}

let favio = new Favio();
console.log(favio);

//getters ans setters
class Plant {
  private _species: string = 'DEFAULT';
  set species(value:string) {
    if(value.length > 3){
      this._species = value;
    }else{
      this._species = "default";
    }
  }
  get species(){
    return this._species;
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "ABBBERESS";
console.log(plant.species);

//STATIC properties and methods
class Helpers {
  static PI: number =  3.1416;
  static calcCircumference(diameter: number ): number {
    return this.PI * diameter;
  }
}

console.log(2*Helpers.PI);
console.log(Helpers.calcCircumference(8));
//abstract classes
abstract class Project {
  projectName : string = 'default';
  budget : number;
  abstract changeName(name: string) : void;
  calcBudget(){
    return this.budget *2 ;
  }
}

class ITProject extends Project {
  changeName(name:string) : void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Cool project");
console.log(newProject);

//private constructors
class OnlyOne {
  private static instance : OnlyOne;
  private static name: string;
  private constructor(namex : string){
      name = namex;
  }
  static getInstance(){
    if(!OnlyOne.instance){
      OnlyOne.instance = new OnlyOne('the only one');
    }
    return OnlyOne.instance;
  }
}
let onlyOne = OnlyOne.getInstance();
