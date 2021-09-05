let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let Male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let Female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];

function validate () {
    const year = parseInt(document.getElementById('year').value);
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);

    if( year <= 0 || day < 0 || day >= 31 || month <= 0 || month > 12){
        alert("Please enter valid numbers");
    }
}

function checkName () {
    validate ();
    const dayValue = 

}

