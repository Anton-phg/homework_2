// TASK 1+-

// let x = 1;
// let y = 2;

// let res1 = String(x)+String(y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res1);// "12"
// console.log(typeof res1);// "string"

// let res2 = "true" + y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = Boolean(x+y) ;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = x-"y";// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// console.log ("// Допишіть код, необхідно використовувати змінні x і y");
// console.log ('// "12"');
// console.log ('// "string"');
// console.log ("// Допишіть код, необхідно використовувати змінні x і y");
// console.log ('"// "true2""');
// console.log ('// "boolean"');
// console.log ("// Допишіть код, необхідно використовувати змінні x і y");
// console.log ('// NaN');
// console.log ('// "number"');

// TASK2 +

// let userNumber = prompt ("Введіть число", 5);
// let result;
// let resultON7;
// result = userNumber % 2;
// resultON7 = userNumber % 7;
// if (result == 0 && userNumber >= 0){
//     console.log("Парне додатнє число");//умова першої задачі
// } else if (userNumber < 0){
//     console.log("Від'ємне число");
// }
// else{
//     console.log("Непарне число");
// }

// if (resultON7 == 0){
//     console.log("Число кратне 7");//умова другої задачі
// }
// else{
//     console.log("Число не кратне 7");
// }


// TASK 3+

// let arr = [1 ,"La-la-la", true, null];
// alert (arr.length);
// let userNumber = prompt("Введіть будь-яке значення", 5)
// arr [4] = userNumber;
// alert (arr [4]);
// arr.shift();
// alert(arr);

// TASK4

// let cities = ["Rome", "Lviv", "Warsaw"]; // ПЕРШИЙ ВАРІАНТ
// let resultSUMM;
// resultSUMM= '"' + cities[0] + '*' + cities[1] + '*' + cities[2] + '"';
// alert (resultSUMM);

// let cities = ["Rome", "Lviv", "Warsaw"]; // ДРУГИЙ ВАРІАНТ
// for (let i = 0; i < cities.length; i++) {
//      cities[i]+='*';
     
//   }
// alert('"' + cities[0] + cities[1] + cities[2] + '"') 

// let cities = ["Rome", "Lviv", "Warsaw"]; // ТРЕТІЙ ВАРІАНТ (ОСНОВНИЙ)
// let newARRsities =[ '"','"'];

// for (let i = 0; i < (cities.length - 1); i++) {
//      cities[i]+='*'; 
//   }
// for (let i = 0; i < cities.length; i++) {
//     newARRsities [0]+=cities[i];
//  }
//  newARRsities [0]= newARRsities[0]+newARRsities[1];
//  newARRsities.pop();
// alert(newARRsities); 

// TASK5+

// let isAdult = prompt('Вік?', 18);
// if (isAdult  >= 18) { 
//     alert('Ви досягли повнолітнього віку');
// } else if (isAdult <= 0) {
//     alert ('Помилкове значення');
// } 
// else {
//     alert("Ви ще надто молоді");
//   };


//TASK6+

// let sideA = prompt ("Введіть сторону трикутника а=", 3);
// let sideB = prompt ("Введіть сторону трикутника b=", 4);
// let sideC = prompt ("Введіть сторону трикутника c=", 5);

// sideA = Number(sideA);
// sideB = Number(sideB);
// sideC= Number(sideC);

// let semiperimeter;//напівпериметр
// let areaTriangle;//площа трикутника

// semiperimeter = (sideA + sideB + sideC)/2;//визначаємо напівпериметр

// areaTriangle = (semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC) ) ** (1/2);//визначаємо площу за формулою Герона
// areaTriangle = areaTriangle.toFixed(3);

// let  cosA, cosB, cosC, angleA, angleB, angleC;//визначаємо кути
// cosA = (sideB*sideB + sideC*sideC - sideA*sideA) / (2*sideB*sideC);
// cosB = (sideA*sideA + sideC*sideC - sideB*sideB) / (2*sideA*sideC);
// cosC = (sideA*sideA + sideB*sideB - sideC*sideC) / (2*sideA*sideB);

// angleA = Math.acos(cosA) * 180 / Math.PI;
// angleB = Math.acos(cosB) * 180 / Math.PI;
// angleC = Math.acos(cosC) * 180 / Math.PI;
  
// angleA = Math.round(angleA);
// angleB = Math.round(angleB);
// angleC = Math.round(angleC);


// if ((sideA > 0)&&(sideB> 0)&&(sideC > 0)){//перевіряємо умову завдання
//     // alert(`a=${sideA}, b=${sideB}, c=${sideC}`);//Видаємо результати обчислення площі
//     // alert(`напівпериметер дорівнює (a+b+c)/2=(${sideA}+${sideB}+${sideC})/2=${semiperimeter}`);
//     // alert(`Площа трикутника дорівнює (за формулою Герона)
//     //      √p(p - a)(p - b)(p - c)=√${semiperimeter}(${semiperimeter}-${sideA}(${semiperimeter}-${sideB}(${semiperimeter}-${sideC})=${areaTriangle} cm квадратних`)

//     console.log(`a=${sideA}, b=${sideB}, c=${sideC}.
//     Площа трикутника дорівнює (за формулою Герона)
//     √p(p - a)(p - b)(p - c)=√${semiperimeter}(${semiperimeter}-${sideA}(${semiperimeter}-${sideB}(${semiperimeter}-${sideC})=${areaTriangle} cm квадратних`)
    
//     // alert (`сторона а=${sideA}, сторона b=${sideB}, сторона c=${sideC}
//     //     кут а=${angleA}, кут b=${angleB}, кут c=${angleC}`)//Видаємо результати обчислення кутів 
//     console.log(`сторона а=${sideA}, сторона b=${sideB}, сторона c=${sideC}
//         кут а=${angleA}, кут b=${angleB}, кут c=${angleC}`) 

//         if ((angleA == 90)||(angleB == 90)||(angleC == 90)){//перевіряємо умову прямокутного трикутника
//             // alert('Прямокутний трикутник');
//             console.log('Прямокутний трикутник');
//         } else {
//             // alert('НЕпрямокутний трикутник');
//             console.log('НЕпрямокутний трикутник');
//         }

// } else {//Перевіряємо коректність вводимих даних
//     // alert("Incorrect data");
//     console.log ("Incorrect data");
// }


// TASK7 +

// let now = new Date();
// let time;
// alert( now ); // показує поточну дату/час
// alert( now.getHours() );
// time = now.getHours();

// if ((time>=23) && (time<5)){//перший спосіб
//         alert("Доброї ночі");
// } else if((time>=5) && (time<11)){
//     alert("Доброго ранку");
// } else if((time>=11) && (time<17)){
//     alert("Доброго дня");
// } else {
//     alert("Доброго вечора");
// }

// alert(time)//другий спосіб
// time = ((time>=23) && (time<5)) ? alert("Доброї ночі"):
//        ((time>=5) && (time<11)) ? alert("Доброго ранку"):
//        ((time>=11) && (time<17)) ? alert("Доброго дня"):
//        alert("Доброго вечора");









