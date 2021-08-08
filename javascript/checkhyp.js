var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var subbtn = document.querySelector(".btn-submit");
var outputpara = document.querySelector(".p-output");

subbtn.addEventListener("click", validate);

function validate () {
    if (Number(side1.value) < 0.1 || Number(side2.value) < 0.1) {
        outputpara.innerText = "Please enter valid sides (equal to or above 0.1)";
    }
    else {
        var c = Math.sqrt( (Number(side1.value)*Number(side1.value)) + (Number(side2.value)*Number(side2.value)) );
        outputpara.innerText = "The hypotenuse of the triangle is " + c + " cms";
    }
}