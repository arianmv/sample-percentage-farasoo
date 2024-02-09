const submit = document.getElementById("submit")
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
const empty = document.getElementById("empty")
const answer = document.getElementById("answer")

submit.addEventListener("click", function(){
    if (correct.value === "" || wrong.value === "" || empty.value === "") {
        alert("لطفا تمام بخش ها را پر کنید!!");
        return;
    }

    let correctAnswers = parseInt(correct.value)
    let wrongAnswers = parseInt(wrong.value)
    let n = parseInt (empty.value)
    let totalQuestions = correctAnswers + wrongAnswers + n
    let percentageScore = calculate(correctAnswers, wrongAnswers, n, totalQuestions)

    render(percentageScore)

    correct.value = ""
    wrong.value = ""
    empty.value = ""

    answer.classList.add("clicked");
})

function calculate(correctAnswers, wrongAnswers, n, totalQuestions){
    const totalScore = correctAnswers - (wrongAnswers / 3);
    const percentageScore = (totalScore / totalQuestions) * 100
    return percentageScore
}

function render (percentageScore) {
    answer.innerHTML = 
    answer.textContent = "% " + percentageScore.toFixed(2)

}