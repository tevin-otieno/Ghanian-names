var d = 05;//document.getElementById("day");
var m = 09;//document.getElementById("month");
var y = 2021//document.getElementById("year");
var g = "male";//document.getElementById("Gender");
//Turning year to array
var yarr = Array.from(String(y), Number);
//getting the first two digits of year (1987)
var yone = parseInt(yarr.splice(0,2).join(""));// 19
//getting the last two digits of year
var ytwo = parseInt(yarr.splice(-2,2).join(""));// 87

function weekDay (yone, ytwo, m, d){
    var dayofWeek = parseInt((((yone/4)-2*yone-1)+(5*ytwo/4)+(26*(m+1)/10)+d) % 7);

    if (y<2000){
        var dayofWeek = dayofWeek-1;
    } else {
        var dayofWeek = dayofWeek;
    };
    return dayofWeek;
};
var dayOne = weekDay (yone, ytwo, m, d);

if (g=="male"){
    switch (dayOne){
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
    switch(dayOne){
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
};
var pone = document.getElementById("doweek").innerText
var ptwo = document.getElementById("akana").innerText

function myFunction(){
    console.log(nameOfDay);
    console.log(aName);
    document.getElementById("doweek").innerText = nameOfDay;
    document.getElementById("akana").innerText = aName;
};
myFunction()
  