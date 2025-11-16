/**
 * VIDEO 5: Objects & Arrays - Challenge Solution
 * 
 * CHALLENGE: Build a playlist with 3 songs. Log total duration in minutes.
 */

// ============================================
// SOLUTION
// ============================================

// Create a playlist array with 3 song objects
const playlist = [
    { title: 'Song A', duration: 210 },  // duration in seconds
    { title: 'Song B', duration: 180 },
    { title: 'Song C', duration: 240 }
];

// Calculate total duration in seconds using reduce
// reduce combines all items into one value
// (sum, song) => sum + song.duration means:
// "Start with 0, then for each song, add its duration to the sum"
const totalSeconds = playlist.reduce((sum, song) => sum + song.duration, 0);

// Convert seconds to minutes and round to 1 decimal place
// toFixed(1) rounds to 1 decimal place and returns a string
const totalMinutes = (totalSeconds / 60).toFixed(1);

// Log the result
console.log(`Total: ${totalMinutes} minutes`);
// Output: Total: 10.5 minutes

// ============================================
// ALTERNATIVE SOLUTIONS
// ============================================

// Solution 1: Using a for loop instead of reduce
console.log('\n=== Alternative 1: Using for loop ===');
const playlist1 = [
    { title: 'Song A', duration: 210 },
    { title: 'Song B', duration: 180 },
    { title: 'Song C', duration: 240 }
];

let totalSeconds1 = 0;
for (let i = 0; i < playlist1.length; i++) {
    totalSeconds1 += playlist1[i].duration;  // Add each song's duration
}
const totalMinutes1 = (totalSeconds1 / 60).toFixed(1);
console.log(`Total: ${totalMinutes1} minutes`);

// Solution 2: Using for...of loop
console.log('\n=== Alternative 2: Using for...of ===');
const playlist2 = [
    { title: 'Song A', duration: 210 },
    { title: 'Song B', duration: 180 },
    { title: 'Song C', duration: 240 }
];

let totalSeconds2 = 0;
for (let song of playlist2) {
    totalSeconds2 += song.duration;
}
const totalMinutes2 = (totalSeconds2 / 60).toFixed(1);
console.log(`Total: ${totalMinutes2} minutes`);

// Solution 3: More detailed output
console.log('\n=== Alternative 3: Detailed output ===');
const playlist3 = [
    { title: 'Song A', duration: 210 },
    { title: 'Song B', duration: 180 },
    { title: 'Song C', duration: 240 }
];

const totalSeconds3 = playlist3.reduce((sum, song) => sum + song.duration, 0);
const totalMinutes3 = (totalSeconds3 / 60).toFixed(1);
const hours = Math.floor(totalSeconds3 / 3600);
const remainingMinutes = Math.floor((totalSeconds3 % 3600) / 60);
const remainingSeconds = totalSeconds3 % 60;

console.log(`Total: ${totalMinutes3} minutes`);
console.log(`Or: ${hours}h ${remainingMinutes}m ${remainingSeconds}s`);

// Solution 4: Using a helper function
console.log('\n=== Alternative 4: With helper function ===');
function calculatePlaylistDuration(songs) {
    const totalSeconds = songs.reduce((sum, song) => sum + song.duration, 0);
    return (totalSeconds / 60).toFixed(1);
}

const playlist4 = [
    { title: 'Song A', duration: 210 },
    { title: 'Song B', duration: 180 },
    { title: 'Song C', duration: 240 }
];

const totalMinutes4 = calculatePlaylistDuration(playlist4);
console.log(`Total: ${totalMinutes4} minutes`);

// ============================================
// EXPLANATION OF KEY CONCEPTS
// ============================================

console.log('\n=== Understanding reduce() ===');
// reduce() takes two arguments:
// 1. A function that combines items: (accumulator, currentItem) => newAccumulator
// 2. An initial value (starting point)

// Example: Sum numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
// Step by step:
// Start: total = 0
// num = 1: total = 0 + 1 = 1
// num = 2: total = 1 + 2 = 3
// num = 3: total = 3 + 3 = 6
// num = 4: total = 6 + 4 = 10
// num = 5: total = 10 + 5 = 15
console.log('Sum of [1,2,3,4,5]:', sum);

console.log('\n=== Understanding toFixed() ===');
// toFixed() rounds a number to a specific number of decimal places
// and returns it as a STRING (not a number!)
const pi = 3.14159;
console.log('pi.toFixed(1):', pi.toFixed(1));  // "3.1" (string)
console.log('pi.toFixed(2):', pi.toFixed(2));  // "3.14" (string)
console.log('pi.toFixed(3):', pi.toFixed(3));  // "3.142" (string)

// If you need it as a number, use parseFloat()
const minutes = parseFloat((630 / 60).toFixed(1));
console.log('Minutes as number:', minutes, typeof minutes);

