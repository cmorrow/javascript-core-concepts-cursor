# Video 6: DOM Manipulation

**Title:** "JavaScript DOM: Click a Button, Change the Page (Live)"
**Duration:** 5-7 minutes

---

## [0:00-0:30] HOOK

"Your HTML page is static. It just sits there. But what if you want it to react? What if you want a button that actually does something when you click it? What if you want text that changes color, or content that appears and disappears? That's what DOM manipulation is all about. Today, we're going to make your page come alive. By the end of this video, you'll be able to create interactive web pages that respond to user actions. Let's do this!"

---

## [0:30-2:00] CORE CONCEPT

"DOM stands for Document Object Model. Think of it as JavaScript's map of your HTML page. Just like a map shows you where everything is in a city, the DOM shows JavaScript where everything is on your page.

When you write HTML, the browser creates a DOM tree—a structure that represents all your elements. JavaScript can find elements in this tree, read their content, change their content, modify their styles, and make them respond to events like clicks.

The main tools we'll use are:

- `querySelector` - finds an element on the page (like finding a specific building on a map)
- `textContent` - changes the text inside an element
- `style` - changes how an element looks (colors, sizes, etc.)
- `addEventListener` - makes elements respond to user actions (clicks, typing, etc.)

Here's the one-line summary: DOM is JavaScript's map of HTML."

---

## [2:00-4:30] LIVE DEMO

"Let's see this in action. I have an HTML file open with a button and a paragraph. Let me show you the code:

[Show HTML]

```html
<button id="btn">Click Me!</button>
<button id="reset">Reset</button>
<p id="out">Waiting...</p>
```

Now let's add the JavaScript. I'll open the script tag:

[Type in script]

```javascript
let count = 0;
```

I'm creating a variable to track clicks. Now let's make the button do something:

[Type]

```javascript
document.querySelector("#btn").addEventListener("click", () => {
  count++;
  const out = document.querySelector("#out");
  out.textContent = `Clicked ${count} time${count > 1 ? "s" : ""}!`;
  out.style.color = count % 2 ? "blue" : "red";
});
```

Let me break this down. `document.querySelector('#btn')` finds the button with id 'btn'. The `#` means we're looking for an ID.

`addEventListener('click', ...)` says 'when this button is clicked, do this.' The function inside runs every time someone clicks.

Inside, I increment the count, find the paragraph element, change its text content, and change its color. The color alternates between blue and red based on whether the count is odd or even.

[Click the button to demonstrate]

See? It works! The text changes and the color alternates.

Now let's add the reset button:

[Type]

```javascript
document.querySelector("#reset").addEventListener("click", () => {
  count = 0;
  const out = document.querySelector("#out");
  out.textContent = "Waiting...";
  out.style.color = "black";
});
```

[Click reset to demonstrate]

Perfect! The page is now interactive. We're manipulating the DOM—finding elements, changing their content, and changing their appearance."

---

## [4:30-5:30] COMMON HANGUPS

"Here's where 90% of newbies trip up:

**Number one: Script runs before HTML loads.** If your script runs before the HTML elements exist, `querySelector` returns `null`, and your code breaks. The solution is to either put your script at the end of the body tag, or wrap it in a `DOMContentLoaded` event:

[Type]

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // Your code here - runs after HTML is loaded
});
```

**Number two: CSS property names are different in JavaScript.** In CSS, you write `background-color` with a hyphen. In JavaScript, you write `backgroundColor` in camelCase. The hyphen isn't allowed in JavaScript property names, so JavaScript converts it:

[Type]

```javascript
element.style.backgroundColor = "red"; // Correct
// element.style.background-color = 'red';  // Error!
```

**Number three: innerHTML vs textContent.** `textContent` treats everything as plain text—it's safe. `innerHTML` can execute code if you're not careful—it's a security risk. Use `textContent` unless you specifically need HTML:

[Type]

```javascript
element.textContent = userInput; // Safe - treats as text
// element.innerHTML = userInput;  // Dangerous - can execute code!
```

**Number four: Forgetting to find the element each time, or finding it too many times.** If you use an element multiple times, store it in a variable:

[Type]

```javascript
const output = document.querySelector("#output");
output.textContent = "First use";
// ... later ...
output.textContent = "Second use"; // Reuse the variable
```

Don't call `querySelector` repeatedly for the same element—it's inefficient."

---

## [5:30-6:15] MINI-CHALLENGE

"Alright, pause the video and try this. Add a reset button to the page. When clicked, it should set the count back to 0 and change the text back to 'Waiting...'.

You'll need to find the reset button, add an event listener, and update both the count variable and the paragraph element. Give it a shot—pause now!"

---

## [6:15-6:30] SOLUTION

"Here's how I'd do it:

[Type in script]

```javascript
document.querySelector("#reset").addEventListener("click", () => {
  count = 0;
  const out = document.querySelector("#out");
  out.textContent = "Waiting...";
  out.style.color = "black";
});
```

Perfect! I find the reset button, add a click listener, reset the count to 0, find the output paragraph, reset its text, and reset its color. Now when you click reset, everything goes back to the starting state.

If you got something similar, you're on the right track!"

---

## [6:30-7:00] TEASER

"Now your pages can react to clicks and change dynamically. But what if you want to get data from the internet? What if clicking a button should fetch information from an API? That's where asynchronous JavaScript comes in. Asynchronous code lets your page stay responsive while waiting for data to load. In the next video, we'll learn about promises, async, and await—the tools that make fetching data smooth and non-blocking. See you there!"
