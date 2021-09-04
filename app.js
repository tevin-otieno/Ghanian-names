var day = 12; // document.getElementById("day");
var month = 06; // document.getElementById("month");
var year = 1997; //document.getElementById("year");
var gender = "male"; //document.getElementById("Gender");
//Turning year to array
var yarr = Array.from(String(year), Number);
//getting the 
var yone = parseInt(yarr.splice(0,2).join(""));
var ytwo = parseInt(yarr.splice(-2,2).join(""));
console.log(typeof(ytwo));

//function akana ()
//let dayOfWeekNumber = date.getDay();
//let nameOfDay;
//let quote;
//
//switch(dayOfWeekNumber){
//    case 0: 
//        nameOfDay = 'Sunday';
//        quote = 'Time to chillax!';
//        break;
//    case 1:
//        nameOfDay = 'Monday';
//        quote = 'Monday morning blues!';
//        break;
//    case 2:
//        nameOfDay = 'Tuesday';
//        quote = 'Taco Time!';
//        break;
//    case 3:
//        nameOfDay = 'Wednesday';
//        quote = 'Two more days to the weekend.';
//        break;
//    case 4:
//        nameOfDay = 'Thursday';
//        quote = 'The weekend is almost here...';
//        break;
//    case 5:
//        nameOfDay = 'Friday';
//        quote = 'Weekend is here!';
//        break;
//    case 6:
//        nameOfDay = 'Saturday';
//        quote = 'Time to party!';
//        break;
//
//}