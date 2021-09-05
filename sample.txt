var d = document.getElementById("day").value;
var m = document.getElementById("month").value;
var y = document.getElementById("year").value;
var g = 'female';//document.getElementById("Gender");
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
var dayOne = Math.abs(weekDay (yone, ytwo, m, d));
console.log(dayOne)

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
var pone = nameOfDay;
var ptwo = aName;

function myFunction( pone, ptwo){
    console.log(pone);
    console.log(ptwo);
    document.getElementById("doweek").innerText = pone;
    document.getElementById("akana").innerText = ptwo;
};

myFunction(pone, ptwo);
  