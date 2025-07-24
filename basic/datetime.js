// ***** Date ******************* 

// const myDate = new Date()
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());

// let createDate = new Date("24-24-2025") 
// const myCreateDate = new Date(2025 , 6 , 24) 
// console.log(CreateDate);
// console.log(CreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());
//  console.log(CreateDate.toDateString());

// ******************TimeStapm****************** 

// let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// // console.log(createDate.getTime());

// console.log(Math.floor(Date.now()/1000));


// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDate()}`

// newDate.toLocaleString("default" , {
//     weekday: "long"
// })


const hour = new Date().getHours();
let greet = "";

if (hour < 12) greet = "Good Morning";
else if (hour < 18) greet = "Good Afternoon";
else greet = "Good Evening";

console.log(greet);
console.log(`Current hour: ${hour}`);
console.log(`Greeting: ${greet}`);




