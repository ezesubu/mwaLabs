class Person{
    constructor(public firtsName:string){}
    get firstName(){
        return this.firtsName
    }
    set firstName(firtsName:string){
        this.firtsName = firtsName
    }
}

let person = new Person("Ezesubu")
console.log(person.firstName)
person.firstName ="Eze" 
console.log(person.firstName)