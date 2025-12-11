/**
 * VIDEO 1: Variables & Data Types - Type Coercion
 *
 * This file demonstrates type coercion in JavaScript.
 * Type coercion is when JavaScript automatically converts values from one type to another.
 */

// ============================================
// TYPE COERCION DEMO (The "1 + '1' = '11'" Problem)
// ============================================

// JavaScript tries to be helpful by converting types automatically
// This is called "type coercion" - but it can be confusing!

let number1 = 1;
let string1 = "1";

// When you use + with a string, JavaScript converts everything to strings
console.log('1 + "1" =', number1 + string1); // Result: "11" (not 2!)

// But with - (subtraction), JavaScript converts strings to numbers
console.log('"5" - 2 =', "5" - 2); // Result: 3 (works as expected)

// To fix this, convert types explicitly:
console.log('Number("1") + 1 =', Number(string1) + 1); // Result: 2
console.log('String(1) + "1" =', String(number1) + string1); // Result: "11" (intentional)
