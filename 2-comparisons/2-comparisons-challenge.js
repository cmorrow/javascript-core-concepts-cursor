/**
 * VIDEO 2: Comparison Operators - Challenge Solution
 * 
 * CHALLENGE: Create two variables: score1 with the number 85, and score2 with the string "85".
 * Then check:
 * 1. Are they equal using ==?
 * 2. Are they strictly equal using ===?
 * 3. Is score1 greater than 80?
 * 4. Is score2 greater than 80?
 * Log all four results.
 */

// ============================================
// SOLUTION
// ============================================

let score1 = 85;
let score2 = "85";

console.log('score1 == score2:', score1 == score2);   // true (loose equality converts types)
console.log('score1 === score2:', score1 === score2); // false (strict equality checks type)
console.log('score1 > 80:', score1 > 80);           // true
console.log('score2 > 80:', score2 > 80);           // true (string "85" converts to number for comparison)

// ============================================
// ALTERNATIVE SOLUTIONS
// ============================================

// Solution 1: Using const instead of let
console.log('\n=== Alternative 1: Using const ===');
const score1Alt = 85;
const score2Alt = "85";

console.log('score1Alt == score2Alt:', score1Alt == score2Alt);
console.log('score1Alt === score2Alt:', score1Alt === score2Alt);
console.log('score1Alt > 80:', score1Alt > 80);
console.log('score2Alt > 80:', score2Alt > 80);

// Solution 2: Storing results in variables
console.log('\n=== Alternative 2: Storing results ===');
let score1Var = 85;
let score2Var = "85";

let looseEqual = score1Var == score2Var;
let strictEqual = score1Var === score2Var;
let score1Greater = score1Var > 80;
let score2Greater = score2Var > 80;

console.log('Loose equal:', looseEqual);
console.log('Strict equal:', strictEqual);
console.log('Score1 > 80:', score1Greater);
console.log('Score2 > 80:', score2Greater);

// Solution 3: More detailed output
console.log('\n=== Alternative 3: Detailed output ===');
let score1Detail = 85;
let score2Detail = "85";

console.log(`score1 (${typeof score1Detail}) == score2 (${typeof score2Detail}):`, 
    score1Detail == score2Detail);
console.log(`score1 (${typeof score1Detail}) === score2 (${typeof score2Detail}):`, 
    score1Detail === score2Detail);
console.log(`score1 (${score1Detail}) > 80:`, score1Detail > 80);
console.log(`score2 (${score2Detail}) > 80:`, score2Detail > 80);

// ============================================
// EXPLANATION
// ============================================

console.log('\n=== Explanation ===');
console.log('1. score1 == score2 is true because == converts the string "85" to number 85 before comparing.');
console.log('2. score1 === score2 is false because === checks both value AND type. 85 (number) !== "85" (string).');
console.log('3. score1 > 80 is true because 85 is greater than 80.');
console.log('4. score2 > 80 is true because JavaScript converts the string "85" to number 85 for the comparison.');

