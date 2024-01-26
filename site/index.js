// let stdName = 'Saif';
// let stdAge = 25;
// console.log('My Name is ' + stdName + ' ' + 'And my age is ' + stdAge);

// let population = 120000000;
// console.log(population / 2);
// population++;
// console.log(population);
let popFinlannd = 6000000;
// console.log(population > popFinlannd);
let avgPopulation = 33000000;
// console.log(population < avgPopulation);

let myCountry = 'Pakistan';
let continent = 'Asia';
let myCountPopulation = '1100000';
let language = 'Urdu';

let description = myCountry + ' is in ' + continent + ' and its ' + myCountPopulation + ' people speak ' + language;

let descNew = `${myCountry} is in ${continent} and its ${myCountPopulation} people speak ${language}`;
// console.log(descNew);
// let country = "Pakistan";
// let Population = 55000000;
// if (Population > 33000000) {
// console.log(`${country}'s population is above average`);
// }
// else {
// console.log(`${country}'s population is  ${33000000 - population}below average`);
// }

// let numNeighbours = prompt('How many neighbour countries does your country have?');
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// console.log(numNeighbours);
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("Neighbours are more than 1");
// }
// else {
//     console.log("No Borders");
// }


// let country = "Canada";
// let speaksEnglish = true;
// let population = 200000;
// let isisland = false;

// if (speaksEnglish && population < 5000000 && !isisland) {
//     console.log(`You should live in ${country}`);
// }
// else {
//     console.log(`${country} does not meet your criteria`);
// }


// let team1 = "Dolphin";
// let team2 = "Koalas";
// let dolphinAverage = (109 + 95 + 106) / 3;
// console.log(dolphinAverage);

// let koalasAverage = (109 + 95 + 107) / 3;
// console.log(koalasAverage);

// if (dolphinAverage > koalasAverage) {
//     console.log(`${team1} is winner`);
// } else if (dolphinAverage < koalasAverage) {
//     console.log(`${team2} is winner`);
// } else if (dolphinAverage = koalasAverage) {
//     console.log(`Both have same average`);
// }

// if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
//     console.log(`${team1} is winner`);
// } else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
//     console.log(`${team2} is winner`);
// } else if (dolphinAverage === koalasAverage && koalasAverage >= 100 && dolphinAverage >= 100) {
//     console.log(`match is draw`);
// }

// let age = 24;
// age >= 23 ? console.log("My name is Saif") : console.log("My name is Hamza");

// let platGame = age >= 18 ? 'play cricket' : 'play football';
// console.log(platGame);

// console.log(`i want to ${age >= 18 ? 'play cricket' : 'play football'}`);

// let bill = Number(prompt('please enter the bill'));
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(bill);
// console.log(tip);
// console.log(tip + bill);


// function describeCountry(country, population, capitalCity) {
//     let info = `${country} has ${population} population and its capital city is ${capitalCity}`;
//     return info;
// }

// let countryinfo1 = describeCountry('Pakistan', '25 Carore', 'Islamabad');
// console.log(countryinfo1);

// let countryinfo2 = describeCountry('India', '50 Carore', 'Mumbai');
// console.log(countryinfo2);

// function declaration

// function percentageOfWorld1(population) {
//     let worldPopulation = 7900;
//     let percentage = (population / worldPopulation) * 100;
//     return percentage;
// }
// console.log(percentageOfWorld1(1441));
// console.log(percentageOfWorld1(2441));
// console.log(percentageOfWorld1(3441));

// function expression also called ananymous function

// let percentageOfWorld2 = function (population) {
//     let worldPopulation = 7900;
//     let percentage = (population / worldPopulation) * 100;
//     return percentage;
// }
// let expercentage1 = percentageOfWorld2(4441);
// console.log(expercentage1);
// let expercentage2 = percentageOfWorld2(5441);
// console.log(expercentage2);
// let expercentage3 = percentageOfWorld2(6441);
// console.log(expercentage3);

//Arrow Function

// let calAge = birthYear => 2040 - birthYear;

// console.log(calAge(1990));

// let calAge2 = (name, birthYear) => {
//     let age = 2040 - birthYear;
//     let retirement = 65 - age;
//     console.log(`${name} will retires in ${retirement} years`);
//     return retirement;
// }

// let willRetire = calAge2('Saif', 1998);
// console.log(willRetire);

// let percentageOfWorld2 = population => {
//     let worldPopulation = 7900;
//     let percentage = (population / worldPopulation) * 100;
//     return percentage;
// }
// let expercentage1 = percentageOfWorld2(4441);
// console.log(expercentage1);
// let expercentage2 = percentageOfWorld2(5441);
// console.log(expercentage2);
// let expercentage3 = percentageOfWorld2(6441);
// console.log(expercentage3);