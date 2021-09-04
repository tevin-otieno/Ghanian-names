var d = 27; // document.getElementById("day");
var m = 06; // document.getElementById("month");
var y = 1999; //document.getElementById("year");
var g = "male"; //document.getElementById("Gender");
//Turning year to array
var yarr = Array.from(String(y), Number);
//getting the first two digits of year
var yone = parseInt(yarr.splice(0,2).join(""));
//getting the last two digits of year
var ytwo = parseInt(yarr.splice(-2,2).join(""));

function akana (yone, ytwo, m, d){
    var dayofWeek = ((((yone/4)-2*yone-1)+(5*ytwo/4)+(26*(m+1)/10)+d) % 7);
    return parseInt(dayofWeek);
};
console.log(akana(yone, ytwo, m, d));

if (g=="male"){
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            aName = 'Kwasi';
            break;
        case 1:
            nameOfDay = 'Monday';
            aName = 'Kwadwo';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            aName = 'Kwabena';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            aName = 'Kwaku';
            break;
        case 4:
            nameOfDay = 'Thursday';
            aName = 'Yaw';
            break;
        case 5:
            nameOfDay = 'Friday';
            aName = 'Kofi';
            break;
        case 6:
            nameOfDay = 'Saturday';
            aName = 'Kwame';
            break;
    }
} else {
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            aName = 'Akosua';
            break;
        case 1:
            nameOfDay = 'Monday';
            aName = 'Adwoa';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            aName = 'Abenaa';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            aName = 'Akua';
            break;
        case 4:
            nameOfDay = 'Thursday';
            aName = 'Yaa';
            break;
        case 5:
            nameOfDay = 'Friday';
            aName = 'Afua';
            break;
        case 6:
            nameOfDay = 'Saturday';
            aName = 'Ama';
            break;
    }
}