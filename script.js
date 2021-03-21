var startButton = document.querySelector(".start-button");

var questions = [{
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3
}, {
    question: "How to empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctAnswer: 2
}, {
    question: "What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}, {
    question: "What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, {
    question: "What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0
},{
	question: "Which software company developed JavaScript?",
    choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1
},{
	question: "What would be the result of 3+2+'7'?",
    choices: ["327", "12", "14", "57"],
    correctAnswer: 3
},{
	question: "Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctAnswer: 2
},{
	question: "How can a value be appended to an array?",
    choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    correctAnswer: 1
},{
	question: "What will the code below output to the console? console.log(1 +  +'2' + '2');",
    choices: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0
}];

var ul = document.querySelector(".choiceList");
var currentQuestion = 0;
var iSelectedAnswer = [];

// The startGame function is called when the start button is clicked
function startGame() {
   
    displayCurrentQuestion();
  }

  //Function to display current question
function displayCurrentQuestion(){
    var question = questions[currentQuestion].question;
    var numChoices = questions[currentQuestion].choices.length;
    var answer = questions[currentQuestion].correctAnswer;
    console.dir(answer);
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
        
           //on click of answer
    ul.addEventListener("click", function(event){
        var val = document.getElementsByClassName("answer-button");
        console.log(val);

    });
    }
    
 

}  

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

