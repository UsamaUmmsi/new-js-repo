// Object ko declear karne ke do tarike hain 

// ek singletone yeh apni jagha ka ek hi object hai 

// litel ki tarha karaain ge to wo singleton nahi bane ga 

// constructor se bane ga to wo singletone
//  object.create singleton

// interviewer object 

const mySym = Symbol("key1")
// objetc literals
 const  jsuser = {
  name : "Ummsi",
  "full Name" : "Usama Khan",
  age : 30,
  [mySym] : "myKey1",
  location : "Karchi",
  email : "example.com",
  isloggedin : true,
  lastloginDays :["monday","saturday"],
 }
 jsuser.email = "chatgpt@gmail.com",

//  Object.freeze(jsuser)

 console.log(jsuser["full Name"]);
 console.log(jsuser [mySym]);
 
 console.log(jsuser);


 jsuser.greeting = function(){
    console.log("Hello JS User");
 }
//  backtik ``main convert karne ko kehte hain string interpolation

 jsuser.greetingTwo = function(){
    console.log(`Hello JS User,${this["full Name"]}`);
 }
 console.log(jsuser.greeting());
 console.log(jsuser.greetingTwo());


//  Square notation kuch special case mai hum use karte hain square wese ziyadatar use hot ahai . dot notation 
 






 