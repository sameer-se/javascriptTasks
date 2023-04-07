

let person1 =
{
    age: 18,
    consent: true
}


let person2 =
{
    age: 20,
    consent: true
}

if (person1.age >= 18 && person2.age >= 18 && person1.consent == person2.consent ){
    console.log("Person 1 and 2 are able to marry with each other.");
}else{
    console.log("Person 1 and 2 are unable to marry each other");
}

/* 
    TODO: find if they are able to marry with each other. person1&2 , 3&4
    - criteras
        - both shuld be greater than 18
        - both shoulb have consent
*/


let person3 =
{
    age: 20,
    consent: true
}


let person4 =
{
    age: 20,
    consent: false
}

if (person3.age >= 18 && person4.age >= 18 && person3.consent == person4.consent ){
    console.log("Person 3 and 4 are able to marry with each other.");
}else{
    console.log("Person 3 and 4 are unable to marry each other.");
}