var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('wellcome ' + userName + ' lets have a fun');

//play functions
var score=0;
function play(question,answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer===answer){
        score = score+1
        console.log("right answer"+"\n"+"hurry,you got bonus 1 pointes");
       
        }
    else{
        console.log("wroung answer");
        }
    console.log("your current score : "+score)
    console.log("---------------")
}
//question array you can add question for quize
var questions=[{
    question:"who is god of cricketer ?\na:sachin\nb:ashok dindha\nc:pankaj\nd:umesh yadhav\n ",
    answer:"a"},{

    question:"how many letters in alphabet ?\na:23\nb:20\nc:21\nd:26\n ",
    answer:"d"},{

    question:"what is the full form of RAM ?\na:random access moment\nb:random access memory\nc:none\n ",
    answer:"b"

    }
    ];

    //loop for calling function
for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}
