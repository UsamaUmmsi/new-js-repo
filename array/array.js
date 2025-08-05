// const myArray  = ["usama", "khan", "dg"]

// // console.log(myArray[2]);

// const myArray2 = new Array(1,2,3,4,5,6,7,8,9,10)
// // console.log(myArray2[2]);

// // Shallow Copy
// // Shallow copy ka matlab hai ke object ki sirf upar wali (top-level) properties copy hoti hain. Agar koi property
// // object ya array ho (nested ho), to reference hi copy hota hai, actual data nahi.



// // Deep Copy


// // array push[]
// // .push() use hota hai add karne k liye 
// // .pop() use hota akhri value remove karne k liye  

// // myArray2.push(11)
// // myArray2.pop(12)
// // myArray2.push(12)

// // // myArray2.unshift(15)
// // myArray2.shift()


// // console.log(myArray2);

// // myArray2.includes()
// // const newArry = myArray2.join() 

// // console.log(myArray2.includes(5));
// // console.log(myArray2.indexOf(5));
// // console.log(newArry);


// // // slice , splice


// // const myAar = myArray2.slice( 1 , 3)

// // console.log(myAar);
// // console.log("B", myArray2);


// const marHero = ["thor" , "ironman" , "spiderman"]
// const dcHero = ["superman" , "batman" , "aquaman"]


// // marHero.push(dcHero)
// // console.log(marHero[3][2]);

// // Concat and spread Oprator 

// const newAllHero = marHero.concat(dcHero)

// const allHero = [...marHero , ...dcHero]
// console.log(allHero);
// console.log(newAllHero);


const anotherArray = [ 1 , 2 , 3, 4 , [ 6 , 7 , 8 , 9 ] , 10 , 11 , 12 ,[ , 13 , 14 , 15 , 16 ]]
const real_anotherArray = anotherArray.flat(Infinity)

console.log(real_anotherArray);


Array.isArray("UmmsiKhan")
console.log(Array.isArray("UmmsiKhan"));
console.log(Array.from("UmmsiKhan"));
console.log(Array.from({name:"UmmsiKhan"})); //intrusting 

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3))



