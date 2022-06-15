var fname = document.getElementById("f-name");
var lname = document.getElementById("l-name");
var countryName = document.getElementById("c-name");
var pScore = document.getElementById("p-score");
function validationForm() {
    if ((fname.value =="" || lname.value =="") || countryName.value =="" || pScore.value =="") {
       
        return false;
        
    }
    else {
        return true;
    }
}