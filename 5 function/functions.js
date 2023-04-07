

let persons = [
    {
        first_name: "john",
        last_name: "Doe",
        age: 10
    },
    {
        first_name: "Rajesh",
        last_name: "Hamal",
        age: 20
    },
    {
        first_name: "John",
        last_name: "Wick",
        age: 30
    },
]

/* 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick  and age is 30.
*/

console.log("name is", persons[0].first_name,persons[0].last_name, "and age is", persons[0].age+".");
console.log("name is", persons[1].first_name,persons[1].last_name, "and age is", persons[1].age+".");
console.log("name is", persons[2].first_name,persons[2].last_name, "and age is", persons[2].age+".");
