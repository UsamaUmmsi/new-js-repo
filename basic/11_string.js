const name = "Ummsi"
const repoCount = 100



// yeh purana ho chuka haio 
console.log(name + repoCount + "Value");

// modren usage is mian hum use karte hain `` string manupulation

console.log(`my name is ${name} and my repo is ${repoCount}`);
 
// yeh string object hai 
// yeh key pair hai 0 key or num pair yeh string k method hain 

const newGame = new String ("Ummsi")
 // hum console mian [0];
console.log(newGame[0]);
// yeh ek syntax hia yeh ek object hia 
console.log(newGame.__proto__);
// yeh string ki length maloom karne ke liye hia 
console.log(newGame.length);
// yeh capital karne k liye hia 
console.log(newGame.toUpperCase());
// yeh ki c bhi string ki position maloom karne k liye hia 
console.log(newGame.charAt(2));
// yeh number k liye hia 
console.log(newGame.indexOf("s"));


const newString = newGame.substring(0 , 2)
console.log(newString);

// slice -nagitive value bhi le sakt hai or positive bhi 
// yeh apse 2 argument leta hai start or end 
const anotherString = newGame.slice(0, 4)
const anotherGame = newGame.slice(0, -5)
console.log(anotherString)
console.log(anotherGame)

const newAnotherGame = " UmmSi-uk-com "
console.log(newAnotherGame);

// Trim apke starting space or end space ko khatm kar detahai 
console.log(newAnotherGame.trim());


// replace metheod is k zariye hum space khatam kar sakte hain 


const usama = "UMMSI"

const url = "https://usamakhan.com/ummsi%20khan"
console.log(url.replace("%20", "-"))
console.log(usama.replace("space", ""))
// Includes se check ho sakta hai k yeh value hai ya nahi true or false main 
console.log(usama.includes('khan'));

console.log(usama.includes('MSI'));

// split se ap spretor array hain 

console.log(newAnotherGame.split("-"));

