class BaseOject{
    constructor(public witdh: number, public length: number){}
}
class Rectangle extends BaseOject{
    constructor(public witdh: number, public length:number){
        super(witdh, length);
    }
    calsize(){
        return this.witdh*this.length;
    }
}
let rec = new Rectangle(5,2);
console.log(rec.calsize());