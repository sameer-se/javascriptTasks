

/* 

    find if a given value is a number if number positive or negative 
     1
     (-10)
     "John"  //should print => the given data is not a number

     
    - make use of if else 
    - typeof
    
*/
let numb = "john";

if(typeof(numb)=="number"){
    if (numb == 0){
        console.log("It is zero");
    }else if(numb > 0){
        console.log("Given value is positive");
    }else if(numb < 0){
        console.log("Given value is negative");
    }

}else{
    console.log("The given data is not a number.");
}