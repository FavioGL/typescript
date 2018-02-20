class MathClass{
  private PI:number = 3.1416;
  constructor(){}
  getCircumference(diameter:number):number{
    return diameter + this.PI;
  }
}

export = MathClass;
