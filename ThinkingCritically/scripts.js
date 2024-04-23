// Function to increment the age field of an object
function incrementAge(obj) {
    // Check if the object already has an 'age' field
    if (!obj.age) {
        obj.age = 0; // If not, set it to 0
    }
    obj.age++; // Increment the 'age' field by 1

    // Add or update the 'updated_at' field with the current time
    obj.updated_at = new Date();

    return obj; // Return the modified object
}

// Function to make a copy of an object, increment the age field of the copy, and return the copy
function incrementAgeAndCopy(obj) {
    // Create a shallow copy of the object
    const copy = { ...obj };

    // Check if the copy already has an 'age' field
    if (!copy.age) {
        copy.age = 0; // If not, set it to 0
    }
    copy.age++; // Increment the 'age' field by 1

    // Add or update the 'updated_at' field with the current time
    copy.updated_at = new Date();

    return copy; // Return the modified copy
}

// In the second function, modifying the Date object using methods like setTime() would affect both the original and the copy,
// since both would reference the same Date object. To prevent this, we can create a new Date object for the 'updated_at' field.
// Alternatively, we could use libraries like moment.js to work with dates more safely and avoid unintended side effects.
