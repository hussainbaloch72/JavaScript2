// Chapter 4
// Q1
// var a=20 , b=30 , c=50
// Q2
// legal variable name
// var firstname=hussain
// var lastname=hussain
// var userage=19
// var $Qualification=Bcsc
// var camelcase=hussainBaloch

// illegal variable name
// var 2ndname
// var first name
// var first-name
// var variable+name
// var @ge
// Q3a
// document.write("<h1>Rules for naming JS variables</h1>") 
// // Q3b
// var number="number"
// var sign="$"
// var fullstop="."
// var underscore="_"
// document.write("Variable names can only contain" ," ",number,"," ,sign ," ","and" , underscore, " ",fullstop," For example $my_1stVariable","</br>")
// // Q3c
// var letter="letter"
// var sign="$"
// var underscore="_"
// document.write("Variables must begin with a", " ",letter,",",sign," ","or"," ",underscore,".","For example $name, _name or name","</br>")
// // Q3d
// var sensitive= "sensitive"
// document.write("Variable names are case"," ",sensitive,"</br>")
// // Q3e
// var Keywords= "Keywords"
// document.write("Variable names should not be JS"," " ,Keywords,"</br>")
// Chapter 4 ends
// Chapter 5 start
// // Q1
// var sum=3+5
// document.write("Sum of 3 and 5 is"," ", sum,"</br>")
// // Q2
// var sum=5-3
// document.write("Sum of 5 and 3 is"," ", sum,"</br>")
// // Q2b
// var sum=3*5
// document.write(" 3 into 5 is"," ", sum,"</br>")
// // Q2c
// var sum=15/5
// document.write(" 5 divided by 15 is"," ", sum,"</br>")
// Q3a
// var myVariable;
// // Q3b
// document.write("Value after variable declaration is: " + myVariable + "<br>");
// //  Q3c
// myVariable = 5;
//  // Q3d
// document.write("Initial value: " + myVariable + "<br>");
//  // Q3e
// myVariable++;
//  // Q3f
// document.write("Value after increment is: " + myVariable + "<br>");
// // Q3g
// myVariable += 7;
// // Q3h
// document.write("Value after adding 7 is: " + myVariable + "<br>");
// // Q3i
// myVariable--;
// // Q3j
// document.write("Value after decrement is: " + myVariable + "<br>");
// // Q3k
// var remainder = myVariable % 3;
// // Q3L
// document.write("The remainder is: " + remainder + "<br>");
// // Q4
// var ticketPrice = 600; 
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("The cost of buying " + numberOfTickets + " movie tickets is " + totalCost + " PKR.");
// Q5
// document.write("<h1>TABLE OF 5</h1>")
// var number=5*1
// var number2=5*2
// var number3=5*3
// var number4=5*4
// var number5=5*5
// var number6=5*6
// var number7=5*7
// var number8=5*8
// var number9=5*9
// var number10=5*10
// document.write("5*1=",number,"</br>","5*2=",number2,"</br>","5*3=",number3,"</br>","5*4=",number4,"</br>","5*5=",number5,"</br>","5*6=",number6,"</br>","5*7=",number7,"</br>","5*8=",number8,"</br>","5*9=",number9,"</br>","5*10=",number10,"</br>",)
// Q6a
// var celsiusTemperature = 30;
// // Q6b
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }
// var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");
// // Q6c
// var fahrenheitTemperature = 86;
// // Q6d
// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }
// var fahrenheitTemperature = 86; // Fahrenheit temperature
// var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
// document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");
// Q7a
// document.write("<h1>Shopping Cart</h1>")
// var priceItem1 = 25; 
// var priceItem2 = 30; 
// var quantityItem1 = 2; 
// var quantityItem2 = 1; 
// var shippingCharges = 5; 


// var totalItem1Cost = priceItem1 * quantityItem1;
// var totalItem2Cost = priceItem2 * quantityItem2;
// var totalCostOfItems = totalItem1Cost + totalItem2Cost;
// var totalCostWithShipping = totalCostOfItems + shippingCharges;


// document.write("Price of Item 1: $" + priceItem1,"</br>");
// document.write("Price of Item 2: $" + priceItem2,"</br>");
// document.write("Ordered Quantity of Item 1: " + quantityItem1,"</br>");
// document.write("Ordered Quantity of Item 2: " + quantityItem2,"</br>");
// document.write("Shipping Charges: $" + shippingCharges),"</br>";
// document.write("Total Cost of Item 1: $" + totalItem1Cost,"</br>");
// document.write("Total Cost of Item 2: $" + totalItem2Cost,"</br>");
// document.write("Total Cost of Items: $" + totalCostOfItems,"</br>");
// document.write("Total Cost with Shipping: $" + totalCostWithShipping,"</br>");
// Q8
// document.write("<h1>Marks Sheet</h1>")
// var totalmarks=980
// var marksobtained=804
// var percentage=marksobtained/totalmarks*100
// document.write("Total Marks:",totalmarks,"</br>","Marks Obtained:",marksobtained,"</br>","Percentage:",percentage)
// Q9
// document.write("<h1>Currency in PKR</h1>")
// var usDollars = 10;
// var saudiRiyals = 25;
// var usdToPkrRate = 104.80;
// var sarToPkrRate = 28;
// var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);
// document.write("Total amount in Pakistani Rupees: " + totalPkr + " PKR");
// Q10
// var initialNumber = 10;
// var result = (((initialNumber + 5) * 10) / 2);
// document.write("Result: " + result);
// Q11
// document.write("<h1>Age Calculator</h1>")
// var currentYear=2016
// var birthYear = 1992;
// var Age=currentYear-birthYear
// document.write("Current year:",currentYear ,"<br>","Birthyear:",birthYear,"<br>","Your age is:",Age)
// Q12
// document.write("<h1>The Geometrizer</h1>")
// var radius=20
// var circumference=2*3.142*20
// var Area=3.142*400
// document.write("Radius of a Circle:",radius ,"<br>"," The circumference is:",circumference,"<br>","The Area is:",Area)
// Q13
// document.write("<h1>The Lifetime Supply Calculator</h1>")
// var Favsnack="Chocolate Chip"
// var Age=15
// var Estimsted=65
// var Amount=3
// document.write("Favourite Snake:",Favsnack,"</br>","Current Age:",Age,"</br>","Estimated Maximum Age:",Estimsted,"</br>","Amount of snake per day:",Amount,"</br>","You will need 150 chocolate chip to last you until the ripe old age of 65")
// Chapter 5 end
// Chapter 6 start
// Q1
// let a = 10;
// document.write("The value of a is: " + a,"</br>");

// a++;
// document.write("The value of ++a is: " + a,"</br>");
// document.write("Now the value of a is: " + a,"</br>");

// document.write("The value of a++ is: " + a,"</br>");
// a++;
// document.write("Now the value of a is: " + a,"</br>");

// --a;
// document.write("The value of --a is: " + a,"</br>");
// document.write("Now the value of a is: " + a,"</br>");

// document.write("The value of a-- is: " + a,"</br>");
// a--;
// document.write("Now the value of a is: " + 10,"</br>");
// Q2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;


// document.write("The value of a: " + a,"</br>");
// document.write("The value of b: " + b,"</br>");
// document.write("The result: " + result);
// Q3
// var userName = prompt("Enter your name:");
// alert("Hello, " + userName + "! Nice to meet you.");
// Q4
// const userInput = prompt("Enter an integer:");
// const number = parseInt(userInput);
// const tableNumber = isNaN(number) ? 5 : number;
// document.write(`Multiplication table for ${tableNumber}:`,"</br>");
// for (let i = 1; i <= 10; i++) {
//     const result = i * tableNumber;
//     document.write(`${tableNumber} * ${i} = ${result}`,"</br>");
// }
// Q5a
// const subjects = [
//     { subject: 'English', totalMarks: 100, obtainedMarks: 54, percentage: '54%' },
//     { subject: 'Math', totalMarks: 100, obtainedMarks: 54, percentage: '54%' },
//     { subject: 'Urdu', totalMarks: 100, obtainedMarks: 48, percentage: '48%' }
// ];

// const total = {
//     totalMarks: subjects.reduce((sum, subj) => sum + subj.totalMarks, 0),
//     obtainedMarks: subjects.reduce((sum, subj) => sum + subj.obtainedMarks, 0),
// };

// total.percentage = ((total.obtainedMarks / total.totalMarks) * 100).toFixed(2) + '%';

// console.log('Subjects:', subjects);
// console.log('Total:', total);

// Chapter 6 (Math Expression II)
// Q1
// let x = 10;
// x++; 
// document.write(x);
// Q2
// let x=100
// x = x - 1; 
// document.write(x);
// Q3
// var x = 50; var y = x++;
//  console.log(y) //ans=50
// Q4
// let x = 50;
// const z = --x; // x is now 49, and z is 49
// Q5
// let num = 42;
// let newNum = num--;
// console.log(num)
// Q6
// let originalValue = 42;
// let newValue = originalValue + 1
// console.log(newValue)
// Q7
// let myNumber = 42;
// myNumber++; 
// alert("The new value is: " + myNumber);
// Chapter 6 (Math Expression II) end

// Chapter 7 (Math Expression III) start
// Q1
// var calculatedNum = 2 + (2 * 6);
// // ans=14
// // Q2
// var calculatedNum = (2 + 2) * 6;
// // ans=24
// Q3
// var calculatedNum = (2 + 2) * (4 + 2);
// 2 + 2 equals 4.
// 4 + 2 equals 6
// 4 * 6 = 24
// Q4
// var calculatedNum = ((2 + 2) * 4) + 2;
// 2 + 2 equals 4
// 4: 4 * 4 = 16
// Add 2  16 + 2 = 18
// Q5
// var cost = (2 + 2) * 4 + 10;
//  2 + 2 = 4
// 4: 4 * 4 = 16
// 16 + 10 = 26
// var cost = ((2 + 2) * 4) + 10;
// 2 + 2 = 4.
// 4: 4 * 4 = 16.
//  16 + 10 = 26.
// Q6
// const units = (2 + 2) * 4 + 10;
// console.log(units);
// Q7
// const pressure = (4 / 2) * 4;
// console.log(pressure); 
// Chapter 7 (Math Expression III) ends



// Chapter 8 (Concatenating Text Strings)
// Q1
// var num = "2" + "2";
// console.log(num);
// Q2
//  var message = "hello," + "dolly";
// alert(message)
// Q3
// alert("33" + 3)
// "333"
// Q4
// alert("Pakistan" + " Zindabad");
// Q5
// let concatenated = "String" + 10;
// Q6
// let firstString = "Hello";
// let secondString = " world!";
// let concatenatedString = firstString + secondString;
// alert(concatenatedString);




// Chapter 9 (Prompts) start
// Q1
// let firstName = prompt("Enter first name");
// alert(firstName);

// Q2
// let country = prompt("Country?", "China");
// alert(country);

// Q3
// var yourName = prompt("Enter Your Name");

// Q4
// let userInput = prompt("Please enter your favorite color:", "Blue");
// alert(userInput); 

// Q5
// let message = "Enter your favorite food:";
// let defaultResponse = "Pizza";
// let userResponse = prompt(message, defaultResponse);
// alert(userResponse);

// Q6
// let message = "What is your favorite color?";
// let defaultResponse = "Blue";
// let userResponse = prompt(message, defaultResponse);
// alert("Your favorite color is: " + userResponse);
// Chapter 9 (Prompts) end
