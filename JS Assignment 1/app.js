//  ------------------------------------------  MATH EXPRESSIUONS  ---------------------------------------------- //


//Q1
// num1=13
// num2=9
// sum=num1+num2
// 
// document.write(`Sum of ${num1} and ${num2} is ${sum}`)

//Q2
// var num1=+prompt(`ENETR NUM 1`)
// var num2=+prompt(`ENETR NUM 2`)
 
// addition=num1+num2
// subtraction=num1-num2
// multiplication=num1*num2
// division=num1/num2
// modulus=num1%num2

// document.write(`Addistion of ${num1} and ${num2} is ${addition} <br>`)
// document.write(`Subtraction ${num1} and ${num2} is ${subtraction} <br>`)
// document.write(`Multiplication of ${num1} and ${num2} is ${multiplication} <br>`)
// document.write(`Division of ${num1} and ${num2} is ${division} <br>`)
// document.write(`Modulus of ${num1} and ${num2} is ${modulus} <br>`)

//Q4
// var tickets = +prompt("Enter the number of tickets:")
// var price = tickets * 600

// document.write(`Total cost of ${tickets} tickests is ${price}`)

//Q5
//var num = +prompt(`Enter a number:`)

// for(let i=1 ;i<=10 ; i++){
//     document.write(`${num} x  ${i} = ${num*i}<br>`)
// }

//Q6
// var num=prompt(`ENTER A VALUE YOU WANT TO CONVERT INTO FERINHEIHGT:`)

// var convertor =(num*9/5)+32
// document.write(`${num}C is ${convertor}F`)

//Q7
// var q1=+prompt(`Enter quantity of item 1:`)
// var q2=+prompt(`Enter quantity of item 2:`)

// var item1 = 560
// var item2 =  200
 
// var shipcharges = 150
// document.write(`Price of item 1 is ${item1}<br>`)
// document.write(`Price of item 2 is ${item2}<br>`)
// document.write(`Quantity of item 1 is ${q1}<br>`)
// document.write(`Quantity of item 2 is ${q2}<br>`)

// var calculator= item1*q1 +item2*q2 +shipcharges

// document.write(`Total cost of your order is ${calculator}<br>`)

//Q8
// var om=+prompt(`ENTER YOUR MARKS:`)
// var tm=+prompt(`ENTER Total MARKS:`)

// var result=  om/tm*100
// document.write(`Obtain Marks is ${om}<br>`)
// document.write(`Total Marks is ${tm}<br>`)
// document.write(`Percentage is ${result}%`)

//Q9

// var usDollars = 10;
// var saudiRiyals = 25;
// var usdToPkrRate = 104;
// var sarToPkrRate = 28;

// var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);
// document.write(`Total amount in Pakistani Rupees: ${totalPkr}`);

//Q11
// var birthdate=+prompt(`ENTER BIRTH YEAR:`)
// var currentyear=+prompt(`ENTER CURRENT YEAR:`)

// var age=currentyear-birthdate

// document.write(`Birth year :${birthdate}<br>`)
// document.write(`Current year :${currentyear}<br>`)
// document.write(`Your age is :${age}`)

//Q12
// var radius=prompt(`ENTER A RADIUS:`)
// var pi=3.142
// var calcCircumference= 2*pi*radius
// var calcArea= pi*radius*radius

// document.write(`Radius is ${radius}<br>`)
// document.write(`Circumference is ${calcCircumference}<br>`)
// document.write(`Area is ${calcArea}`)

//Q13
// var num = +prompt(`ENTER VALUE OF A:`);
// var preincrement = ++num;
// var postincrement = num++;
// var predecrement = --num;
// var postdecrement = num--;

// document.write(`value of ++a is ${preincrement}<br>`);
// document.write(`value of a++ is ${postincrement}<br>`);
// document.write(`value of --a is ${predecrement}<br>`);
// document.write(`value of a-- is ${postdecrement}<br>`);

//Q14
// var a=prompt(`ENTER VALUE OF A:`)
// var b=prompt(`ENTER VALUE OF B:`)

// var eq=--a + --b + b++ + a++
// document.write(`Value a is :${a}<br>`)
// document.write(`Value b is :${b}<br>`)
// document.write(`Equation=--a + --b + b++ + a++ <br>`)
// document.write(`The result of above equation is ${eq} `)


//  ------------------------------------------  variable Name  ---------------------------------------------- //

//Q1
// let x = 10, y = 20, z = 30;

//Q2
// legal
// var name = ali
// var name123 = ali
// var $name = ali
// var _name = ali

//illegal
// var 1name = ali
// var -name = ali
// var na me = ali

//Q3
  // Create heading
//   var heading = document.createElement('h1');
//   heading.textContent = 'Rules for naming JS variables';
//   document.body.appendChild(heading);

  // Create rules
//   var rules = [
//     'Variable names can only contain letters, numbers, underscores, and dollar signs.',
//     'For example $my_1stVariable',
//     'Variables must begin with a letter, underscore, or dollar sign.',
//     'For example $name, _name or name',
//     'Variable names are case-sensitive.',
//     'Variable names should not be JavaScript keywords.'
//   ];

  // Display rules
//   var ruleList = document.createElement('ol');
//   rules.forEach(function(ruleText) {
//     var ruleItem = document.createElement('li');
//     ruleItem.textContent = ruleText;
//     ruleList.appendChild(ruleItem);
//   });
//   document.body.appendChild(ruleList);


//  ------------------------------------------  variable for numbers  ---------------------------------------------- //

//Q1
// var age = 18
// alert(`i am ${age} year old`)

//Q2
// var visitCount = localStorage.getItem('visitCount');

//   // If visitCount doesn't exist, initialize it to 0
//   if (visitCount === null) {
//     visitCount = 0;
//   } else {
//     // If it exists, increment the count
//     visitCount = parseInt(visitCount) + 1;
//   }

//   // Store the updated visitCount in local storage
//   localStorage.setItem('visitCount', visitCount);

//   // Display the visit count on the webpage
//   document.write("You have visited this site " + visitCount + " times.");

//Q3
// var birthYear = 2004; 
// document.write("My birth year is: " + birthYear);

//Q4
// var visitorName = "Daniyal Amjad"; 
// var productTitle = "ZARA"; 
// var quantity = 2; 
// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");

//  ------------------------------------------  Alersts  ---------------------------------------------- //

//Q1
// alert(`WELCOME TO MY WEBSITE`)

//Q2
// var pass =1234
// var password=+prompt(`ENTER PASSWORD:`)

// if(pass==password){
//     alert(`WELCOME TO MY WEBSITE`)
// }
// else{
//     alert(`PLEASE ENTER CORRECT PASSWORD`)
// }


