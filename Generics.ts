class SimpleMath <T extends number> {
  baseValue: T;
  multiplyValue: T;
  calculate() : number {
    return this.baseValue * this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

class MapItem<V>{
  key: string;
  value : V;
  checkKey( keyPass : string) : boolean {
    return key == keyPass;
  }
  getValue() : V{
    return this.value;
  }
  constructor (xKey : string, xValue : V){
    this.key = xKey;
    this.value = xValue;
  }
  toString(){
    console.log("key: " + key + " value = " + value );
  }
}

class GenericMap<V>{
  elements : new Array<MapItem>;
  setItem(key: string, item: V){
    let element = new MapItem<V>(key,item);
    elements.push(element);
  }

  //getItem(key: string) // should retrieve the value of the provided key
  clear() : void{
    elements = new Array<MapItem>
  } // should remove all key-value pairs
  printMap(){
    for(let entry of elements){
      entry.toString();
    }
  } // should output key-value pairs
}

let map = new GenericMap<number>();
map.setItem("1",1);
map.setItem("2",2);
map.printMap();
