// function a() {
//     console.log(b);
// }
// var b =10;
// a();

//closure example .here it will print 7

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//example 2 here o/p will be 100.
//because its here (a) does not refer to value it is a's reference wich 
//is return. it's function along with refernce to those value.
// function x(){
//     var a= 7;
//     function y(){
//         console.log(a);
//     }
//     a= 100;
//     return y;

// }


//example 3
//here o/p will be 900 and the z form closure with its parents variables
function z(){
    var b = 900;
    function x(){
        var a= 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();




