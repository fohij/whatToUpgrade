

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

const start = ["Your next Upgrade should be: ", "You should really work on: ", "Maybe getting "];
const bikeUpgrades = ["Frame", "Brakes", "Groupset", "Handlebars", "Wheels", "Pedals"];
const fitnessUpgrades = ["Base Fitness", "VO2 Max", "just shave your legs", "Upper Body Strength", "Lower Body Strength", "Just go eating"];
const gearUpgrades = ["new Jersey", "new Bib", "new Shoes", "new Glasses", "new Jacket"];

    let antwort = [];

    let randomstart=(Math.floor(Math.random() * start.length));
    let randBikeUpgrade = Math.floor(Math.random()*bikeUpgrades.length);
    let randFitnessUpgrade = Math.floor(Math.random()*fitnessUpgrades.length);
    let randGearUpgrade = Math.floor(Math.random()*gearUpgrades.length);

    antwort.push(start[randomstart])

    switch (randomstart){
        case 0:
            antwort.push(bikeUpgrades[randBikeUpgrade]);
            break;
        case 1:
            antwort.push(fitnessUpgrades[randFitnessUpgrade]);
            break;
        
        case 2:
            antwort.push(gearUpgrades[randGearUpgrade]);
            break;
    }
   
console.log(`${antwort[0]} ${antwort[1]}`);






