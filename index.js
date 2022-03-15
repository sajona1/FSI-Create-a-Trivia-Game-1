let userName = window.prompt ('please enter your name:')
let userScore =0
for(let i = 0; i < questions.length; i++){
//console.log (questions[i])
let question = questions [i]
//window.prompt (?)
let userAnswer = window.prompt (question.text)

//console.log('Correct')

if(userAnswer === question.correctAnswer){
    userscore=userScore + 10
}
}
window.alert ('your score is: '+userScore)