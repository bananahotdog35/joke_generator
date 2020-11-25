console.log("connected")
$('#reveal').hide();
let count = 0;

const jokes = [
    {
        question: "how do robots eat guocamole",
        answer: "with computer chips"
    },
    {
        question: "how did Darth Vader know what Luke was getting for christmas",
        answer: "he felt his presents"
    }
]

const generateJoke= function () {
    let question = jokes[count].question
    let answer = jokes[count].answer

    questionparagraph = `<p id="question-${count}">${question}</p>`
    answerparagraph = `<p id="answer-${count}">${answer}</p>`

    $("#joke-container").append(questionparagraph)
    $("#joke-container").append(answerparagraph)
    $(`#answer-${count}`).hide()
    
    
    // buttons
    $('#generate').hide();
    $('#reveal').show();

    count ++;
}

const revealAnswer = function () {
    $(`#answer-${count - 1}`).show()

    //buttons
    $('#reveal').hide();
    $('#generate').show();
};

$("#generate"). on("click", generateJoke)
$("#reveal"). on("click", revealAnswer)