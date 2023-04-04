// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { describe } = require("node:test");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



//   ***Hate to end on such a low note, but my family has decided to pay me a surprise visit and now I barely have time to think. Apologies for the subpar work on this one.***


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// input: an array of objects
// output: an array with a sentence about each person with their name capitalized.
// Pseudo: Map across the array, using a regular expression powered .replace method to capitalize the names. after that, need to stick the output in a concatenated string and return those as an array.





describe('heartOfGold', () => {
  it('return an array with a sentence about each person with their name capitalized', () => {
    expect(heartOfGold(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  });
});

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

const heartOfGold = (towel) => {
  const properPeople = towel.map(person => {
    const nominalName = person.name.replace(/\b\w/g, char => char.toUpperCase())
    return { name: nominalName, occupation: person.occupation }
  })

  const noStringsAttached = properPeople.map(person => `${person.name} is ${person.occupation}.`)
  return noStringsAttached
}

console.log(heartOfGold(people))

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// input: a mixed data array
// output: an array of only the REMAINDERS of the numbers when divided by three
// Pseudo: .filter to extract the numbers from the array, then .map shenanigans to do the math-y bits.

// a) Create a test with an expect statement using the variables provided.

describe('booMath', () => {
  it('return an array of only the REMAINDERS of the numbers when divided by 3 ', () => {
    expect(booMath(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(booMath(hodgepodge2)).toEqual([ 2, 1, -1 ])
  });
});

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const booMath = (input) => {
  const onlyNums = input.filter(bruh => typeof bruh === "number")
  remainders = onlyNums.map(brainHurts => brainHurts % 3)
  return remainders
}
// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// input: an array of numbers
// output:the sum of all the numbers cubed.
// pseudo: .map to do the cubing, then can use .reduce to add the array together.   

// a) Create a test with an expect statement using the variables provided.

  describe('qbert', () => {
    it('returns the sum of all the numbers cubed', () => {
      expect(qbert(cubeAndSum1)).toEqual(99)
      expect(qbert(cubeAndSum2)).toEqual(1125)
    });
  });

// b) Create the function that makes the test pass.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const qbert = (zork) => {
  let mappingStuff = zork.map(bingus => bingus ** 3)
  let reductron = mappingStuff.reduce((a, b) => a + b, 0)
  return reductron
}

// ***It seems like 80% of what we do in javascript is using either .map or .filter on stuff? ***