# Video 5: Objects & Arrays

**Title:** "JavaScript Objects & Arrays: Store Real-World Data Like a Pro"
**Duration:** 5-7 minutes

---

## [0:00-0:30] HOOK

"Variables hold one thing. But in the real world, you need to store multiple pieces of related information together. That's where objects and arrays come in. Objects hold everything about one thing—like all the info about a user. Arrays hold lists of things—like a playlist of songs. Today, we'll learn how to create them, manipulate them, and use powerful methods that make working with data actually fun. Let's go!"

---

## [0:30-2:00] CORE CONCEPT

"Objects are like labeled drawers. You store things with names—those are called keys. The things you store are called values. Together, they're key-value pairs. Think of a filing cabinet where each drawer has a label, and inside is the information.

Arrays are like numbered lists. You store things in order, starting at index 0. Think of it like a row of boxes, numbered 0, 1, 2, 3, and so on.

Objects use curly braces `{}` and store data as `key: value` pairs. Arrays use square brackets `[]` and store items in order.

Arrays come with powerful methods built-in. `push` adds to the end. `pop` removes from the end. `map` transforms each item. `filter` keeps only items that match a condition. `reduce` combines all items into one value. These methods make working with arrays incredibly powerful.

Here's the one-line summary: Objects are labeled drawers, arrays are numbered lists."

---

## [2:00-4:30] LIVE DEMO

"Let's see this in action. I'll open my console.

[Type in console]

```javascript
const song = {
  title: "Song 1",
  artist: "A",
  duration: 180,
};
```

This is an object. `title`, `artist`, and `duration` are the keys. "Key" and "property" are effectively synonymous. 'Song 1', 'A', and 180 are the values. To access them, I use dot notation:

[Type]

```javascript
console.log("Song title:", song.title);
console.log("Artist:", song.artist);
console.log("Duration:", song.duration, "seconds");
```

Now let's create an array:

[Type]

```javascript
const playlist = [song];
console.log("Playlist:", playlist);
```

I started with one song. Now let's add another:

[Type]

```javascript
playlist.push({
  title: "Song 2",
  artist: "B",
  duration: 220,
});
console.log("Playlist after push:", playlist);
```

`push` adds to the end of the array. Now I have two songs.

Let's access items by index:

[Type]

```javascript
console.log("First song:", playlist[0].title);
console.log("Second song:", playlist[1].title);
```

Remember, arrays start at index 0, not 1!

Now here's where it gets powerful. Let's calculate the total duration using `reduce`:

[Type]

```javascript
let total = playlist.reduce((sum, s) => sum + s.duration, 0);
console.log("Total duration:", total, "seconds");
```

`reduce` is like squashing an array into a single value. It takes a function that combines items. Here, I'm starting with 0, then for each song, I add its duration to the sum.

Let's also see `map` in action:

[Type]

```javascript
let songTitles = playlist.map((song) => song.title);
console.log("Song titles:", songTitles);
```

`map` transforms each item. Here, I'm extracting just the titles into a new array.

And `filter`:

[Type]

```javascript
let longSongs = playlist.filter((song) => song.duration > 200);
console.log("Songs longer than 200 seconds:", longSongs);
```

`filter` keeps only items that match the condition—songs longer than 200 seconds."

---

## [4:30-5:30] COMMON HANGUPS

"Here's where 90% of newbies trip up:

**Number one: Reference vs value.** When you assign an object or array to a new variable, you're not copying it—you're creating another reference to the same thing. Watch:

[Type]

```javascript
let original = { title: "Original Song" };
let copy = original;
copy.title = "Changed Song";
console.log("Original:", original.title); // 'Changed Song' - original changed too!
```

Both variables point to the same object. To actually copy, use the spread operator:

[Type]

```javascript
let original2 = { title: "Original Song" };
let copy2 = { ...original2 }; // Creates a new object
copy2.title = "Changed Song";
console.log("Original:", original2.title); // 'Original Song' - unchanged!
```

**Number two: Mutating const.** You can't reassign a const, but you can modify its contents:

[Type]

```javascript
const myArray = [1, 2, 3];
// myArray = [4, 5, 6];  // Error: Cannot reassign
myArray.push(4); // This works! You can modify the contents
```

The array itself is constant, but you can change what's inside it.

**Number three: forEach doesn't return.** `forEach` executes a function for each item, but it returns `undefined`. If you need a new array, use `map`:

[Type]

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6] - returns new array
const nothing = numbers.forEach((num) => num * 2); // undefined - doesn't return
```

Use `map` when you need a result, `forEach` when you just need to do something with each item."

---

## [5:30-6:15] MINI-CHALLENGE

"Alright, pause the video and try this. Build a playlist array with 3 song objects. Each song should have a `title` and a `duration` in seconds. Then calculate the total duration and log it in minutes, rounded to 1 decimal place.

Use `reduce` to sum up the durations, then convert seconds to minutes. Give it a shot—pause now!"

---

## [6:15-6:30] SOLUTION

"Here's how I'd do it:

[Type in console]

```javascript
const playlist = [
  { title: "Song A", duration: 210 },
  { title: "Song B", duration: 180 },
  { title: "Song C", duration: 240 },
];
const totalSeconds = playlist.reduce((sum, song) => sum + song.duration, 0);
const totalMinutes = (totalSeconds / 60).toFixed(1);
console.log(`Total: ${totalMinutes} minutes`);
```

Perfect! I create the playlist with 3 songs. I use `reduce` to sum all the durations, starting at 0. Then I divide by 60 to convert seconds to minutes, and use `toFixed(1)` to round to 1 decimal place. The output is: 'Total: 10.5 minutes'

If you got that, you're doing great!"

---

## [6:30-7:00] TEASER

"Now you can store and manipulate data with objects and arrays. But all of this is happening in the console. What if you want to show this data on a webpage? What if you want to make buttons that actually do something when you click them? That's where the DOM comes in. The DOM is JavaScript's way of seeing and changing your HTML page. In the next video, we'll learn how to make your pages interactive. See you there!"
