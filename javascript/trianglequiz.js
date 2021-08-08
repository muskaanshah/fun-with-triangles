var formquiz = document.querySelector("#form-quiz");
var subbtn = document.querySelector(".btn-submit");
var outputpara = document.querySelector(".p-output");
var correctanswers = ["yes", "no", "yes", "yes", "yes"];

subbtn.addEventListener("click", scorecalc);

function scorecalc() {
    var index = 0;
    var score = 0;
    var formresults = new FormData(formquiz);
    for (var value of formresults.values()) {
        if (value == correctanswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputpara.innerText = "Your score is " + score;
}
