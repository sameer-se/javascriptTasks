

/* 

    print multiplcation of a digit for 

    8  begining from 1 to  10 
    10 begining from 11 to 20
    


     => 
     8 X 1 = 8
     8 X 2 = 16
     .
     .
     .
     8 X 10 = 80

     and 


     10 X 11 = 110
     10 X 12 = 120
     .
     .
     .
     10 X 20 = 200


*/
/* MULTIPLICATION OF 8 UP  TO 10 */
for(i=1; i <= 10; i++){
    let multi = 8 * i ;
    console.log(`8 x ${i} = ${multi}`);
}

console.log("AND");

/* MULTIPLICATION OF 10 FROM 11 TO 20 */

for(i=11; i <= 20; i++){
    let multi = 10 * i ;
    console.log(`10 x ${i} = ${multi}`);
}