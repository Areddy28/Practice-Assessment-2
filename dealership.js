
function printTens() {
    
    for(let i = 10; i <= 100; i = i + 10) {
        
        console.log(i);
        
    }
    
}

function countUntilTens(step) {
    let total = step; 
    while (total % 10 !== 0) {
        console.log(total);
        total += step;
        console.log(total);
    }

} 



   

   const vowels = ["a", "e", "i", "o", "u"]; 

   function hasVowels (word) {
       let result = false; 
       for (let i = 0; i < word.length; i++) {
           if (vowels.includes(word[i])) {
               result = true;
               break; 
           }
       }
   }

   
function testTemperature (desiredTemp, actualTemp) {
    if (actualTemp > desiredTemp) {
        console.log ("Run AC");
    } else if (actualtemp < desiredTemp) {
        console.log ("Run Heat"); 
    } else {
        console.log ("Stand By"); 
    }  
}

//#5 

const dealership = [{
    make: "Toyota", 
    model: "Prius", 
    year: 2020, 
    hybrid: true 
}, {
    make: "Toyota", 
    model: "Prius", 
    year: 2021, 
    hybrid: true 

}, {
    make: "Ford", 
    model: "F-150", 
    year: 2015, 
    hybrid: false 
}, {
    make: "Ferrari", 
    model: "Enzo", 
    year: 2004, 
    hybrid: false 
}]

function findCars(arrayOfCars, model) {
    var indexes = [], i = -1;
    while ((i = arrayOfCars.indexOf(model, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

findCars(dealership, "Prius");


   


 
printTens(); 
countUntilTens(4); 
hasVowels("hello");
testTemperature(70, 90); 







//example
// let myArray = [{
//     name: "Anu", 
//     score: 50
// },{
//     name: "doug",
//     score: 100
// },{
//     name: "anush",
//     score: 110
// }]; 

// let jim = {}; 
// let rachel = {}; 
// let daniel = {}; 

// let myArray2 = [jim, rachel, daniel]; 

// let total = 0; 

// for (let i = 0; i < myArray.length; i++) {
//       total = total + myArray[i].score  
// }

// console.log(total); 

// let highScore = 0; 
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i].score > hightScore) {
//         highScore = myArray[i].score; 
//     }
// }

// console.log(highScore); 

// let total = 0; 

// let length = myArray.length; 

// for (let i = 0; i < myArray.length; i++) {
//     total = total + myArray[i].score; 
// }

// console.log(total/length); 


// myArray.forEach(function(i){
//     console.log(i)
// })

// myArray.map(function(i) {
//     console.log(i)
// })