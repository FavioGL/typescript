namespace MyMath{
  export const PI:number = 3.1416;
  export function calculateCircumference(diameter:number){
    return diameter * PI;
  }

  export function calculateRectangle(width:number, length: number){
    return width * length;
  }
}
