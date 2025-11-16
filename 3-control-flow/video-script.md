# Video 3: Control Flow – Conditionals & Loops
**Title:** "JavaScript Control Flow: If/Else, For, While (No More Infinite Loops)"
**Duration:** 5-7 minutes

---

## [0:00-0:30] HOOK

"Want your code to choose between different paths? Or repeat something 10 times without copy-pasting the same code 10 times? That's what control flow is all about. Today, we're going to learn conditionals—which let your code make decisions—and loops—which let your code repeat actions. And I'll show you how to avoid the dreaded infinite loop. Let's go!"

---

## [0:30-2:00] CORE CONCEPT

"Control flow is how your code decides what to do next. Think of conditionals as crossroads—your code looks at the situation and chooses which path to take. Think of loops as repeating a task until it's done—like washing dishes until the sink is empty.

The most basic conditional is the `if` statement. It's like saying 'if this is true, do that.' You can add `else if` for additional conditions, and `else` for when nothing else matches.

There's also `switch`, which is like a multiple-choice question—you check which case matches and do that.

For loops, we have three main types: `for`, `while`, and `do...while`. 

A `for` loop is like saying 'start here, keep going while this condition is true, and do this after each step.' It's perfect when you know exactly how many times you want to repeat.

A `while` loop is like saying 'keep doing this as long as this condition is true.' It's great when you don't know how many times you'll need to repeat.

And `do...while` is like saying 'do this at least once, then keep doing it if the condition is still true.'

Here's the one-line summary: Conditionals are crossroads, loops repeat until done."

---

## [2:00-4:30] LIVE DEMO

"Let's see this in action. I'll open my console and write some code.

[Type in console]
```javascript
let score = 85;
```

Now let's use an if statement to determine the grade:

[Type]
```javascript
if (score > 90) {
    console.log('You got an A+!');
} else if (score > 80) {
    console.log('You got a B!');
} else {
    console.log('Keep trying!');
}
```

Since the score is 85, it prints 'You got a B!'

There's also a shorter way to write simple if-else statements called the ternary operator:

[Type]
```javascript
let grade = score > 90 ? 'A+' : score > 80 ? 'B' : 'Keep trying';
console.log(grade);
```

That question mark and colon is the ternary operator. It's like a mini if-else statement. Think of it as: condition ? do this if true : do this if false.

Now let's look at loops. I want to find all even numbers from 1 to 10:

[Type]
```javascript
let evens = [];
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evens.push(i);
    }
}
console.log(evens);
```

That `%` sign is the modulo operator—it gives you the remainder after division. So `i % 2 === 0` means 'is i divisible by 2 with no remainder?' In other words, is it even?

The for loop has three parts: `let i = 1` starts the counter at 1. `i <= 10` means 'keep going while i is less than or equal to 10.' And `i++` means 'add 1 to i after each iteration.'

Let's also see a while loop:

[Type]
```javascript
let count = 0;
while (count < 5) {
    console.log('Count:', count);
    count++;
}
```

This keeps printing until count reaches 5. Notice I'm incrementing count inside the loop—if I forget that, we get an infinite loop, which we'll talk about in a minute."

---

## [4:30-5:30] COMMON HANGUPS

"Here's where 90% of newbies trip up:

**Number one: Off-by-one errors with arrays.** Arrays start at index 0, not 1. So if an array has 3 items, the indices are 0, 1, and 2. The length is 3, but the last index is 2. If you write `i <= array.length`, you'll try to access index 3, which doesn't exist, and your code crashes. Always use `i < array.length`, not `<=`.

**Number two: Infinite loops.** This happens when you forget to update the condition. If you write `while (count < 5)` but never increment count, it will loop forever. Always make sure your loop condition will eventually become false.

**Number three: Truthy and falsy confusion.** In JavaScript, some values are considered 'falsy'—they're treated as false in conditionals. Empty strings, zero, null, undefined, and false itself are all falsy. Everything else is 'truthy.' This means:

[Type]
```javascript
if ('') {
    console.log('This won't print');
} else {
    console.log('Empty string is falsy');
}
```

An empty string is falsy, so the else block runs. But watch out—an empty array is truthy! That surprises people. To check if an array has items, check its length: `if (array.length > 0)`."

---

## [5:30-6:15] MINI-CHALLENGE

"Alright, pause the video and try this. Loop from 1 to 10, and log only the even numbers. Use the `continue` statement to skip odd numbers. 

The `continue` statement skips the rest of the loop body and goes to the next iteration. So if the number is odd, use `continue` to skip it. Give it a shot—pause now!"

---

## [6:15-6:30] SOLUTION

"Here's how I'd do it:

[Type in console]
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}
```

Perfect! I loop from 1 to 10. Inside the loop, I check if the number is odd using `i % 2 !== 0`. If it is odd, `continue` skips the rest of the loop and goes to the next number. Only even numbers reach the `console.log`, so we get: 2, 4, 6, 8, 10.

If you got that, you're doing great!"

---

## [6:30-7:00] TEASER

"Now your code can make decisions and repeat actions. But what if you find yourself writing the same decision-making code in multiple places? That's where functions come in. Functions let you wrap up chunks of logic and reuse them anywhere. In the next video, we'll learn how to create functions and understand scope—who can see your variables. See you there!"

