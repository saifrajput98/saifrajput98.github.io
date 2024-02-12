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

// let myCountry = 'Pakistan';
// let continent = 'Asia';
// let myCountPopulation = '1100000';
// let language = 'Urdu';

// let description = myCountry + ' is in ' + continent + ' and its ' + myCountPopulation + ' people speak ' + language;

// let descNew = `${myCountry} is in ${continent} and its ${myCountPopulation} people speak ${language}`;
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

// let teamDolphins;
// let teamKoalas;
// let calcAverage = (a, b, c) => (a + b + c) / 3;
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// let checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphin wins ${scoreDolphins} vs ${scoreKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins ${scoreDolphins} vs ${scoreKoalas}`);
//     }
//     else {
//         console.log(`No One Wins`);
//     }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));
// console.log(checkWinner(545, 111));

// //with other data

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// let calcTip = function (bills) {
//     let tip = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
//     return tip;
// }

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// let friends = ['saif', 'salman'];
// let fellows = ['ali', 'hamza'];
// let friendFellows = [friends, fellows];
// console.log(friendFellows);
// console.log(friendFellows[0]);

// let jonas = {
//     firstName: 'Jonas',
//     lastName: 'etc',
//     age: 2337 - 1190,
//     job: 'Teacher',
//     friends: ['Micheal', 'ali', 'salman']
// }

// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas.friends.length);
// console.log(jonas.friends[0]);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, ${jonas.friends[0]} is the best friend.`)

/*
let saif = {
    firstName: 'Saif',
    lastName: 'Rajput',
    birthYear: 1998,
    job: 'Developer',

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function () {
    //     return 2024 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    }
}*/

// console.log(saif.calcAge(1998));
// console.log(saif['calcAge'](1998));
// console.log(saif.calcAge());
// console.log(saif);

let jonas = {
  firstName: "Jonas",
  lastName: "Rajput",
  birthYear: 1998,
  job: "Developer",
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license`;
  },
  // return this.hasDriverLicense,

  // drive: this.hasDriverLicense ? "a driver's License" : "not a Driver's License",
};

// console.log(jonas.drive);

// console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job}, and he has ${jonas.drive}`);

// console.log(jonas.getSummary());

let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
let john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

// console.log(john.calcBMI() > mark.calcBMI() ? `John's BMI ${john.calcBMI()} is higher than Marks's BMI ${mark.calcBMI()}` : `Mark's BMI ${mark.calcBMI()} is higher than John's BMI ${john.calcBMI()}`);

// console.log(john.calcBMI());
// console.log(mark.calcBMI());

// function percentageOfWorld1(population) {
//     let worldPopulation = 7900;
//     let percentage = (population / worldPopulation) * 100;
//     return percentage;
// }
// console.log(percentageOfWorld1(1441));

// let describePopulation = function (country, population) {
//     let percentage2 = percentageOfWorld1(population);
//     let description = `${country} has ${population} millon perple, which is about ${percentage2}% of the world`;
//     console.log(description);
// }
// describePopulation('portugal', 10);

// function percentageOfWorld1(population) {
//     let worldPopulation = 7900;
//     let percentage = (population / worldPopulation) * 100;
//     return percentage;
// }
// console.log(percentageOfWorld1(1441));

// let populations = [10, 20, 30, 40];
// console.log(populations.length === 4)
// let percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ]
// console.log(percentages);

// let neighbours = ['India', 'Iran', 'China'];
// console.log(neighbours);
// neighbours.push('Uthopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log(`Probably not a central European country`);
// }

// neighbours[neighbours.indexOf('India')] = 'Hindustan';
// console.log(neighbours);

// let myCountry = {
//     country: 'Pakistan',
//     capital: 'Islamabad',
//     language: 'Urdu',
//     population: 250,
//     neighbours: ['india', 'Iran', 'China']
// }
// console.log(myCountry);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a cpital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

let myCountry = {
  country: "Pakistan",
  capital: "Islamabad",
  language: "Urdu",
  population: 250,
  neighbours: ["india", "Iran", "China"],
  describe: function () {
    this.description = `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a cpital called ${this.capital}`;
    return this.description;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 3 ? true : false;
    return this.isIsland;
  },
};
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());
// for (let voters = 1; voters <= 50; voters++) {
//     console.log(`Voter number ${voters} is currently voting`);
// }

let jonasArray = [
  "Jonas",
  "Lorem",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// let type = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // type[i] = typeof jonasArray[i];
//     type.push(typeof jonasArray[i]);
// }
// console.log(type);

// let year = [1990, 2000, 2010, 2020];
// let age = []
// for (let i = 0; i < year.length; i++) {
//     age[i] = 2050 - year[i];
// }
// console.log(age);

for (let i = jonasArray.length - 1; i >= 0; i--) {
  // console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  // console.log(`***Exercise: ${exercise}***`);

  for (let i = 1; i < 6; i++) {
    // console.log(`Exercise: ${exercise}----- Repitition ${i}`);
  }
}

// let numRows = 5
// for (let i = 1; i <= numRows; i++) {
//     let row = '';
//     for (let n = 1; n <= i; n++) {
//         row += '*';
//     }
//     console.log(row);
// }
// for (let i = numRows - 1; i >= 1; i--) {
//     let row = '';
//     for (let n = 1; n <= i; n++) {
//         row += '*';
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "*";
//     let space = ' ';
//     console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
// }
// for (let i = n - 1; i >= 1; i--) {
//     let str = "*";
//     let space = ' ';
//     console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
// }

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  let innerCountry = listOfNeighbours[i];
  for (let n = 0; n < innerCountry.length; n++) {
    console.log(`neighbour: ${innerCountry[n]}`);
  }
}
console.log();
