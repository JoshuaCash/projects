// "use strict"

// function preFixSums(arr,k) {
//     let subArrays = 0;

//     const map = {};
//     let currentSum = [];
//     for (let i = 0; i < arr.length; i ++) {
//         if (i === 0) {
//             sums[0] = currentNum;
//         } else {
//             sums[i] = sums[i - 1] + currentNum
//         }
        
//         const currentSum = sums[i];
//         const diffWithK = currentSum - k;
//         if (diffWithK in map) {
//             subArrays += map[diffWithK]
//         }
//         if (currentSum === k) {
//             subArrays++;
//         }
//         if (currentSum in map) {
//             map[currentSum]++;
//         } else {
//             map[currentSum] = 1;
//         }
//     }
// }

// console.log(preFixSums([-1, 1, 4, 5, 7, 8, 10, 9, 5], 5));

// var summation = function (num) {
//     // Code here
//     let count = 0;
//     let map = [];
//     if (num <= 0) return;
    
//     for(let i = 0; i < num; i++) {
//       count++;
//       map = map[i];
//       let currentNum = count;
//       return map[i] - 1 + currentNum;
//     }
//   }

//   console.log(summation(6));

// const fib = (num) => {
//     if (num <= 0) return 1;
//     return fib(num - 1) + fib(num - 2);
// }

// console.log(fib(8));

//Recursion
// const gridTraveler = (m, n) => {
//     if (m === 1 || n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// }


// console.log(gridTraveler(2,2));
// console.log(gridTraveler(2,8));
// console.log(gridTraveler(8,8));
// console.log(gridTraveler(2,2));

//Recursion with Memoization
// const gridTraveler = (m, n, memo = {}) => {
//     const key = m + ',' + n;
//     // are the args in the memo
//     if (key in memo)  return memo[key];
//     if (m === 1 || n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo );
//     return memo[key];
// }


// console.log(gridTraveler(2,2));
// console.log(gridTraveler(2,8));
// console.log(gridTraveler(8,8));
// console.log(gridTraveler(20,20));

// const summation = function (num) {
//     let sum = 0;
//     for (let i = 1; i < num + 1; i++) {
//         sum += i
//     }
//     return sum;       
// }

//  console.log(summation(8));

//  const num = 34;
// const sumation = (num = 1) => {
//    let res = 0;
//    for(let i = 1; i <= num; i++){
//       res += i;
//    };
//    return res;
// };

// console.log(sumation(8))

// function boolToWord( bool ){
//     if (bool === true) {
//       return 'Yes';
//     }
//     if (bool === false) {
//       return 'No';
//     }
//    }

//    console.log((boolToWord(true), 'Yes'))
//    console.log((boolToWord(false), 'No'))


//  const sum = numArray.reduce((sum, numArray) => {
//     console.log(sum);
//     console.log(numArray)
//     return sum + numArray;
// })

// function areYouPlayingBanjo(name) {
//     let anyCase = name.toLowerCase()
//     if (anyCase.indexOf(0) === 'r')  {
//       return `${name} plays banjo`;
//     } else {
//       return `${name} does not play banjo`;
//     };
//   }
//   function areYouPlayingBanjo(name){
//    let firstChar = name[0];
//   if (firstChar == "r" || firstChar == "R"){
//       return name + " plays banjo";
//   } else {

//       return name + " does not play banjo";
//   }
//   }

//   function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }

// console.log((areYouPlayingBanjo("Paul"), "Paul does not play banjo"));
//  console.log((areYouPlayingBanjo("Ringo"), "Ringo plays banjo"));
//  console.log((areYouPlayingBanjo("bravo"), "bravo does not play banjo"));
//  console.log((areYouPlayingBanjo("rolf"), "rolf plays banjo"));
//  console.log((areYouPlayingBanjo("Adam"), "rolf plays banjo"));


//  function getGrade (s1, s2, s3) {
//      let average = (s1 + s2 + s3) / 3;
//     if (average <=100 && average >= 90) {
//         return 'A';
//     }
//     if (average <=90 && average >= 80) {
//         return 'B';
//     }
//     if (average <= 80 && average >= 70) {
//         return 'C';
//     }
//     if (average <=70 && average >= 60) {
//         return 'D'
//     } else {
//         return 'F'
//     }
//   }


//   console.log(getGrade(100,90,99))
//   console.log(getGrade(70,70,70))
//   console.log(getGrade(90,0,0))
//   console.log(getGrade(90,80,99))
//   console.log(getGrade(100,90,99))

// function sumMix(x){
//     let numberX = x.map(Number) 
    
//     return numberX.reduce((a, b) => a + b, 0);
//   }



//   console.log(sumMix([1,2,'4']))
// create a variable to store special characters in a regEX 
// create an if else statement to check is there is a special character

// `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`

// function solve(s){
//   const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
//   let specCounter = 0;
//   let upCounter = 0;
//   let lowCounter = 0;
//   let numCounter = 0;
//   let newArray = [];

  
//     for (let j = 0; j < s.length; j++) {
//       if ((/[A-Z]/.test(s.charAt(j)))) {
//         upCounter++;
//       }
//     }
//     newArray.push(upCounter);

//     for (let j = 0; j < s.length; j++) {
//       if ((/[a-z]/.test(s.charAt(j)))) {
//         lowCounter++;
//       }
//     }
//     newArray.push(lowCounter);

//     for (let j = 0; j < s.length; j++) {
//       if ((/[0-9]/.test(s.charAt(j)))) {
//         numCounter++;
//       }
//     }
//     newArray.push(numCounter);

//   for (let i = 0; i < s.length; i++) {
//     if (specialChar.test(s[i])) {
//       specCounter++;
//     }  
//   }
//   newArray.push(specCounter);
//   return newArray;
// }


// console.log(solve("bLg5-=1++++dP-tLPLw!8y"))


// BEST ANSWER
// const solve = (str) => (
//   [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
// );

// function filter_list(l) {
//   let newList = [];
//   for (e of l) {
//     if(e === Number(e)) {
//       newList.push(e)
//     }
//   }
//   return newList;
// }

// console.log(filter_list([1,2,'aasf','1','123',123]))

// function isTriangle(a,b,c) {
//  return a + b > c && a + c > b && b + c > a ? true : false;
// }

// console.log(isTriangle(1,2,2))
// console.log(isTriangle(7,2,2))

// function findShort(s){
//   let wordArray = s.split(' ');
//   return wordArray.reduce((previous, current) => previous.length <= current.length ? previous : current).length
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// function number(busStops) {
  
// }

const canConstruct = (target, wordBank) => {
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
};

console.log(canConstruct("abcdef", ['ab','abc', 'cd', 'def', 'abcd']));