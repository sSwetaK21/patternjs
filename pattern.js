//  Qst 1

let num =5;
let star ="";
for(let i=1; i<=num; i++){
    // star = " ";
    for(let j=1; j<=num; j++){
        if(i==j || i+j == num+1){
            star += "*";
        
        } else{
            star += " ";
        }
    }
    star += "\n";
}

console.log(star);


// Qst 3

// let row =5;
// let count=1;
// for(let i=1; i<=row; i++){
//   let star = '';
//   for( let j=1; j<=i; j++){
//     star = star + ` ${count}`;
//     count =count + 1;
//   }
//   console.log(star);
// }


//Qst 4

// let row =5;
// let num1 = 0;
// let num2 = 1;
// for(let i=1; i<=row; i++){
//   let star = '';
//   for( let j=1; j<=i; j++){
//     star = star + ` ${num1}`;
//     let swap = num1 + num2;
//     num1 = num2;
//     num2 = swap;
//   }
//   console.log(star);
// }


//Qst 5

