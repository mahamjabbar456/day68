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
export {};
