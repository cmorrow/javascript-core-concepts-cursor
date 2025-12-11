// Global scope: These variables are accessible everywhere.
var globalVar =
  "I'm a global var (function-scoped if inside a function, but global here)";
let globalLet = "I'm a global let (block-scoped, but global here)";
const globalConst = "I'm a global const (block-scoped, but global here)";

const globalVar = "I am Global"; // 🟢 Visible everywhere

function myFunc() {
  const funcVar = "I am Function"; // 🔵 Visible in Func & Block

  if (true) {
    const blockVar = "I am Block"; // 🔴 Visible ONLY here

    // ✅ SUCCESS: Inner can see Outer
    console.log(globalVar + funcVar + blockVar);
  }

  // ❌ ERROR: Outer cannot see Inner
  console.log(blockVar); // ReferenceError
}

// other blocks that create scope: if, for, while, switch, try-catch, etc.

/* Best practice: 
   Use let/const over var to avoid unexpected scope issues. Prefer const for values that don't change. 
*/
