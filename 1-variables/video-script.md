# Video 1: Variables & Data Types

**Title:** "JavaScript Variables: Why `1 + '1' = '11'` (and How to Fix It)"
**Duration:** 5-7 minutes

---

## [0:00-0:30] HOOK

"Welcome! If you've never written a single line of code before, you're in the right place. This is where it all starts. Today, we're going to learn the very foundation of programming: how to store information in your code.

You might think programming is complicated, but at its core, it's just telling the computer to remember things and do things with those things. And the first step is learning how to store information—we call these 'variables.'

By the end of this video, you'll understand how to store text, numbers, and other types of information in your code. You'll even understand why adding the number 1 to the text '1' gives you '11' instead of 2—and that's going to make total sense once you see how it works.

No prior experience needed. Let's start coding!"

---

## [0:30-2:00] CORE CONCEPT

"Let's start with the basics. Think of variables as labeled boxes. You put something in the box, give it a label, and later you can find it using that label.

In JavaScript, we have three ways to create these boxes: `let`, `const`, and `var`.

`let` is like a box you can change—you can put something in, take it out, put something else in. It's reassignable.

`const` is like a locked box—once you put something in, you can't replace it. The contents might change, but you can't swap out the whole box. It's constant, fixed.

`var` is the old-school way. It works, but it has some weird behavior that trips up beginners. We'll see that in a minute.

Now, what goes inside these boxes? That's where data types come in. Think of data types as different kinds of things you can store.

Strings are text—words, sentences, anything wrapped in quotes. Numbers are... well, numbers. Booleans are true or false—like a light switch, either on or off. Then we have `null`, which means 'intentionally empty,' and `undefined`, which means 'not set yet.'

Now, you might have heard of TypeScript—it's a language that adds type checking to JavaScript, which helps catch errors before your code runs. But here's the thing: TypeScript is built on top of JavaScript. You need to understand JavaScript fundamentals first—like what we're learning right now—before you can effectively use TypeScript. Think of JavaScript as the foundation, and TypeScript as an advanced tool you'll learn later once you've mastered the basics.

Here's the one-line summary: Variables are labeled boxes, and data types are what's inside them."

---

## [2:00-4:00] LIVE DEMO

"Alright, let's see this in action. I'm going to open my browser console—that's a special tool where we can type code and see what happens. If you're following along, you can open it too: press F12 on Windows or Command+Option+I on Mac, then click the 'Console' tab. This is where we'll write and test our code.

[Type in console]

```javascript
let name = "Alex";
```

So I just created a variable called `name` using `let`, and I put the string 'Alex' in it. Notice the quotes around 'Alex'—that tells JavaScript this is text, not code. Without quotes, JavaScript would think 'Alex' is a variable name, which would cause an error. The quotes are how we tell JavaScript: 'Hey, this is actual text I want to store.'"

[Type]

```javascript
const age = 25;
```

Here I'm using `const` for the age. This is a number—notice there are no quotes around 25. JavaScript knows it's a number because there are no quotes. If I put quotes around it like `"25"`, JavaScript would treat it as text, not a number. That's an important difference we'll see in a moment.

[Type]

```javascript
var isLearning = true;
```

And here's `var` with a boolean—true or false. Booleans are special words in JavaScript that mean exactly what they say: `true` means yes, `false` means no. No quotes needed here either.

Now watch this. Let me try to change the `const`:

[Type]

```javascript
age = 26;
```

Error! Can't reassign a const. But I can change the `let`:

[Type]

```javascript
name = "Alexandra";
console.log(name);
```

Works perfectly.

Now, here's where it gets interesting. Watch what happens when I mix types:

[Type]

```javascript
let score = 90;
console.log(`${name} is ${age} → ${score + " points"}`);
```

See that? When I use the plus sign with a string, JavaScript converts everything to strings. That's why `1 + '1'` gives you `'11'`—it's converting the number 1 to the string '1' and then joining them together.

But watch this:

[Type]

```javascript
console.log("5" - 2);
```

That gives us 3! With subtraction, JavaScript converts the string to a number. This automatic conversion is called 'type coercion,' and it's both helpful and confusing."

---

## [4:00-5:30] COMMON HANGUPS

"Alright, here's where 90% of newbies trip up. Three big gotchas:

**Number one: Hoisting with var.** Watch this:

[Type]

```javascript
console.log(x);
var x = 5;
```

What do you think prints? An error? Nope—it prints `undefined`. That's because JavaScript 'hoists' var declarations to the top. It's like JavaScript sees this code and says, 'Oh, you're going to declare x later, let me make space for it now.' But the value assignment happens later. This is why we prefer `let` and `const`—they don't do this weird hoisting thing.

**Number two: Type coercion confusion.** We saw this earlier. `"5" - 2` equals 3, but `"5" + 2` equals `"52"`. The plus sign is special—it's used for both addition and string concatenation. JavaScript has to guess what you want, and it guesses 'string' when one thing is a string. To fix this, be explicit:

[Type]

```javascript
Number("5") + 2; // 7
String(5) + "2"; // "52"
```

**Number three: Trying to reassign const.** You can't replace the whole box, but you can change what's inside if it's an object or array. This confuses people:

[Type]

```javascript
const arr = [1, 2, 3];
arr.push(4); // This works!
arr = [5, 6]; // This doesn't!
```

The array itself is constant, but you can modify its contents. Think of it like a locked box—you can't swap the box, but you can rearrange what's inside."

---

## [5:30-6:15] MINI-CHALLENGE

"Alright, pause the video and try this. I want you to create a user object with three properties: `name` as a string, `age` as a number, and `isLoggedIn` as a boolean. Then log a message that says '[name] is [age] and logged in: [true or false]'.

Use what we learned about variables and data types. Give it a shot—pause now!"

---

## [6:15-6:30] SOLUTION

"Alright, here's how I'd do it:

[Type in console]

```javascript
const user = {
  name: "Jordan",
  age: 28,
  isLoggedIn: true,
};
console.log(`${user.name} is ${user.age} and logged in: ${user.isLoggedIn}`);
```

Perfect! I used `const` because this user object won't change. I stored a string, a number, and a boolean. Then I used a template literal—those backticks and dollar signs—to build the message. The output is: 'Jordan is 28 and logged in: true'.

If you got something similar, you're on the right track!"

---

## [6:30-7:00] TEASER

"You can now store data in variables. But what if you want your code to make decisions? What if you want it to repeat something 10 times without copy-pasting? That's where control flow comes in. In the next video, we'll learn about if statements and loops—the tools that let your code think and repeat. See you there!"
