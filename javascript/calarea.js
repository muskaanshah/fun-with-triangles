var op1 = document.querySelector("#opt1");
var op2 = document.querySelector("#opt2");
var op3 = document.querySelector("#opt3");

var areadiv1 = document.querySelector(".area1");
var areadiv2 = document.querySelector(".area2");
var areadiv3 = document.querySelector(".area3");

op1.addEventListener("click", validate1);
op2.addEventListener("click", validate2);
op3.addEventListener("click", validate3);

var base = document.querySelector("#base");
var height = document.querySelector("#height");
var subbtn = document.querySelectorAll(".btn-submit");

var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var side3 = document.querySelector("#side3");

var sideb = document.querySelector("#side-b");
var sidec = document.querySelector("#side-c");
var angle = document.querySelector("#angle-alpha");

var outputpara = document.querySelectorAll(".p-output");
subbtn[0].addEventListener("click", calarea1);
subbtn[1].addEventListener("click", calarea2);
subbtn[2].addEventListener("click", calarea3);

function validate1() {
    areadiv1.style.display = "block";
    areadiv2.style.display = "none";
    areadiv3.style.display = "none";   
}
function calarea1 () {
    if (Number(base.value) < 0.1 || Number(height.value) < 0.1) {
        outputpara[0].innerText = "Please enter valid sides (equal to or above 0.1)";
    }
    else {
        var area = 0.5 * Number(base.value) * Number(height.value);
        outputpara[0].innerText = "The area of the triangle is " + area + " cms square";
    }
}

function validate2() {
    areadiv1.style.display = "none";
    areadiv2.style.display = "block";
    areadiv3.style.display = "none";
}
function calarea2 () {
    s1 = Number(side1.value);
    s2 = Number(side2.value);
    s3 = Number(side3.value);

    if (s1 < 0.1 || s2 < 0.1 || s3 < 0.1) {
        outputpara[1].innerText = "Please enter valid sides (equal to or above 0.1)";
    }
    else if (s1 >= (s2 + s3) || s2 >= (s1 + s3) || s3 >= (s2 + s1)) {
        outputpara[1].innerText = "Enter valid side lengths such that each side length should be less than sum of other two sides";
    }
    else {
        var s = 0.5 * (s1 + s2 + s3);
        var area = Math.sqrt(s * (s-s1) * (s-s2) * (s-s3));
        outputpara[1].innerText = "The area of the triangle is " + area + " cms square";
    }
}

function validate3() {
    areadiv1.style.display = "none";
    areadiv2.style.display = "none";
    areadiv3.style.display = "block";  
}

function calarea3 () {
    if (Number(sideb.value) < 0.1 || Number(sidec.value) < 0.1) {
        outputpara[2].innerText = "Please enter valid sides (equal to or above 0.1)";
    }
    else if (Number(angle.value) < 0 || Number(angle.value) > 179) {
        outputpara[2].innerText = "Please enter valid angle (between 0 to 180)";
    }
    else {
        var area = 0.5 * Number(sideb.value) * Number(sidec.value) * Math.sin(Number(angle.value) * Math.PI / 180);
        outputpara[2].innerText = "The area of the triangle is " + area + " cms square";
    }
}