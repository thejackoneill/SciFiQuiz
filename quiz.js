//quiz answer checker

var score = sessionStorage.getItem("myScore");
let maxScore = 6;





function check() {

    //hilarious comedy
    
 

    

   var question1 = document.quiz.question1.value;
   var question2 = document.quiz.question2.value;
   var question3 = document.quiz.question3.value;
   var question4 = document.quiz.question4.value;
   var question5 = document.quiz.question5.value;
   var question6 = document.quiz.question6.value;
   
//VARIABLE Right answers
var correct = 0
   

if (question1 == "Minority Report") {
    correct++;
}
if (question2 == "The Matrix") {
    correct++;
}	
if (question3 == "Blue Harvest") {
    correct++;
}

if (question4 == "District 9") {
    correct++;
}
if (question5 == "Brendan Gleeson") {
    correct++;
}	
if (question6 == "6") {
    correct++;
}



alert("YOUR RESULTS: " + correct + " out of 6! - Press OK to restart")
    


    

}
