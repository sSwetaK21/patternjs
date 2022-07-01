//  Qst 1

// let num =5;
// let star ="";
// for(let i=1; i<=num; i++){
//     // star = " ";
//     for(let j=1; j<=num; j++){
//         if(i==j || i+j == num+1){
//             star += "*";
        
//         } else{
//             star += " ";
//         }
//     }
//     star += "\n";
// }

// console.log(star);


// qst 2

// let n = 3;
// let string = "";
// // Upside pyramid
// // upside diamond
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//       string += "*";
//     }
//     else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// // downside diamond
// for (let i = 1; i <= n - 1; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//     string += "\n";
//   }
// console.log(string);


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

// let n=5;
// let count =0;
// let star = "";
// for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//         star = star + `${count}`;
//         count++;
//     }
//     star += "\n";
// }
// console.log(star);