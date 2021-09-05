function myFunction(){
    //setting variables
    var d = document.getElementById("day").value;
    var m = document.getElementById("month").value;
    var y = document.getElementById("year").value;
    //handling the gender checker
    if(document.getElementById('male').checked) {
        var g = 'male';
      }else if(document.getElementById('female').checked) {
        var g = 'female';       
      }else{
          alert('Select gender plz')
    };
    //Turning year to array
    var yarr = Array.from(String(y), Number);
    //getting the first two digits of year (1987)
    var yone = parseInt(yarr.splice(0,2).join(""));// 19
    //getting the last two digits of year
    var ytwo = parseInt(yarr.splice(-2,2).join(""));// 87
    //getting the day of the week
    var dayofWeek = Math.abs(parseInt((((yone/4)-2*yone-1)+(5*ytwo/4)+(26*(m+1)/10)+d) % 7));
    //if statement to check weather male or female chained with a switch statement to check the day of the week
    if (g=='male'){
        switch (dayofWeek){
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
        switch(dayofWeek){
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

    document.getElementById("doweek").innerText = nameOfDay;
    document.getElementById("akana").innerText = aName;

    console.log(d);
    console.log(m);
    console.log(y);
    console.log(g);
    console.log(yone);
    console.log(ytwo);
    console.log(dayofWeek);
    console.log(nameOfDay);
    console.log(aName);
};
myFunction();