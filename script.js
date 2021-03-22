var startButton = document.querySelector(".start-button");
var quizInfo = document.querySelector("quiz-info");

var questions = [{
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3
}, {
    question: "2. How to empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctAnswer: 2
}, {
    question: "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}, {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, {
    question: "5. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0
},{
	question: "6. Which software company developed JavaScript?",
    choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1
},{
	question: "7. What would be the result of 3+2+'7'?",
    choices: ["327", "12", "14", "57"],
    correctAnswer: 3
},{
	question: "8. Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctAnswer: 2
},{
	question: "9. How can a value be appended to an array?",
    choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    correctAnswer: 1
},{
	question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
    choices: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0
}];

var ul = document.querySelector(".choiceList");
var timerElement = document.querySelector(".timer-count");
var scoreDiv = document.querySelector(".final-score");
var currentQuestion = 0;
//var iSelectedAnswer = [];
var timer;
var timerCount = 120;
//console.log(questions.length);


// The startGame function is called when the start button is clicked
function startGame() {
    
    startTimer();
    displayCurrentQuestion();
    //removing the quiz info section
    document.getElementById("quiz-info").style.display = "none";
    // clearInterval(timer);
  }

  //Function to display current question
function displayCurrentQuestion(){
    
    var question = questions[currentQuestion].question;
    var numChoices = questions[currentQuestion].choices.length;
    //var answer = questions[currentQuestion].correctAnswer;
   
    ///Displaying question
    ul.textContent = question;

    for (i = 0; i < numChoices; i++) 
	{
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
       // li.textContent = choice;
        //Displaying answer
        ul.appendChild(li);	        
        var button = document.createElement("button");
        button.id = i;
        button.className = "answer-button";
        button.textContent = choice;
        li.appendChild(button);       
    }
 

}  

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

//eventlistner function
ul.addEventListener("click",function(event){
    //button id
    var buttonId = event.target.id;    
    //correct answer
    var correctAnswer = questions[currentQuestion].correctAnswer;

    if(buttonId == correctAnswer)
    {
        console.log("correct answer");
        document.getElementById("correct").style.display = "block"; 
        currentQuestion++;  

        //loop runned till end of all questions
        if(currentQuestion < questions.length)
        {
        console.log("currentQuestion:" + currentQuestion);   
        displayCurrentQuestion();  
        document.getElementById("correct").style.display = "none";
        }

        if(currentQuestion == questions.length)
        {
            // var timer = startTimer();
            clearInterval(timer);
            //local storage of timer
            var score = localStorage.setItem("score",timerCount);            
            document.location.href = "score-entry.html";
        }
        
    }

    else{
        console.log("incorrect answer");
        timerCount = timerCount - 10;
        document.getElementById("incorrect").style.display = "block";
    }
    
});

function stopQuiz(){
    
}

function getScore(){
    var finalScore = localStorage.getItem(score);
    scoreDiv.textContent = finalScore;

}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        if (timerCount < 0) {
            // Clears interval
            clearInterval(timer);        
          }  
      timerCount--;
      if(timerCount >= 0)
      {
      timerElement.textContent = timerCount;   
      }
      
         
    }, 1000);
    return timer;
  }

  getScore();