/**
 * VIDEO 5: Objects & Arrays - Demo Code
 * 
 * Objects are like labeled drawers - you store things with names (keys).
 * Arrays are like numbered lists - you store things in order (by index).
 */

// ============================================
// OBJECTS - Labeled Drawers
// ============================================

// Objects store data as key-value pairs
// Think of keys as labels and values as what's inside

const song = {
    title: 'Song 1',      // "title" is the key, "Song 1" is the value
    artist: 'A',
    duration: 180         // duration in seconds
};

// Access properties using dot notation
console.log('Song title:', song.title);
console.log('Artist:', song.artist);
console.log('Duration:', song.duration, 'seconds');

// Or using bracket notation (useful when key has spaces or is a variable)
console.log('Title (bracket):', song['title']);

// ============================================
// ARRAYS - Numbered Lists
// ============================================

// Arrays store items in order, starting at index 0
// Think of arrays as numbered boxes: [0] [1] [2] [3] ...

const playlist = [song];  // Start with one song
console.log('Playlist:', playlist);

// Add items to array using push()
playlist.push({
    title: 'Song 2',
    artist: 'B',
    duration: 220
});

console.log('Playlist after push:', playlist);

// Access items by index (remember: starts at 0!)
console.log('First song:', playlist[0].title);
console.log('Second song:', playlist[1].title);

// ============================================
// ARRAY METHODS - Powerful Tools
// ============================================

// REDUCE - Combine all items into one value
// Think of reduce as "squashing" an array into a single value
let total = playlist.reduce((sum, s) => sum + s.duration, 0);
// This means: start with 0, then for each song (s), add its duration to the sum
console.log('Total duration:', total, 'seconds');

// MAP - Transform each item
// Think of map as "changing" each item in the array
let songTitles = playlist.map(song => song.title);
console.log('Song titles:', songTitles);

// FILTER - Keep only items that match a condition
// Think of filter as "sifting" - keeping what you want, removing the rest
let longSongs = playlist.filter(song => song.duration > 200);
console.log('Songs longer than 200 seconds:', longSongs);

// PUSH - Add to end of array
playlist.push({ title: 'Song 3', artist: 'C', duration: 195 });
console.log('After adding Song 3:', playlist.length, 'songs');

// POP - Remove from end of array
let lastSong = playlist.pop();
console.log('Removed song:', lastSong.title);
console.log('Playlist now has:', playlist.length, 'songs');

// ============================================
// COMBINING OBJECTS AND ARRAYS
// ============================================

// Arrays can contain objects
const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 28, active: true }
];

// Objects can contain arrays
const user = {
    name: 'Alice',
    hobbies: ['reading', 'coding', 'gaming'],
    scores: [85, 92, 78]
};

console.log('User hobbies:', user.hobbies);
console.log('First hobby:', user.hobbies[0]);

