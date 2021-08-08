var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var subbtn = document.querySelector(".btn-submit");
var outputpara = document.querySelector(".p-output");

subbtn.addEventListener("click", validate);

function validate () {
    if (Number(angle1.value) < 1 || Number(angle2.value) < 1 || Number(angle3.value) < 1) {
        outputpara.innerText = "Please enter valid angles (equal to or above 1)";
    }
    else if (Number(angle1.value) + Number(angle2.value) + Number(angle3.value) == 180) {
        outputpara.innerText = "Yayyy! These angles can make a triangle";
    }
    else {
        outputpara.innerText = "Uh oh! These angles cannot make a triangle";
    }
}
