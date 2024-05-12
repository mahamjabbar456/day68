/*********
 * TUPLE *
 *********/

// Defining a tuple data type
// We cannot change the sequence of element in tuple data type this will throw error 
// let article:readonly [string,number,null] = [18,"John",null]
let article:readonly [string,number,null] = ["John",18,null]

console.log(article);
// We can also access there elements using index.
console.log(article[0]);
// Push method does not apply on tuples this will throw an error
// article.push(100);

// We can also access the element by destructing method
const [name,num,nothing] = article;
console.log(name);
console.log(num);
console.log(nothing);

//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.

type ProductInfo = readonly [string,number,number]
let Product1:ProductInfo = ["Shirts",450,10];
let Product2:ProductInfo = ["Socks",100,29];

// Display first product 
const [product,price,Quantity] = Product1;
console.log(`Product name = ${product},Price = ${price},Quantity = ${Quantity}`);

// Display second product 
const displayProduct = (Product:ProductInfo) =>{
    const [product,price,Quantity] = Product;
    console.log(`Product name = ${product},Price = ${price},Quantity = ${Quantity}`);
}
displayProduct(Product2);

//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.
type SubjectGrade = readonly [string,number]

let Subject:SubjectGrade[] = [["Math",30],["English",30],["Science",40]];
let add = (Subject[0][1] + Subject[1][1] + Subject[2][1])/3;
if(add>=80){
    console.log(`Grade is A+`)
}else if(add>=70 && add<=79){
    console.log(`Grade is A`)
}
else if(add>=60 && add<=69){
    console.log(`Grade is B`)
}
else if(add>=50 && add<=59){
    console.log(`Grade is C`)
}
else if(add>=40 && add<=49){
    console.log(`Grade is D`)
}
else {
    console.log(`Grade is F`);
    
}
//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

type WeatherData = readonly [string,number,string]
let weatherInformation:WeatherData = ["Jhang",43,"Hot"];

const displayWeather = (weather:WeatherData) =>{
    let [city,Temperature,Weather] = weather;
    console.log(`City name is ${city}, Temperature in Celsius is ${Temperature}C, ;Weather Condition is ${Weather}`);
}
displayWeather(weatherInformation);