// Object ko declear karne ke do tarike hain 

// ek singletone yeh apni jagha ka ek hi object hai 

// litrel ki tarha karaain ge to wo singleton nahi bane ga 

// constructor se bane ga to wo singletone
//  object.create singleton

// interviewer object 

// const mySym = Symbol("key1")
// // objetc literals
//  const  jsuser = {
//   name : "Ummsi",
//   "full Name" : "Usama Khan",
//   age : 30,
//   [mySym] : "myKey1",
//   location : "Karchi",
//   email : "example.com",
//   isloggedin : true,
//   lastloginDays :["monday","saturday"],
//  }
//  jsuser.email = "chatgpt@gmail.com",

//  Object.freeze(jsuser)

//  console.log(jsuser["full Name"]);
//  console.log(jsuser [mySym]);
 
//  console.log(jsuser);


//  jsuser.greeting = function(){
//     console.log("Hello JS User");
//  }
// //  backtik ``main convert karne ko kehte hain string interpolation

//  jsuser.greetingTwo = function(){
//     console.log(`Hello JS User,${this["full Name"]}`);
//  }
//  console.log(jsuser.greeting());
//  console.log(jsuser.greetingTwo());


//  Square notation kuch special case mai hum use karte hain square wese ziyadatar use hot ahai . dot notation 
 


// const mySym = Symbol("key1")
// const jsUser = {
//    name : "Ummsi",
//    "FullName" : 'Usama khan',
//    [mySym] : "myKey1",
//    age: 30,
//    email: "ummsi@gmail.com",
//    location : "Karachi",
//    idloggedIn: true,
//    lastloginDys : ['Saturday','Sunday'],
//   [Symbol("key1")]: "mykey1"
// }

// console.log(jsUser.email);
// console.log(jsUser["FullName"]);
// console.log(jsUser.lastloginDys);
// console.log(jsUser[mySym]);
// const mySym = Symbol("key1")
// const jsUser = {
//   name: "Ummsi",
//   Email : "usamakhan@gmail.com",
//   isLoggedIn : true,
//  [mySym] : "key2",
//   age : 38,
//   location : "Karachi",
//   lastLoginDay : ['saturday', 'monday'],
//   [Symbol("key1")]: "mykey1"
// }


// console.log(jsUser);
// console.log(typeof mySym);
// console.log(jsUser[mySym]);


// Object part 2 
// yeh ek Single Tone Object hai 
// Object Constructor (new Object())
// const tinderUser = new Object()


// yeh ek normal obejct hai 
// Object Literal ({})
const tinderUser2 = {}
tinderUser2.id = "1234abc";
tinderUser2.name = "sammy";
tinderUser2.isLoggedIn = false;

// console.log(tinderUser2);
// console.log(tinderUser2,[2]);

const regularUser = {
  email : "ummsikhan@gmail.com",
  Fullname : {
    userFirstName : "Usama",
    userLastName : "Khan", 
  }
}

console.log(regularUser);
console.log(regularUser.Fullname.userFirstName);

const object1 = {1:"a",2:"b",3:"c"}
const object2 = {4:"d",5:"e",6:"f"}
const object3 = {7:"g",8:"h",9:"i"}

// const object4 = Object.assign({}, object1,object2)


// yeh sab se ziyda use hoga spread kar k 
// Spread operator sabse easy aur modern way hai objects ko merge karne ka.

const object4 = {...object1, ...object2 , ...object3}

// console.log(object4);
// data base se jo data ata hai mostly arraay of object mai ata hai 
const users = [
  {
    id: 1 ,
    email : "Ummsikhan@gmail.com",
  },
  {
    id: 2 ,
    email : "Mohsinekhan@gmail.com",
  },
]

console.log(users[0].email)

console.log(tinderUser2);

// is tarhna se hum is ko array main le ja sakte hain or is per loop laga sakte hian 

// Object Utility Methods

console.log(Object.keys(tinderUser2));

const user = {
  id: 1,
  name: "Usama",
  isLoggedIn: true
};

console.log(Object.keys(user));


for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}


console.log(tinderUser2.hasOwnProperty('isLogged'));









 const newRegularUser = {
  Fullname: {
    id: 123,
    email: "example@gmial.com",
  }
 }

 console.log(newRegularUser.Fullname.id);



 
 const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
const obj3 = {7:"g",8:"h",9:"i"}

const obj4 = {...obj1 , ...obj2, ...obj3}

console.log(obj4);


const users1 = [
  {
    id: 1 ,
    email : "Ummsikhan@gmail.com",
  },
  {
    id: 2 ,
    email : "Mohsinekhan@gmail.com",
  },
]

console.log(users1[1].email);




const user3 = {
  id: 1,
  name: "Usama",
  isLoggedIn: true
};

console.log(Object.keys(user3));
console.log(Object.values(user3));