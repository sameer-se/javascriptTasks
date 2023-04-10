
let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "task one",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "task two",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "task three",
        "completed": true
    }
]

/* 
    there may be hundred of tasks.. 
    ternary operator. 
*/

/* 
    TODO:
    output
    task one is incomplete
    task two is incomplete
    task three is completed

*/
for(i = 0; i < todos.length; i++){
    let tasks = todos[i].completed ? 'completed' : 'incompleted';
    console.log(`${todos[i].title} is ${tasks}`);
}
