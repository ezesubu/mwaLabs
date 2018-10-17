class Car{
    constructor(public name: string, public acceleration: number){}
    honk(){
        console.log(this.name + " is saying: toooot!" )
    }
    accelerate(speed: number){
        this.acceleration += speed
    }
}

let car = new Car("Jetta", 60)
car.honk()
car.accelerate(20)
console.log(car.acceleration)