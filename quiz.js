var myQuestions = [
    {
        question: "<img src='bongo1hidden.png' id='hiddenImage' class='hiddenImage'  style='visibility:hidden'/><img src='bongo1.png' />",
        answers: {
            a: 'Bongo?',
            b: 'No Bongo?',
        },
        correctAnswer: 'b'
    },
    {
        question: "<img src='bongo4hidden.png' id='hiddenImage4' class='hiddenImage'  style='visibility:hidden'/><img src='bongo4.png' />",
        answers: {
            a: 'Bongo?',
            b: 'No Bongo?',
        },
        correctAnswer: 'a'
    },
    {
        question: "<img src='bongo2hidden.png' id='hiddenImage2' class='hiddenImage'  style='visibility:hidden'/><img src='bongo2.png' />",
        answers: {
            a: 'Bongo?',
            b: 'No Bongo?',
        },
        correctAnswer: 'b'
    },
    {
        question: "<img src='bongo3hidden.png' id='hiddenImage3' class='hiddenImage'  style='visibility:hidden'/><img src='bongo3.png' />",
        answers: {
            a: 'Bongo?',
            b: 'No Bongo?',
        },
        correctAnswer: 'b'
    },
    {
        question: "<img src='bongo5hidden.png' id='hiddenImage5' class='hiddenImage'  style='visibility:hidden'/><img src='bongo5.png' />",
        answers: {
            a: 'Bongo?',
            b: 'No Bongo?',
        },
        correctAnswer: 'a'
    },

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
       
   
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // show images
    function tend() {
        document.getElementById('hiddenImage').style.visibility='visible';
        document.getElementById('hiddenImage2').style.visibility='visible';
        document.getElementById('hiddenImage3').style.visibility='visible';
        document.getElementById('hiddenImage4').style.visibility='visible';
        document.getElementById('hiddenImage5').style.visibility='visible';
      }
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        tend();
    };

}