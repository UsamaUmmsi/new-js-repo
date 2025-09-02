// function showString(){
//     console.log('hello world')
//     return 'abdullah'
// }
// // showString()
// var myFunc = showString()
// console.log(myFunc);

// function doubleNumber(num) {
//   return num * 2;
// }
// console.log(doubleNumber(5));

// // function num1 (num){
// // return num * 2
// // }
// // console.log(num1(10));


// // Yeh implecite return hai yeh jab hi kaam karega jab {} nahi honge waran retrun lazmi lage ga 

// // const multiple = num => num * 3;
// // console.log(multiple(5))

// // const doubleNumber = num => num * 2;
// // console.log(doubleNumber(5));

// // function percentageCal(marks1 , marks2 , marks3 , marks4){
// //     var totalMarks =  400;
// //     var obtainedMarks = marks1 + marks2 + marks3 + marks4
// //     var percentage  = (obtainedMarks / totalMarks ) * 100

// // console.log('obtainedMarks', obtainedMarks);
// // console.log('percentage', percentage);

// // if (percentage >= 80){
// //     console.log(' Grade : A+ ');
// // }else if (percentage >= 70 ){
// //     console.log(" Grade : A ");   
// // }else if (percentage >= 60){
// //     console.log(" Grade : B ");
// // }else if (percentage >= 50){
// //     console.log(" Grade : C ")
// // }else if (percentage >= 40){
// //     console.log(" Grade : D ")
// // }else {
// //     console.log("Grade : Fail");
// // }

// // return percentage;
// // }

// // var ummsi = percentageCal (50 , 60, 80 , 90 );

// function percentageCal (marks1, marks2 , marks3 , marks4) {
//     var totalMarks = 400;
//     var obtainedMarks = marks1 + marks2 + marks3 + marks4;
//     var percentage = (obtainedMarks / totalMarks) * 100;

//     console.log('obtainedMarks' ,obtainedMarks);
//     console.log('percentage',percentage);
    

//     if(percentage >= 80){
//         console.log(' Grade : A+');
//     }else if (percentage >= 70) {
//         console.log(" Grade : A "); 
//     }else if (percentage >= 60) {
//         console.log(" Grade : B "); 
//     }else if (percentage >= 50) {
//         console.log(" Grade : C "); 
//     }else if (percentage >= 40){
//         console.log("Grade : D");
//     }else{
//         console.log('Grade : Fail');
//     }
//     return percentage;

// }
// var Ummsi = percentageCal (40 , 50 , 80 , 90)


// function score (player1, player2){
//     console.log(' hello' + player1 + player2 );
//     return ' hello '+ player1;
// }
// var username = score(' Ummsi Khan ')
// console.log("userName =====> " , username);


// var head = document.querySelector('.head');
// head.innerHTML = 'changed through js';



// function greetUser() {
//     console.log(head.innerHTML)
//     if(head.innerHTML === 'Hello world'){
//         head.innerHTML = 'changed through js';
//     }else{
//         head.innerHTML = 'Hello world';
//     }
// }



// // var input = document.querySelector('.input');
// function getInputValue() {
//     console.log(input.value)
// //     input.value = ''
// // }


// function sumNumbers(a, b) {
//     console.log("Sum:", a + b);
// }

// sumNumbers(5, 10); 

// function score ( a , b ){
//     console.log("Sum : " , a + b );
    
// }
// score (50 , 100)



function someNumber( a , b){ 
    console.log( a + b );
}
someNumber(30 , 50)

// Normal Function 

function greet(name){
return`hello, ${name}`;
}
console.log(greet("Usama"));
