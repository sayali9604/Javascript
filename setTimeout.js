// //in this ex. the function forms a closure with i and makes the reference 
// function x(){
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
// console.log("hey sayali")
// }
// x();

//example 2 o/p will be 6 because of closure
//here it rememebers the reference to 'i' notvalue of 'i'

//to get the output we want we can use here 'let' because it has block scope.
//because of let each and every time this settimeout function is called.func. forms
//closure with its new variable.
// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function (){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log ("hey Sayali");
// }
// x();
//if interviewer ask you have to this using 'var' again closure will help u.
//here it will work because will make closure and every time give another reference to it
function x(){
    for(let i=1; i<=5; i++){
       function close(x){
         setTimeout(function (){
            console.log(x);
        }, x*1000);
       } 
       close(i);
       
    }
    console.log ("hey Sayali");
}
x();
