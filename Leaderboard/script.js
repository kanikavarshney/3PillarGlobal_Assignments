var fname = document.getElementById("f-name");
var lname = document.getElementById("l-name");
var countryName = document.getElementById("c-name");
var pScore = document.getElementById("p-score");
function validationForm() {
    if ((fname.value =="" || lname.value =="") || countryName.value =="" || pScore.value =="") {
       // alert ("All fields are mandatory");
        return false;
        
    }
    else {
        return true;
    }
}
function date1() {
    var dt = Date();
    return dt.substring(3, 21);
}