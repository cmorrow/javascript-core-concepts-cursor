# Video 1: Variables & Data Types

**Title:** "JavaScript Variables: Why `1 + '1' = '11'` (and How to Fix It)"
**Duration:** 7-8 minutes

---

## [0:00-0:30] HOOK

"Welcome! If you've never written a single line of code before, you're in the right place. You can do this. You can learn to code. I know it might seem overwhelming at first—there's so much to learn, so many concepts, so many tools. But here's the thing: you don't need to learn it all at once.

The secret to mastering programming is to break it down—one core feature at a time. Don't try to learn everything too quickly. Master each basic concept first. Build a solid foundation. For example, today TypeScript is used to code JavaScript to help catch errors in JS, but it adds complexity and can be overwhelming to new programmers. For that reason I suggest learning all core JS concepts before using TypeScript. Also TypeScript can't be run in the browser and has to be converted to JavaScript;

This is where it all starts. Today, we're going to learn the very foundation of programming: how to store information in your code.

You might think programming is complicated, but at its core, it's just telling the computer to remember things and do things with those things. And the first step is learning how to store information—we call these 'variables.'

By the end of this video, you'll understand how to store text, numbers, and other types of information in your code.
You'll even understand why adding the number 1 to the text '1' gives you '11' instead of 2—and that's going to make total sense once you see how it works.

No prior experience needed. Let's start coding!"

---

## [0:30-1:00] CONSOLE INTRODUCTION

"Before we dive into variables, let me quickly show you where we'll be writing our code. We'll be using the browser console—a special tool built into every web browser that lets us write and test JavaScript code in real-time.

If you're using Chrome, you can open the developer console by pressing F12 on Windows or Command+Option+I on Mac. Then click on the 'Console' tab. This is where we'll type our code and see the results immediately.

Now, I should mention that each of the code examples in this course has an HTML console built right into the page. This makes it easier for new programmers to follow along without having to open the browser's developer tools right away. You can just open the HTML file and start coding directly on the page.

Don't worry if you're not familiar with developer tools yet—we'll cover how to use the browser console and other developer tools in detail in a later video. For now, just know that the console is where we write and test our JavaScript code, and you have a convenient HTML console on each example page to get started."

---

## [1:00-2:30] CORE CONCEPT

"Let's start with the basics. Think of variables as labeled boxes. You put something in the box, give it a label, and later you can find it using that label.
Another example: A Contact in Your Phone
A contact name (“Mom”) is the variable.
The phone number stored behind it is the value.
Change the number, the label stays the same — but anyone calling “Mom” reaches the updated value.

In JavaScript, we have three ways to create these boxes: `let`, `const`, and `var`.

`let` is like a box you can change—you can put something in, take it out, put something else in. It's reassignable / mutable.

`const` is like a locked box—once you put something in, you can't replace it. The contents might change, but you can't swap out the whole box. It's constant, fixed / immutable.

`var` is the old-school way. It works, but it has some weird behavior that trips up beginners. We'll see that in a minute.

Now, what goes inside these boxes? That's where data types come in. Think of data types as different kinds of things you can store.

JavaScript has seven primitive data types—these are the basic building blocks that cannot be broken down further:

1. **String** - Text data, like words or sentences. Always wrapped in quotes (single, double, or backticks). Example: `"Hello"` or `'World'`
2. **Number** - Numeric values, including integers and decimals. Example: `42` or `3.14`
3. **Boolean** - Represents true or false—like a light switch, either on or off. Example: `true` or `false`
4. **Undefined** - A variable that has been declared but hasn't been given a value yet. It means 'not set yet.'
5. **Null** - Represents an intentionally empty value. It means 'intentionally empty.'
6. **Symbol** - A unique identifier that cannot be duplicated. Used for creating unique property keys in objects. Example: `Symbol('id')`
7. **BigInt** - Used for integers that are too large to be represented by the Number type. Example: `9007199254740991n`

For beginners, you'll use strings, numbers, booleans, `null`, and `undefined` most often. Symbols and BigInt are more advanced features you'll encounter later.

Now, you might have heard of TypeScript—it's a language that adds type checking to JavaScript, which helps catch errors before your code runs. But here's the thing: TypeScript is built on top of JavaScript. You need to understand JavaScript fundamentals first—like what we're learning right now—before you can effectively use TypeScript. Think of JavaScript as the foundation, and TypeScript as an advanced tool you'll learn later once you've mastered the basics.

Here's the one-line summary: Variables are labeled boxes, and data types are what's inside them."

Now, before we move on, there are some important rules about naming variables. You can't just use any word you want.

**First, reserved keywords are off-limits.** JavaScript has special words that it uses for its own purposes—words like `let`, `const`, `var`, `if`, `else`, `function`, `return`, `true`, `false`, `null`, `undefined`, and many others. These are called 'reserved keywords,' and you cannot use them as variable names. If you try, JavaScript will throw an error because it needs these words for its own syntax.

**Second, variable names cannot start with a number.** You can use numbers in variable names, but they can't be the first character. So `name1` is fine, but `1name` is not. This is because JavaScript needs to distinguish between numbers and variable names when it reads your code.

Here are some examples: `let let = 5;` will cause an error because `let` is a reserved keyword. `let 1user = "Alex";` will also cause an error because it starts with a number. But `let user1 = "Alex";` works perfectly—the number comes after the letters.

---

## [2:30-4:30] LIVE DEMO

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

---

## [6:00-6:45] MINI-CHALLENGE

"Alright, pause the video and try this. I want you to create a user object with three properties: `name` as a string, `age` as a number, and `isLoggedIn` as a boolean. Then log a message that says '[name] is [age] and logged in: [true or false]'.

Use what we learned about variables and data types. Give it a shot—pause now!"

---

## [6:45-7:00] SOLUTION

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

## [7:00-7:30] TEASER

"You can now store data in variables. But what if you want your code to make decisions? What if you want it to repeat something 10 times without copy-pasting? That's where control flow comes in. In the next video, we'll learn about if statements and loops—the tools that let your code think and repeat. See you there!"
