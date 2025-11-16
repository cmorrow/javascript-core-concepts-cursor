/**
 * VIDEO 3: Control Flow - Challenge Solution
 * 
 * CHALLENGE: Loop 1-10 and log only even numbers. Use continue.
 */

// ============================================
// SOLUTION
// ============================================

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    // If the number is odd (not even), skip it
    // i % 2 !== 0 means "i divided by 2 has a remainder that is not 0"
    // In other words, if the remainder is 1, the number is odd
    if (i % 2 !== 0) {
        continue;  // Skip to the next iteration (don't print this number)
    }
    // Only even numbers reach this line
    console.log(i);
}
// Output: 2, 4, 6, 8, 10

// ============================================
// ALTERNATIVE SOLUTIONS
// ============================================

// Solution 1: Using modulo to check if even (opposite condition)
console.log('\n=== Alternative 1: Check if even ===');
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {  // If even (remainder is 0)
        console.log(i);
    }
    // No continue needed - we just don't do anything for odd numbers
}

// Solution 2: Start at 2 and increment by 2
console.log('\n=== Alternative 2: Start at 2, step by 2 ===');
for (let i = 2; i <= 10; i += 2) {  // Start at 2, add 2 each time
    console.log(i);
}

// Solution 3: Using while loop
console.log('\n=== Alternative 3: While loop ===');
let num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// Solution 4: Using do...while
console.log('\n=== Alternative 4: Do...while ===');
let number = 1;
do {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
} while (number <= 10);

// ============================================
// EXPLANATION OF KEY CONCEPTS
// ============================================

// The modulo operator (%) gives the remainder after division
console.log('\n=== Understanding Modulo (%) ===');
console.log('5 % 2 =', 5 % 2);  // 1 (5 divided by 2 = 2 remainder 1)
console.log('4 % 2 =', 4 % 2);  // 0 (4 divided by 2 = 2 remainder 0)
console.log('6 % 2 =', 6 % 2);  // 0 (even numbers have remainder 0)
console.log('7 % 2 =', 7 % 2);  // 1 (odd numbers have remainder 1)

// So:
// - Even number % 2 === 0
// - Odd number % 2 !== 0 (or === 1)

// The continue statement skips the rest of the loop body
// and goes to the next iteration
console.log('\n=== Understanding continue ===');
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log('Skipping 3');
        continue;  // Skip the console.log below, go to i = 4
    }
    console.log('Processing:', i);
}

