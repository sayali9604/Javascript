$$$$ variable Hoisting

 The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.
 $$Temporal Zone 
 A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.
 The time between the start of the block and the actual line where the variable is declared is called the Temporal Dead Zone (TDZ).If you try to access the variable during this time, you'll get a ReferenceError.
 Imagine you are watching a play. The script says the actor enters at Scene 2.
If the audience asks, “Where is the actor?” during Scene 1, it’s too early — the actor exists in the script but hasn’t entered yet.
##real life example of temporal zone.
The time before the actor enters is like the TDZ.
You can't "use" the actor (variable) yet, even though they’ve been written into the script.
$$:Literals
Literals represent values in JavaScript.
$$Identifiers :An identifier is a sequence of characters in the code that identifies a variable, function, or property. In most languages, identifiers are case-sensitive 

##Scope:It means where you can access a specific  variables or function in our code..

##Lexical Environment:
whenevr the global execution context is created ,the lexical environment is also created
it is the local memory along with parent lexical environment..
Lexical means in a hierarchy and in a sequence.
lexical parents means where the actual variable is there in that function
The chain of this lexical environment is Scope Chain.

Let & const declarations are hoisted.
Temporal Dead Zone:
it's the time since then the let variable was hoisted and its initialized some values.the time between that is known as temporal dead zone..
whenever we try to access the variable inside the temporal zone it gives us the Referenced Error..
As we have three variable to declare we will use like const. first then let caues it has tempo. dead zone which doesnt cause any unexpected error.
then last option is var..
to avoid temporal dead zone always put initialization and declaration on top..and then do your logics..
##what is block in js?
block is defined by {}these curly braces.it is also known as compund statement,its used  combine multiple javascript statements into multiple grp.
var has global scope..
✅ What is Shadowing?
Shadowing happens when a local variable (inside a block, function, or scope) has the same name as a variable in the outer scope.
➡️ The inner variable “shadows” or hides the outer one, meaning the outer variable can’t be accessed while the inner one exists in that scope.

📌 Why is it called "shadowing"?
Imagine standing under a tree on a sunny day 🌳☀️—the tree blocks the sunlight from hitting you.
Similarly, the inner variable blocks (or shadows) access to the outer variable of the same name.

✅ When is Shadowing Used?
To temporarily override a variable in a smaller scope (like inside a function or block).

To avoid accidental modification of global or outer-scope variables.

Common in functions or loops.

Code:
let name = "Sayali"; // global variable

function greet() {
  let name = "Priya"; // local variable shadows the global one
  console.log("Hello, " + name); // Outputs: Hello, Priya
}

greet();
console.log("Outside function: " + name); // Outputs: Outside function: Sayali

//if we have function scope it behvaes in the same way.
we can shadow let using let but not different variable..

# Closures
It is a function