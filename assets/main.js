var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var Male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var Female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];

function validate () {
    var year = document.getElementById('year').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var yearNumber = parseInt(year);
    var dayNumber = parseInt(day);
    var monthNumber = parseInt(month);

    if( yearNumber <= 0 || dayNumber < 0 || dayNumber >= 31 || monthNumber <= 0 || monthNumber > 12){
        alert("Please enter valid numbers");
    }
}

function checkName() {
    var year = document.getElementById('year').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var gender = document.getElementById('gender').value;
    var CC, YY, MM, DD;

    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(month);
    DD = parseInt(day);

    validate ();

    var dayValue =( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    var d = Math.floor(dayValue);
    // alert(d);
    var dayName = days[d];
    var maleAkan = Male[d];
    var femaleAkan = Female[d]

    if( gender === "Male"){ 
        alert("Your Akan name is" + " " + maleAkan + " " + "and you were born on a" + " "+ dayName);
    }else{
        alert("Your Akan name is" + " " +femaleAkan +  " "+"and you were born on a" + " "+dayName);
    }

}

