
  'use strict';
  //Exercise 1
  function exercise1(){
    const { of } = require("rxjs");
    const myArray = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];

    Array.prototype.RemoveDuplicates = function(){
        return this.filter((v,i,a) => a.indexOf(v) == i);  
    };

    const promise = function(a){
        return new Promise(function(resolve){
          resolve(a.RemoveDuplicates());
        });
    }
    async function aSycnRemoveDuplicates(a){
      return await a.RemoveDuplicates();
    }

    console.log(myArray.RemoveDuplicates());
    promise(myArray).then(data => console.log("Promise =", data))
    aSycnRemoveDuplicates(myArray).then(data => console.log("Async =", data));
    of(myArray.RemoveDuplicates()).subscribe((res)=> console.log("rxjs", res));
    console.log("Syncronos Call");
}
// Exercise 2
function exercise2(){ 
     const todayDate = new Date();
     const day = todayDate.getDay();
     const isWeekend = ['weekEnd', 'weekDay', 'weekDay','weekDay','weekDay','weekDay','weekEnd']
     return isWeekend[day];
  
}
// // Exercise 3
function exercise3(){
  const item = {
     "name": "Biscuits",
     "type": "Regulras",
     "category": "food",
     "price": 2.0
  }
  const applyCoupon = category => discount => item => {
    item.price -= (item.price * discount);
    return item;
  }

 console.log(applyCoupon("food")(0.1)(item).price === 2.0)

}
exercise1();
console.log(exercise2());
exercise3();
