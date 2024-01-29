

/* 
What this Javascript programm is about:
It should tell you, what upgrade you should do next. 
There are different categories, 

BIKE:
    Frame
    Brakes
    etc.

Fitness:
    Stamina
    VO2 Max
    Base fitness

Gear
    Jersey
    Bibs
    Shoes
    Glasses Helmet


There are also different Makers which will be added later

*/


const bikeUpgrades = ["Frame", "Brakes", "Groupset", "Handlebars", "Wheels", "Pedals"];
const fitnessUpgrades = ["Base Fitness", "VO2 Max", "just shave your legs", "Upper Body Strength", "Lower Body Strength", "Just go eating"];
const gearUpgrades = ["new Jersey", "new Bib", "new Shoes", "new Glasses", "new Jacket"];



// for (element in bikeUpgrades){
//     console.log(bikeUpgrades[element])
// }

console.log(bikeUpgrades[Math.floor(Math.random(bikeUpgrades.length)*6)]);
function assambler (){
    let antwort ="Your next upgrade should be: " + bikeUpgrades[Math.random(bikeUpgrades.length*6)];

}


