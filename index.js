/*********
 * TUPLE *
 *********/
// Defining a tuple data type
// We cannot change the sequence of element in tuple data type this will throw error 
// let article:readonly [string,number,null] = [18,"John",null]
let article = ["John", 18, null];
console.log(article);
// We can also access there elements using index.
console.log(article[0]);
// Push method does not apply on tuples this will throw an error
// article.push(100);
// We can also access the element by destructing method
const [name, num, nothing] = article;
console.log(name);
console.log(num);
console.log(nothing);
let Product1 = ["Shirts", 450, 10];
let Product2 = ["Socks", 100, 29];
// Display first product 
const [product, price, Quantity] = Product1;
console.log(`Product name = ${product},Price = ${price},Quantity = ${Quantity}`);
// Display second product 
const displayProduct = (Product) => {
    const [product, price, Quantity] = Product;
    console.log(`Product name = ${product},Price = ${price},Quantity = ${Quantity}`);
};
displayProduct(Product2);
let Subject = [["Math", 30], ["English", 30], ["Science", 40]];
let add = (Subject[0][1] + Subject[1][1] + Subject[2][1]) / 3;
if (add >= 80) {
    console.log(`Grade is A+`);
}
else if (add >= 70 && add <= 79) {
    console.log(`Grade is A`);
}
else if (add >= 60 && add <= 69) {
    console.log(`Grade is B`);
}
else if (add >= 50 && add <= 59) {
    console.log(`Grade is C`);
}
else if (add >= 40 && add <= 49) {
    console.log(`Grade is D`);
}
else {
    console.log(`Grade is F`);
}
let weatherInformation = ["Jhang", 43, "Hot"];
const displayWeather = (weather) => {
    let [city, Temperature, Weather] = weather;
    console.log(`City name is ${city}, Temperature in Celsius is ${Temperature}C, ;Weather Condition is ${Weather}`);
};
displayWeather(weatherInformation);
export {};
