'use strict'

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const markBmi = massMark / heightMark ** 2
const johnBmi = massJohn / (heightJohn * heightJohn)
const markHigherBMI = markBmi > johnBmi

// console.log(markBmi, johnBmi, markHigherBMI)




// Calc Tip
const bill = 40

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20

console.log(`The bill was ${bill}, tip was ${tip}, the total value ${bill + tip}`)





// Functions

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas)
        return `The winner is Dolphins ${scoreDolphins} vs. ${scoreKoalas}`

    if (avgKoalas >= 2 * avgDolphins)
        return `The winner is Koalas, ${scoreKoalas} vs. ${scoreDolphins}`

    return `No Team Wins`
}

console.log(checkWinner(scoreDolphins, scoreKoalas))

scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)

console.log(checkWinner(scoreKoalas, scoreDolphins))





// Arrays
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20 //calculate the bill via %

const bills = [125, 555, 44];

console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])] //bills array will be operated by calcTip function

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]] //the total of bills plus the tips that operates 

console.log(total);





// Objects 

const pew = {
    firstName: "pew",
    lastName: "depie",
    bday: 1992,
    job: "none",
    friends: ["hi", "hello"],
    hasDriversLicense: true,
    calcAge: function() {
        this.age = 2021 - this.bday
        return this.age
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`
    }
};

console.log(pew.getSummary())

// Challenge

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function() {
        this.bmi = `${this.mass / this.height ** 2}`
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi = `${this.mass / this.height ** 2}`
        return this.bmi;
    }
}

console.log(mark.calcBmi(), john.calcBmi())

if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI ${mark.bmi} is higher than John's ${john.bmi}`)

} else {
    console.log(`John's BMI ${john.bmi} is higher than Mark's ${mark.bmi}`)
}





// Loops

const jonas = [
    'Jonas',
    'ka',
    23, ['hi', 'hello'],
    true
]

for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] !== 'string') continue

    console.log(jonas[i], typeof jonas[i]);
}

let i = 0
while (i < jonas.length) {
    console.log(i, jonas[i], typeof jonas[i])
    if (typeof jonas[i] === 'object') {
        for (let counter = 0; counter < jonas[i].length; counter++)
            console.log(jonas[i][counter])
    }
    i++
}

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips1 = []

const totals1 = []

const calcTip1 = bills => bills >= 50 && bills <= 300 ? bills * .15 : bills * .20

for (let i = 0; i < bills1.length; i++) {
    const tip = calcTip1(bills1[i])
    tips1.push(tip)
    totals1.push(tip + bills1[i])
}
console.log(bills1, tips1, totals1)

const calcAverage1 = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length

}

console.log(calcAverage1(totals1))





// Finding the min and max value with calculating temp amplitude


const temperatures = [1, 'error', 2, 4]
const temperatures1 = [2, 3, 4, 5, 6, 7]

const calcTempAmplitude = function(t1, t2) {

    const temp = t1.concat(t2)
    console.log(temp)

    let min = temp[0]
    let max = temp[0]

    for (let i = 0; i < temp.length; i++) {
        const currentTemp = temp[i]
        if (typeof currentTemp !== 'string') {
            if (currentTemp > max) max = currentTemp
            if (currentTemp < min) min = currentTemp
        }
    }

    return max - min
}

const amplitude = calcTempAmplitude(temperatures, temperatures1)
console.log(amplitude)




// Challenge
const temperaturesNew = [17, 21, 23]

const printForcast = function(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {

        str += `${arr[i]} C in ${i + 1} days ... `
    }
    console.log(" ... " + str)

}

printForcast(temperaturesNew)