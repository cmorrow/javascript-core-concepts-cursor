/**
 * VIDEO 1: Variables & Data Types - Best Practices
 *
 * This file demonstrates best practices for working with variables in JavaScript.
 */

// ============================================
// BEST PRACTICES
// ============================================

// ✅ DO: Use const by default, let when you need to change it
const maxUsers = 100; // This won't change
let currentUsers = 0; // This will change

// ✅ DO: Use descriptive variable names
const userFirstName = "Alex"; // Good - clear what it is
// ❌ DON'T: const x = 'Alex';  // Bad - what is x?

// ✅ DO: Use camelCase for variable names (first word lowercase, rest capitalized)
let firstName = "Alex";
let isUserLoggedIn = true;

// ✅ DO: Initialize variables when you declare them
let count = 0; // Good
// ❌ DON'T: let count; count = 0;  // Less clear
