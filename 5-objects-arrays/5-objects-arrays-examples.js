/**
 * VIDEO 5: Objects & Arrays - Additional Examples & Best Practices
 * 
 * This file contains extra examples and common mistakes to avoid.
 */

// ============================================
// COMMON HANGUP #1: Reference vs Value
// ============================================

// ❌ PROBLEM: Objects and arrays are copied by reference, not by value
console.log('=== Reference vs Value ===');

let original = { title: 'Original Song' };
let copy = original;  // This doesn't create a new object, just another reference!

copy.title = 'Changed Song';
console.log('Original:', original.title);  // "Changed Song" - original changed too!

// ✅ SOLUTION: Create a new object/array
let original2 = { title: 'Original Song' };
let copy2 = { ...original2 };  // Spread operator creates a new object
copy2.title = 'Changed Song';
console.log('Original (fixed):', original2.title);  // "Original Song" - unchanged!

// For arrays:
let arr1 = [1, 2, 3];
let arr2 = [...arr1];  // Spread operator creates a new array
arr2.push(4);
console.log('arr1:', arr1);  // [1, 2, 3] - unchanged
console.log('arr2:', arr2);  // [1, 2, 3, 4] - changed

// ============================================
// COMMON HANGUP #2: Mutating const
// ============================================

// const prevents reassignment, but doesn't prevent modifying contents
console.log('\n=== Mutating const ===');

const myArray = [1, 2, 3];
// myArray = [4, 5, 6];  // ❌ Error: Cannot reassign
myArray.push(4);  // ✅ OK: Can modify the array
console.log('Modified array:', myArray);  // [1, 2, 3, 4]

const myObject = { name: 'Alex' };
// myObject = { name: 'Bob' };  // ❌ Error: Cannot reassign
myObject.name = 'Bob';  // ✅ OK: Can modify the object
console.log('Modified object:', myObject);  // { name: 'Bob' }

// ============================================
// COMMON HANGUP #3: forEach doesn't return
// ============================================

// forEach executes a function for each item, but doesn't return anything
console.log('\n=== forEach vs map ===');

const numbers = [1, 2, 3, 4, 5];

// forEach - does something, but returns undefined
const forEachResult = numbers.forEach(num => num * 2);
console.log('forEach result:', forEachResult);  // undefined

// map - transforms each item and returns a new array
const mapResult = numbers.map(num => num * 2);
console.log('map result:', mapResult);  // [2, 4, 6, 8, 10]

// ============================================
// ARRAY METHODS DEEP DIVE
// ============================================

console.log('\n=== Array Methods ===');

const songs = [
    { title: 'Song A', artist: 'Artist 1', duration: 180, genre: 'Rock' },
    { title: 'Song B', artist: 'Artist 2', duration: 220, genre: 'Pop' },
    { title: 'Song C', artist: 'Artist 1', duration: 195, genre: 'Rock' },
    { title: 'Song D', artist: 'Artist 3', duration: 240, genre: 'Jazz' }
];

// MAP - Transform each item
const titles = songs.map(song => song.title);
console.log('Titles:', titles);

// FILTER - Keep items that match condition
const rockSongs = songs.filter(song => song.genre === 'Rock');
console.log('Rock songs:', rockSongs.length);

// FIND - Find first item that matches
const longSong = songs.find(song => song.duration > 200);
console.log('First song longer than 200s:', longSong?.title);

// SOME - Check if any item matches
const hasLongSongs = songs.some(song => song.duration > 250);
console.log('Has songs longer than 250s:', hasLongSongs);

// EVERY - Check if all items match
const allHaveTitles = songs.every(song => song.title);
console.log('All songs have titles:', allHaveTitles);

// REDUCE - Combine all items
const totalDuration = songs.reduce((sum, song) => sum + song.duration, 0);
console.log('Total duration:', totalDuration, 'seconds');

// SORT - Sort array (modifies original!)
const sortedByDuration = [...songs].sort((a, b) => a.duration - b.duration);
console.log('Sorted by duration:', sortedByDuration.map(s => s.title));

// ============================================
// OBJECT METHODS
// ============================================

console.log('\n=== Object Methods ===');

const person = {
    name: 'Alice',
    age: 25,
    city: 'New York',
    email: 'alice@example.com'
};

// Object.keys() - Get all keys
const keys = Object.keys(person);
console.log('Keys:', keys);

// Object.values() - Get all values
const values = Object.values(person);
console.log('Values:', values);

// Object.entries() - Get key-value pairs
const entries = Object.entries(person);
console.log('Entries:', entries);

// Object.assign() - Copy properties
const newPerson = Object.assign({}, person, { age: 26 });
console.log('New person:', newPerson);

// Spread operator (modern way)
const newPerson2 = { ...person, age: 27 };
console.log('New person 2:', newPerson2);

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Shopping Cart
console.log('\n=== Example 1: Shopping Cart ===');

const cart = [
    { name: 'Apple', price: 0.50, quantity: 5 },
    { name: 'Banana', price: 0.30, quantity: 3 },
    { name: 'Orange', price: 0.75, quantity: 2 }
];

const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log('Cart total: $' + total.toFixed(2));

// Example 2: User Management
console.log('\n=== Example 2: User Management ===');

const users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 28, active: true },
    { id: 4, name: 'Diana', age: 22, active: true }
];

// Get active users
const activeUsers = users.filter(user => user.active);
console.log('Active users:', activeUsers.length);

// Get user by ID
const userById = users.find(user => user.id === 2);
console.log('User with ID 2:', userById?.name);

// Get average age
const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log('Average age:', avgAge.toFixed(1));

// Example 3: Data Transformation
console.log('\n=== Example 3: Data Transformation ===');

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Book', category: 'Education', price: 15 },
    { id: 3, name: 'Phone', category: 'Electronics', price: 699 }
];

// Group by category
const byCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
}, {});

console.log('Products by category:', byCategory);

// ============================================
// BEST PRACTICES
// ============================================

// ✅ DO: Use const for arrays and objects (you can still modify contents)
const myArray = [1, 2, 3];
myArray.push(4);  // OK

// ✅ DO: Use spread operator to copy arrays/objects
const newArray = [...myArray];
const newObject = { ...myObject };

// ✅ DO: Use map/filter/reduce instead of loops when possible
const doubled = numbers.map(n => n * 2);  // Better than for loop

// ✅ DO: Use descriptive variable names
const activeUsers = users.filter(user => user.active);  // Good
// ❌ DON'T: const au = users.filter(u => u.active);  // Bad

// ✅ DO: Use optional chaining (?.) to safely access properties
const userName = user?.name;  // Won't crash if user is null/undefined

// ✅ DO: Use array methods that don't mutate (map, filter, reduce)
const filtered = numbers.filter(n => n > 2);  // Creates new array
// ❌ DON'T: numbers.filter(n => n > 2);  // If you need original, use spread first

// ✅ DO: Use Object.keys/values/entries for object iteration
for (let key of Object.keys(person)) {
    console.log(key, person[key]);
}

// ❌ DON'T: Modify arrays while iterating
// for (let i = 0; i < arr.length; i++) {
//     arr.pop();  // Bad - changes length while looping
// }

