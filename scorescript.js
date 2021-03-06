var ulMessage = document.querySelector(".message");
var noScore = document.querySelector(".no-highscore");
var playButton = document.querySelector(".play-button");

var backButton = document.getElementById("play-quiz");
var lastScore = [];

// run event when page loads
document.addEventListener('DOMContentLoaded', function() {
    var lastScore = JSON.parse(localStorage.getItem("highScores")) || [];
  

    if(lastScore.length){   
        //sorting in descending order
        lastScore.sort((a, b) => {
            return b.score - a.score
          });  
           
        for (var i = 0; i < lastScore.length; i++)
            {
                console.log(lastScore[i].score);
                var li = document.createElement("li");
                indexI = i +1;
                li.textContent = indexI + '.' + lastScore[i].initials + " - "+   lastScore[i].score;  
                ulMessage.appendChild(li);
            }
        }
        
   
        else{
        noScore.textContent = 'No scores yet';
        
            }

}, false);

backButton.addEventListener("click",function(event){
    document.location.href = "index.html";
});

