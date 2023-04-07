



/* 
    case sensitivity in object keys. 
*/
let obj = {
    name: "Ram",
    Name: "shyam"
}
obj.name = "John"
obj.Name = "Doe"

console.log(obj.name); // what will it print
console.log(obj.Name); // what will it print

/* 
    what if we want to  change the value of our keys. 
*/

/* TODO: code here */
console.log("name is", obj.name,obj.Name);  // should print name is John Doe



