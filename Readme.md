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
It is a function along with its lexical scope is known as closures.
Functions can access variables that are defined in the same scope or outer scopes — but not in inner scopes.
Lexical Scope:"A variable can be accessed based on where it was declared in the code."

A function that remembers variables from its outer (parent) scope, even after the outer function has finished running.
# real life example
🧁 Think of a bakery:
You (outer function) bake a cake and give it to your friend (inner function).

You go home — you're done!

But your friend (inner function) still has the cake — even though you're gone!
✅ Why Do We Need Closures?
Closures are useful for:

Data hiding (private variables)

Creating functions with preset data

Callback or event handler functions

Maintaining state between function calls
Uses of Closures:
-Module Design Pattern
-Currying
-Functions like once
-memoize
-maintaining state in asynce world
-setTimeouts
-Iterators

# Js interview questions
example of closure 
function outer(){
  var a = 10;
  function inner(){
    console.log(a);
  }
}
In above ex. function have lexical environment outer function that's the closure.

# Q2:if the outer function is nested inside another function so what will happen ?so inner funcn has access to that environment/ function also .
//here output will be 10 "hey sayali" 20

function outest(){
  var c =20;
  function outer(b){
    function inner(){
      console.log(a,b,c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
var close = outest()("hey sayali");
close();

# Q3 :if we have the same name conflict variable like let is again at outest side what will happen.
//here it will again print beacause it forms closure with inner first,then outer and after that outest..like this hierarchy..
and if the a is not given in scope chain it will give the reference error that 'a' is not defined.
function outest(){
  var c =20;
  function outer(b){
    function inner(){
      console.log(a,b,c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("hey sayali");
close();

# Q4 Advanteges of closures:
closures also helps in data hiding and encapsulation.
# Q5 what do mean by data hiding and encapsulation
if have variable and we want the data privacy and function and other piece of code can not have access to this particular data 
ex.1 
function counter(){
  var count = 0;
  return  function incrementCounter(){
    count++;
  }
}
here if want to access count ..we cant because we wrap is inside another function now it's hidden which we used closure here ..
# constructor in javascript?.
# Disadvantages of closures
-overconsumption of memory
-closed over variables are not garbage colleccted it accumulates the memory.it can also leads to memory leaks.
 
# what garbage collector
it is like program in js memory or browser engine
which free up the un-utilise memory.
# what is relation between garbage collection and closures?
if we form lots of closure it will not be collected as garbage



