/**
 * VIDEO 2: Comparison Operators - Additional Examples & Best Practices
 * 
 * This file contains extra examples and common mistakes to avoid.
 */

// ============================================
// COMMON MISTAKE #1: Using == Instead of ===
// ============================================

console.log('=== Common Mistake: == vs === ===');

// ❌ PROBLEM: Using == can lead to unexpected results
let userInput = "0";  // User typed "0" as a string
if (userInput == 0) {
    console.log('❌ This runs with ==!');  // Surprise! This runs even though userInput is "0"
}

// ✅ SOLUTION: Use === for predictable behavior
if (userInput === 0) {
    console.log('This would run');
} else {
    console.log('✅ Correct: This runs with ===');
}

// ============================================
// COMMON MISTAKE #2: Comparing null and undefined
// ============================================

console.log('\n=== null and undefined Comparisons ===');

// Special case: null == undefined is true
console.log('null == undefined:', null == undefined);  // true (special case)
console.log('null === undefined:', null === undefined); // false (different types)

// But be careful:
console.log('null == 0:', null == 0);     // false
console.log('null == false:', null == false); // false
console.log('undefined == 0:', undefined == 0); // false
console.log('undefined == false:', undefined == false); // false

// ============================================
// COMMON MISTAKE #3: String Comparison Gotchas
// ============================================

console.log('\n=== String Comparison Gotchas ===');

// Uppercase and lowercase matter!
console.log('"A" < "a":', "A" < "a");  // true (uppercase comes first in ASCII)
console.log('"apple" < "Banana":', "apple" < "Banana"); // false! "B" comes before "a"

// To compare strings ignoring case:
console.log('\n=== Case-Insensitive Comparison ===');
function compareIgnoreCase(str1, str2) {
    return str1.toLowerCase() < str2.toLowerCase();
}
console.log('"apple" < "Banana" (case-insensitive):', compareIgnoreCase("apple", "Banana")); // true

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Age Verification
console.log('\n=== Example 1: Age Verification ===');
function canVote(age) {
    return age >= 18;  // Must be 18 or older
}

console.log('Can 17-year-old vote?', canVote(17));  // false
console.log('Can 18-year-old vote?', canVote(18));    // true
console.log('Can 25-year-old vote?', canVote(25));  // true

// Example 2: Price Comparison
console.log('\n=== Example 2: Price Comparison ===');
function isAffordable(price, budget) {
    return price <= budget;
}

let itemPrice = 49.99;
let myBudget = 50.00;

console.log(`Can I afford $${itemPrice} with $${myBudget}?`, 
    isAffordable(itemPrice, myBudget));  // true

// Example 3: String Sorting
console.log('\n=== Example 3: String Sorting ===');
let names = ["Charlie", "alice", "Bob", "diana"];
names.sort();  // Sorts alphabetically, but case matters
console.log('Sorted names (case-sensitive):', names);

// Case-insensitive sort
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log('Sorted names (case-insensitive):', names);

// Example 4: Range Checking
console.log('\n=== Example 4: Range Checking ===');
function isInRange(value, min, max) {
    return value >= min && value <= max;
}

let temperature = 72;
console.log(`Is ${temperature}°F comfortable (65-75)?`, 
    isInRange(temperature, 65, 75));  // true

// Example 5: Exact Match vs Loose Match
console.log('\n=== Example 5: Exact Match vs Loose Match ===');
let userRole = "admin";
let requiredRole = "admin";

// Both work the same for strings, but === is safer
console.log('userRole == requiredRole:', userRole == requiredRole);   // true
console.log('userRole === requiredRole:', userRole === requiredRole); // true

// But watch out with numbers vs strings:
let userId = 123;
let searchId = "123";
console.log('userId == searchId:', userId == searchId);   // true (might be unexpected!)
console.log('userId === searchId:', userId === searchId); // false (correct!)

// ============================================
// BEST PRACTICES
// ============================================

// ✅ DO: Always use === (strict equality) by default
if (value === target) { }  // Good

// ✅ DO: Use == only when you specifically need type coercion
if (value == null) { }  // OK - checks for both null and undefined

// ✅ DO: Use descriptive variable names in comparisons
if (userAge >= minimumAge) { }  // Good
// ❌ DON'T: if (a >= b) { }  // Bad - what are a and b?

// ✅ DO: Use parentheses for complex comparisons
if ((score > 90 && attendance >= 0.8) || isHonorStudent) { }  // Clear

// ✅ DO: Compare strings case-insensitively when needed
if (username.toLowerCase() === "admin") { }  // Good for user input

// ❌ DON'T: Use == for comparing to 0 or empty string
// if (count == 0) { }  // Bad - might match false
// if (count === 0) { }  // Good

// ❌ DON'T: Compare floating point numbers for exact equality
// if (0.1 + 0.2 === 0.3) { }  // false! (floating point precision)
// if (Math.abs(0.1 + 0.2 - 0.3) < 0.0001) { }  // Good - use tolerance

// ✅ DO: Use >= and <= for inclusive ranges
if (age >= 18 && age <= 65) { }  // Good - includes both endpoints

// ✅ DO: Be explicit about what you're comparing
if (user.isActive === true) { }  // Clear, even if redundant
// (Though `if (user.isActive)` is also fine for booleans)

