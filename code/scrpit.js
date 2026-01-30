// let a=10;//global scope
// function test(){
//     let b=20;// functional scpoe
//     if(true){
//         let c=30;// block scope
//     }
//     console.log(b);//20
//     // console.log(c);//error
//     console.log(a);//10
// }
// test();

// if(true){
//     var a=10; //Dangerous in real life project, accessible outside
//     let b=20  
//     const c=30;
// }
// console.log(a);//10
// console.log(b);// Error b undefined
// console.log(c);// Error c 

// <----------------------------------------------Practicee------------------------------------------------>
// q1
// var a=10;
// console.log(a); //10
// var a=20;
// console.log(a); //20


//q2.1
// function test(){
//     let x=100;
//     console.log(x); //100
// }
// test();
// console.log(x+10);// Error

//q2.2
// function test(){
//     var x=100;
//     console.log(x); //100
// }
// test();
// console.log(x+10);// Error


//q3.1
// if(true){
//     let ss="active";
//     console.log(ss); // active
// }
// console.log(ss); // error

//q3.1
// if(true){
//    var ss="active";
//     console.log(ss); // active
// }
// console.log(ss); // acitve


//q4.1
// for(let i=0;i<3;i++){
//     console.log("Inside loop",i); // 0 1 2
// }
// console.log("Outside loop",i); // error

 //q4.2
// for(var i=0;i<3;i++){
//     console.log("Inside loop",i); // 0 1 2
// }
// console.log("Outside loop",i); // 3


//q5.1
// let value=10; //Global scope
// function display(){
//     let value=20;
//     console.log(value);
// }
// display();
// console.log(value);

//q5.2
// var value1=10;
// function display(){
//     var value1=20;
//     console.log(value1);
// }
// display();
// console.log(value1);


//q6.1
// let x=10;
// function outer(){
//     let y=20;
//     function inner(){
//         let z=30;
//         console.log(x,y,z);
//     }
//     inner();//10 20 30
// }
// outer();

//q7.1
// function a(){
//     console.log("inside",x); //10
// }
// function b(){
//     let x=20;
//      console.log("value of x in fun b",x); //20
//     a();
//     console.log("value of x in fun b again", x); //20
// }

// let x=10;
// b();

//q7.2
// function a(){
//     console.log("inside",x); //10
// }
// function b(){
//     var x=20;
//      console.log("value of x in fun b",x); //20
//     a();
//     console.log("value of x in fun b again", x); //20
// }
// b();
// var x=10;


//q8.1
// let x=1;
// console.log("123 global Before",x); //1
// function outer(){
     
//     let x=2;
//     console.log("136 outer before",x);//2
    
//     function inner(){
//         console.log("140 inner before", x) //2
//         x=3;
//         console.log("142 inner after",x); //3
//     }
//     inner();
//     console.log("145 outer after",x); //3
// }
// outer();
// console.log("Global after", x); //1

//<-------------------------------12-Jan-2026---------------------------------Practicee------------------------------------------------------->
// greet(7); // hoisted function in js
// function greet (a){
//     console.log("PARAMETER",a)
//     return "Function greet called";
// }
// // console.log(a) //"Function greet called
// // let a=greet(7); //

// // greet(); // parameter undeifined
// greet(9,"BC") // PARAMETER 9


function calculateFinalAmount(quantity) {
    var pricePerItem = 500;
    var totalPrice = quantity * pricePerItem;

    // Apply 10% discount if quantity >= 10
    if (quantity >= 10) {
        totalPrice = totalPrice - (totalPrice * 0.10);
    }

    // Apply 18% tax after discount
    var finalAmount = totalPrice + (totalPrice * 0.18);

    return finalAmount;
    
} 

