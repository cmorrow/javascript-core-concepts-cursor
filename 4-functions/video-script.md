# Video 4: Functions & Scope
**Title:** "JavaScript Functions: Stop Copy-Pasting Code Forever"
**Duration:** 5-7 minutes

---

## [0:00-0:30] HOOK

"Tired of writing the same 5 lines of code 10 times? Functions are your DRY superpower—DRY stands for Don't Repeat Yourself. Instead of copy-pasting code everywhere, you write it once in a function and call it whenever you need it. Functions are reusable chunks of logic that make your code cleaner, easier to maintain, and way more powerful. Let's learn how to use them."

---

## [0:30-2:00] CORE CONCEPT

"Functions are reusable chunks of logic. Think of them like recipes. You write the recipe once—that's the function definition. Then whenever you want to cook that dish, you follow the recipe—that's calling the function.

Functions take inputs called parameters—think of them as placeholders. When you call the function, you provide actual values called arguments. The function does its work and can return a result.

There are different ways to write functions in JavaScript. Function declarations use the `function` keyword and are 'hoisted'—meaning you can call them before they're defined in your code.

Function expressions store a function in a variable. Arrow functions are a shorter, more modern syntax using the `=>` arrow.

Functions can return a value, or they can have side effects—like logging to the console or changing something on the page. Some functions do both.

Now, scope determines who can see your variables. Think of scope like rooms in a house. Variables declared in a function are like things in a specific room—only code in that room can see them. Variables declared outside functions are like things in the living room—everyone can see them. That's the difference between local scope and global scope.

Here's the one-line summary: Functions are reusable recipes, and scope determines who sees the ingredients."

---

## [2:00-4:30] LIVE DEMO

"Let's see functions in action. I'll open my console.

[Type in console]
```javascript
function calcTip(bill, pct) {
    return (bill * pct / 100).toFixed(2);
}
```

This is a function declaration. `calcTip` is the function name. `bill` and `pct` are parameters—placeholders for values we'll pass in. The function calculates a tip and returns it, rounded to 2 decimal places.

Now let's call it:

[Type]
```javascript
let tip = calcTip(50, 15);
console.log('Tip amount:', tip);
```

I'm passing 50 as the bill and 15 as the percentage. The function returns '7.50', and we store it in the `tip` variable.

Now let's see an arrow function:

[Type]
```javascript
const double = x => x * 2;
console.log('Double of 7:', double(7));
```

This is much shorter! The `=>` is like saying 'goes to' or 'becomes.' If you have one parameter, you don't need parentheses. If you have one expression, you don't need curly braces or a return statement.

For multiple parameters or multiple lines, you need parentheses and curly braces:

[Type]
```javascript
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log('Multiply 4 and 6:', multiply(4, 6));
```

Now let's talk about scope. Watch this:

[Type]
```javascript
let globalVar = 'I am global';

function showScope() {
    let localVar = 'I am local';
    console.log('Inside function:', globalVar);
    console.log('Inside function:', localVar);
}

showScope();
console.log('Outside function:', globalVar);
// console.log(localVar);  // This would cause an error!
```

The function can see `globalVar` because it's in the global scope. But `localVar` only exists inside the function. If I try to access it outside, I get an error."

---

## [4:30-5:30] COMMON HANGUPS

"Here's where 90% of newbies trip up:

**Number one: Using var in loops with functions.** This is a classic gotcha. If you use `var` in a loop and create functions inside that loop, all the functions will share the same variable value. Watch:

[Type]
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('var i =', i);  // All print 3!
    }, 100);
}
```

All three functions see the final value of i, which is 3. Use `let` instead, and each iteration gets its own variable:

[Type]
```javascript
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log('let j =', j);  // Prints 0, 1, 2 correctly
    }, 200);
}
```

**Number two: Arrow functions and 'this'.** Arrow functions don't have their own `this`—they inherit it from the parent scope. Regular functions have their own `this`. This matters when working with objects and event handlers, but we'll see more of that in later videos.

**Number three: Forgetting the return statement.** If you don't return a value, the function returns `undefined`:

[Type]
```javascript
function addWrong(a, b) {
    a + b;  // Calculates but doesn't return
}
console.log(addWrong(2, 3));  // undefined

function addRight(a, b) {
    return a + b;  // Returns the result
}
console.log(addRight(2, 3));  // 5
```

Always remember to return if you need the result!"

---

## [4:30-5:30] FUNCTIONAL PROGRAMMING BRIEF EXPLANATION

"Before we move on, let me give you a quick taste of functional programming. This is a programming style that treats functions as first-class citizens—meaning you can pass functions to other functions, return functions from functions, and store functions in variables.

Functional programming emphasizes:
- **Pure functions**—functions that always return the same output for the same input and don't have side effects
- **Immutability**—not changing data, but creating new data instead
- **Higher-order functions**—functions that take other functions as arguments or return functions

You've actually already seen some of this! When we use `map`, `filter`, and `reduce` on arrays, we're passing functions to other functions. That's functional programming in action.

For example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);  // [2, 4, 6, 8, 10]
```

Here, `map` is a higher-order function—it takes a function as an argument. The function `x => x * 2` is a pure function—same input always gives same output, no side effects.

Functional programming makes code more predictable and easier to test. As you progress, you'll see more of these patterns. For now, just remember: functions are reusable chunks of logic, and you can pass them around like any other value."

---

## [5:30-6:15] MINI-CHALLENGE

"Alright, pause the video and try this. Write a function called `greet` that takes two parameters: `name` and `timeOfDay`. It should return a string like 'Good morning, Alex!' where morning comes from timeOfDay and Alex comes from name.

Make sure to handle different cases—if someone passes 'MORNING' in all caps, it should still work. Give it a shot—pause now!"

---

## [6:15-6:30] SOLUTION

"Here's how I'd do it:

[Type in console]
```javascript
function greet(name, timeOfDay) {
    return `Good ${timeOfDay.toLowerCase()}, ${name}!`;
}
console.log(greet('Alex', 'Morning'));
```

Perfect! I use `toLowerCase()` to convert the timeOfDay to lowercase, so it works whether someone passes 'Morning', 'MORNING', or 'morning'. The function returns the greeting string. The output is: 'Good morning, Alex!'

If you got something similar, you're doing great!"

---

## [6:30-7:00] TEASER

"Now you can create reusable chunks of logic with functions. But where do you store all the data that functions work with? That's where objects and arrays come in. Objects are like labeled drawers—you store things with names. Arrays are like numbered lists—you store things in order. In the next video, we'll learn how to work with objects and arrays, and some powerful methods that make data manipulation a breeze. See you there!"

