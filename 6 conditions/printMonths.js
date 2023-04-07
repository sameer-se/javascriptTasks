

/* 

    create a function  month_num  to get the name of different months. 

   let name =  month_num(1)
   console.log(name)

    TODO:
    if i pass argument 1, it should give me the result of January and so n. 

    if i pass other than 1 to 12, it should give not a valid input

    
*/

/* 
    if else vs switch
*/

getMonth(10);
getMonth(1);
getMonth(100);     /* Enter number between 1 and 12 */

function getMonth(month_num){
  month=["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if(month_num >=1 && month_num <= 12){
      console.log(`According to given number it's months of ${month[month_num-1]}.`)
  }
  else{
      console.log("Invalid Data")
  }
}
// /* PRINTING MONTHS BY USING SWITCH */
getmonth(10);
getmonth(1);
getmonth(100);

month=["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getmonth(month_num){
  switch (month_num) {
      case 1:
        console.log("January");
        break;
      case 2:
        console.log("February");
        break;
      case 3:
        console.log("March");
        break;
      case 4:
        console.log("April");
        break;
      case 5:
        console.log("May");
        break;
      case 6:
        console.log("June");
        break;
      case  7:
        console.log("july");
        break;
      case 8:
          console.log("August");
          break;
      case 9:
          console.log("September");
          break;
      case 10:
          console.log("October");
          break;
      case 11:
          console.log("November");
          break;
      case 12:
          console.log("December");
          break;
    }
  }