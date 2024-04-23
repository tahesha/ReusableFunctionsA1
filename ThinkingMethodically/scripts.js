// Data array containing objects with information about individuals
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age
const sortedByAge = data.slice().sort((a, b) => a.age - b.age);

// Filter the array to remove entries with an age greater than 50
const ageLessThan50 = data.filter(entry => entry.age <= 50);

// Map the array to change the “occupation” key to “job” and increment every age by 1
const modifiedData = data.map(entry => ({
    ...entry, // Spread operator to copy all properties of the object
    job: entry.occupation, // Rename 'occupation' key to 'job'
    age: parseInt(entry.age) + 1 // Increment age by 1
}));

// Use the reduce method to calculate the sum of the ages
const sumOfAges = data.reduce((sum, entry) => sum + parseInt(entry.age), 0);

// Calculate the average age
const averageAge = sumOfAges / data.length;

// Logging the results to the console
console.log("Sorted by age:", sortedByAge);
console.log("Ages less than or equal to 50:", ageLessThan50);
console.log("Modified data:", modifiedData);
console.log("Sum of ages:", sumOfAges);
console.log("Average age:", averageAge);
