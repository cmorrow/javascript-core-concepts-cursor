# JS Core Series – Full Video Outlines (5–7 min each)

> **Target:** Absolute beginners → interactive web apps  
> **Style:** Hook → Concept → Live Demo → Hangups → Challenge → **SOLUTION** → Teaser  
> **Tools:** Browser console + local `index.html` (no install)

---

## Video 1: Variables & Data Types  
**Title:** *“JavaScript Variables: Why `1 + '1' = '11'` (and How to Fix It)”*  

| Section | Time | Content |
|---------|------|--------|
| **Hook** | 0:00–0:30 | “You type `1 + '1'` and expect `2`. JS says `'11'`. Let’s fix the confusion **now**.” |
| **Core Concept** | 0:30–2:00 | “Variables = labeled boxes. Data types = what’s inside.” <br> - `let` (reassignable) <br> - `const` (fixed) <br> - `var` (old-school, hoisted) <br> - Primitives: `string`, `number`, `boolean`, `null`, `undefined` |
| **Live Demo** | 2:00–4:00 | ```js<br>let name = 'Alex';       // string<br>const age = 25;          // number<br>var isLearning = true;   // boolean<br>let score = 90;<br>console.log(`${name} is ${age} → ${score + ' points'}`); // coercion demo<br>``` |
| **Common Hangups** | 4:00–5:30 | 1. **Hoisting**: `console.log(x); var x = 5;` → `undefined` <br> 2. **Type Coercion**: `"5" - 2 = 3` but `"5" + 2 = "52"` <br> 3. **Reassigning `const`** → `TypeError` |
| **Mini-Challenge** | 5:30–6:15 | **Pause & code:** Create a `user` with `name` (string), `age` (number), `isLoggedIn` (boolean). Log: `"[name] is [age] and logged in: [bool]"`. |
| **SOLUTION** | 6:15–6:30 | ```js<br>const user = {<br>  name: 'Jordan',<br>  age: 28,<br>  isLoggedIn: true<br>};<br>console.log(`${user.name} is ${user.age} and logged in: ${user.isLoggedIn}`);<br>// Output: Jordan is 28 and logged in: true<br>``` |
| **Teaser** | 6:30–7:00 | “You can store data—now let’s **make decisions**. Next: Control Flow!” |

---

## Video 2: Control Flow – Conditionals & Loops  
**Title:** *“JavaScript Control Flow: If/Else, For, While (No More Infinite Loops)”*  

| Section | Time | Content |
|---------|------|--------|
| **Hook** | 0:00–0:30 | “Want your code to *choose*? Or repeat 10 times without copy-paste? Let’s go.” |
| **Core Concept** | 0:30–2:00 | “Conditionals = crossroads. Loops = repeat until done.” <br> - `if / else if / else` <br> - `switch` (bonus) <br> - `for`, `while`, `do…while` |
| **Live Demo** | 2:00–4:30 | ```js<br>let score = 85;<br>let grade = score > 90 ? 'A+' : score > 80 ? 'B' : 'Keep trying';<br>let evens = [];<br>for (let i = 1; i <= 10; i++) if (i % 2 === 0) evens.push(i);<br>console.log(grade, evens);<br>``` |
| **Common Hangups** | 4:30–5:30 | 1. **Off-by-one**: `i <= array.length` → crash <br> 2. **Infinite loop**: Forgetting `i++` <br> 3. **Truthy/Falsy confusion**: `if ('')` → false |
| **Mini-Challenge** | 5:30–6:15 | **Pause:** Loop 1–10 and log **only even numbers**. Use `continue`. |
| **SOLUTION** | 6:15–6:30 | ```js<br>for (let i = 1; i <= 10; i++) {<br>  if (i % 2 !== 0) continue;<br>  console.log(i);<br>}<br>// Output: 2, 4, 6, 8, 10<br>``` |
| **Teaser** | 6:30–7:00 | “Decision code repeats? Wrap it in a **function**. Next up!” |

---

## Video 3: Functions & Scope  
**Title:** *“JavaScript Functions: Stop Copy-Pasting Code Forever”*  

| Section | Time | Content |
|---------|------|--------|
| **Hook** | 0:00–0:30 | “Tired of writing the same 5 lines 10 times? Functions are your DRY superpower.” |
| **Core Concept** | 0:30–2:00 | “Functions = reusable recipes. Scope = who sees the ingredients.” <br> - Declaration vs Expression <br> - Arrow functions <br> - `return` vs side effects |
| **Live Demo** | 2:00–4:30 | ```js<br>function calcTip(bill, pct) { return (bill * pct / 100).toFixed(2); }<br>const double = x => x * 2;<br>let tip = calcTip(50, 15);<br>console.log(`Tip: $${tip}`, double(7));<br>``` |
| **Common Hangups** | 4:30–5:30 | 1. **`var` in loops** → all share same value <br> 2. **Arrow `this`** → inherits from parent <br> 3. **Forgetting `return`** → `undefined` |
| **Mini-Challenge** | 5:30–6:15 | **Pause:** Write `greet(name, timeOfDay)` → returns `"Good morning, Alex!"` |
| **SOLUTION** | 6:15–6:30 | ```js<br>function greet(name, timeOfDay) {<br>  return `Good ${timeOfDay.toLowerCase()}, ${name}!`;<br>}<br>console.log(greet('Alex', 'Morning'));<br>// Output: Good morning, Alex!<br>``` |
| **Teaser** | 6:30–7:00 | “Functions return data—store it in **objects & arrays**. Next!” |

---

## Video 4: Objects & Arrays  
**Title:** *“JavaScript Objects & Arrays: Store Real-World Data Like a Pro”*  

| Section | Time | Content |
|---------|------|--------|
| **Hook** | 0:00–0:30 | “Variables hold one thing. Objects hold **everything**.” |
| **Core Concept** | 0:30–2:00 | “Objects = labeled drawers. Arrays = numbered lists.” <br> - `{ key: value }` <br> - `[]` methods: `push`, `pop`, `map`, `filter`, `reduce` |
| **Live Demo** | 2:00–4:30 | ```js<br>const song = { title: 'Song 1', artist: 'A', duration: 180 };<br>const playlist = [song];<br>playlist.push({ title: 'Song 2', artist: 'B', duration: 220 });<br>let total = playlist.reduce((sum, s) => sum + s.duration, 0);<br>console.log(playlist, total + 's');<br>``` |
| **Common Hangups** | 4:30–5:30 | 1. **Reference vs Value**: `let b = a; b.title = 'X'` → `a` changes! <br> 2. **Mutating `const`**: `const arr = []; arr.push(1)` → allowed <br> 3. **`forEach` doesn’t return** |
| **Mini-Challenge** | 5:30–6:15 | **Pause:** Build a `playlist` with 3 songs. Log total duration in **minutes**. |
| **SOLUTION** | 6:15–6:30 | ```js<br>const playlist = [<br>  { title: 'Song A', duration: 210 },<br>  { title: 'Song B', duration: 180 },<br>  { title: 'Song C', duration: 240 }<br>];<br>const totalSeconds = playlist.reduce((sum, s) => sum + s.duration, 0);<br>const totalMinutes = (totalSeconds / 60).toFixed(1);<br>console.log(`Total: ${totalMinutes} minutes`);<br>// Output: Total: 10.5 minutes<br>``` |
| **Teaser** | 6:30–7:00 | “You have data—now **show it on the page**. DOM time!” |

---

## Video 5: DOM Manipulation  
**Title:** *“JavaScript DOM: Click a Button, Change the Page (Live)”*  

| Section | Time | Content |
|---------|------|--------|
| **Hook** | 0:00–0:30 | “Your page is static. Let’s make it **react** to clicks—live!” |
| **Core Concept** | 0:30–2:00 | “DOM = JS’s map of HTML.” <br> - `querySelector` <br> - `textContent` / `style` <br> - `addEventListener` |
| **Live Demo** | 2:00–4:30 | ```html<br><button id="btn">Click</button><button id="reset">Reset</button><p id="out">Waiting...</p><br>```<br>```js<br>let count = 0;<br>document.querySelector('#btn').addEventListener('click', () => {<br>  count++;<br>  const out = document.querySelector('#out');<br>  out.textContent = `Clicked ${count} time${count>1?'s':''}!`;<br>  out.style.color = count % 2 ? 'blue' : 'red';<br>});<br>document.querySelector('#reset').addEventListener('click', () => count = 0);<br>``` |
| **Common Hangups** | 4:30–5:30 | 1. **Script before HTML** → `null` <br> 2. **`DOMContentLoaded`** needed <br> 3. `style.background-color` → must be `backgroundColor` <br> 4. `innerHTML` XSS risk |
| **Mini-Challenge** | 5:30–6:15 | **Pause:** Add a **reset button** that sets count to 0 and text to “Waiting...”. |
| **SOLUTION** | 6:15–6:30 | ```js<br>document.querySelector('#reset').addEventListener('click', () => {<br>  count = 0;<br>  document.querySelector('#out').textContent = 'Waiting...';<br>  document.querySelector('#out').style.color = 'black';<br>});<br>``` |
| **Teaser** | 6:30–7:00 | “Clicks work—now **fetch real data** without freezing. Async awaits!” |

---

## Video 6: Asynchronous JavaScript (Promises & async/await)  
**Title:** *“JavaScript Async: Fetch Data Without Freezing Your App”*  

| Section | Time | Content |
|---------|------|--------|
| **Hook** | 0:00–0:30 | “Click → 3-second freeze. Let’s fix that **forever**.” |
| **Core Concept** | 0:30–2:00 | “Async = do other things while waiting.” <br> - Callbacks → Promises → `async/await` <br> - `fetch`, `await`, `.json()` |
| **Live Demo** | 2:00–4:30 | ```html<br><button id="fetch">Joke!</button><p id="joke">Waiting...</p><br>```<br>```js<br>document.querySelector('#fetch').addEventListener('click', async () => {<br>  const el = document.querySelector('#joke');<br>  el.textContent = 'Loading...';<br>  try {<br>    const res = await fetch('https://official-joke-api.appspot.com/random_joke');<br>    const data = await res.json();<br>    el.textContent = `${data.setup} ... ${data.punchline} 😂`;<br>  } catch {<br>    el.textContent = 'Failed 😢';<br>  }<br>});<br>``` |
| **Common Hangups** | 4:30–5:30 | 1. **Forgetting `await`** → returns Promise <br> 2. **No `try/catch`** → unhandled rejection <br> 3. **Mixing `.then()` and `await`** → confusion <br> 4. **CORS errors** (use public APIs) |
| **Mini-Challenge** | 5:30–6:15 | **Pause:** Fetch a **random dog image** from `https://dog.ceo/api/breeds/image/random` and show in `<img id="dog">`. |
| **SOLUTION** | 6:15–6:30 | ```html<br><img id="dog" src="" alt="Random Dog" width="300"><br>```<br>```js<br>document.querySelector('#fetch').addEventListener('click', async () => {<br>  const img = document.querySelector('#dog');<br>  img.src = '';<br>  try {<br>    const res = await fetch('https://dog.ceo/api/breeds/image/random');<br>    const data = await res.json();<br>    img.src = data.message;<br>  } catch {<br>    img.alt = 'Failed to load dog 😢';<br>  }<br>});<br>``` |
| **Series Close** | 6:30–7:00 | “You’ve built a **full interactive app**! Combine all 6 → make a **Todo + API Dashboard**. Drop your project in comments—I’ll feature it!” |

---

**End of File**  
*Last updated: November 15, 2025 – 05:11 PM EST*
