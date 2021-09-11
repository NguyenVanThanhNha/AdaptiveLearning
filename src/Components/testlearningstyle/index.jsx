// import React from "react";
// import "./testlearningstyle.scss"
// import "./test.jsx"

// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// var progressText = document.getElementById('progressText');
// const activeText = document.querySelector('#active');
// const reflectiveText = document.querySelector('#reflective');
// const sensingText = document.querySelector('#sensing');
// const retuitiveText = document.querySelector('#retuitive');
// const visualText = document.querySelector('#visual');
// const verbalText = document.querySelector('#verbal');
// const sequentialText = document.querySelector('#sequential');
// const globalText = document.querySelector('#global');
// const progressBarFull = document.querySelector('#progressBarFull');

// let currentQuestion = {}
// let acceptingAnswers = true 
// let active = 0
// let reflective = 0
// let sensing = 0
// let retuitive = 0
// let visual = 0
// let verbal = 0
// let sequential = 0
// let global = 0
// let questionCounter = 0
// let avaiableQuestions = []

// var  questions = [
//     {
//     question: "I understand something better after I",
//     choice1: "try it out",
//     choice2:"think it through",
//     answer:1,
//     },
//     {
//     question: 'I would rather be considered',
//     choice1:'realistic',
//     choice2:'innovative',
//     answer:1,
//     },
//     {
//     question: 'When I think about what I did yesterday, I am most likely to get',
//     choice1:'a picture',
//     choice2:'words',
//     answer:1,
//     }, 
//     {
//     id: 4,
//     question: 'I tend to',
//     choice1:'understand details of a subject but may be fuzzy about it overall structure',
//     choice2:'understand the overall structure but may be fuzzy about details',
//     answer:1,
//     }, 
//     {
//     id:5,
//     question: 'When I am learning something new, it helps me to',
//     choice1:'talk about it',
//     choice2:'think about it',
//     answer:1,
//     }, 
//     {
//     question: 'If I were a teacher, I would rather teach a course',
//     choice1:' that deals with facts and real life situations',
//     choice2:'that deals with ideas and theories',
//     answer:1,
//     }, 
//     {
//     question: 'I prefer to get new information in',
//     choice1:'pictures, diagrams, graphs, or maps',
//     choice2:'written directions or verbal information',
//     answer:1,
//     }, 
//     {
//     question: 'Once I understand',
//     choice1:'all the parts, I understand the whole thing',
//     choice2:'the whole thing, I see how the parts fit',
//     answer:1,
//     }, 
//     {
//     question: 'In a study group working on difficult material, I am more likely to',
//     choice1:'jump in and contribute ideas',
//     choice2:'sit back and listen',
//     answer:1,
//     }, 
//     {
//     question: 'I find it easier',
//     choice1:'to learn facts',
//     choice2:'to learn concepts',
//     answer:1,
//     }, 
//     {
//     question: 'In a book with lots of pictures and charts, I am likely to',
//     choice1:'look over the pictures and charts carefully',
//     choice2:'focus on the written text',
//     answer:1,
//     }, 
//     {
//     question: 'When I solve math problems',
//     choice1:'I usually work my way to the solutions one step at a time',
//     choice2:'I often just see the solutions but then have to struggle to figure out the steps to get to them',
//     answer:1,
//     }, 
//     {
//     question: 'In classes I have taken',
//     choice1:'I have usually gotten to know many of the students',
//     choice2:'I have rarely gotten to know many of the students',
//     answer:1,
//     }, 
//     {
//     question: 'In reading nonfiction, I prefer',
//     choice1:'something that teaches me new facts or tells me how to do something',
//     choice2:'something that gives me new ideas to think about',
//     answer:1,
//     }, 
//     {
//     question: 'I like teachers',
//     choice1:'who put a lot of diagrams on the board',
//     choice2:'who spend a lot of time explaining',
//     answer:1,
//     }, 
//     {
//     question: "When I'm analyzing a story or a novel",
//     choice1:'I think of the incidents and try to put them together to figure out the themes',
//     choice2:'I just know what the themes are when I finish reading and then I have to go back and find the incidents that demonstrate them',
//     answer:1,
//     }, 
//     {
//     question: 'When I start a homework problem, I am more likely to',
//     choice1:'start working on the solution immediately',
//     choice2:'try to fully understand the problem first',
//     answer:1,
//     }, 
//     {
//     question: 'I prefer the idea of',
//     choice1:'certainty',
//     choice2:'theory',
//     answer:1,
//     }, 
//     {
//     question: 'I remember best',
//     choice1:'what I see',
//     choice2:'what I hear',
//     answer:1,
//     }, 
//     {
//     question: 'It is more important to me that an instructor',
//     choice1:'lay out the material in clear sequential steps',
//     choice2:'give me an overall picture and relate the material to other subjects',
//     answer:1,
//     }, 
//     {
//     question: 'I prefer to study',
//     choice1:'in a study group',
//     choice2:'alone',
//     answer:1,
//     }, 
//     {
//     question: 'I am more likely to be considered',
//     choice1:'careful about the details of my work',
//     choice2:'creative about how to do my work',
//     answer:1,
//     }, 
//     {
//     question: 'When I get directions to a new place, I prefer',
//     choice1:'a map',
//     choice2:'written instructions',
//     answer:1,
//     }, 
//     {
//     question: 'I learn',
//     choice1:'at a fairly regular pace. If I study hard, I will get it',
//     choice2:'in fits and starts. I will be totally confused and then suddenly it all clicks',
//     answer:1,
//     }, 
//     {
//     question: 'I would rather first',
//     choice1:'try things out',
//     choice2:"think about how I'm going to do it",
//     answer:1,
//     }, 
//     {
//     question: 'When I am reading for enjoyment, I like writers to',
//     choice1:'clearly say what they mean',
//     choice2:'say things in creative, interesting ways',
//     answer:1,
//     }, 
//     {
//     question: 'When I see a diagram or sketch in class, I am most likely to remember',
//     choice1:'the picture',
//     choice2:'what the instructor said about it',
//     answer:1,
//     }, 
//     {
//     question: 'When considering a body of information, I am more likely to',
//     choice1:'focus on details and miss the big picture',
//     choice2:'try to understand the big picture before getting into the details',
//     answer:1,
//     }, 
//     {
//     question: 'I more easily remember',
//     choice1:'something I have done',
//     choice2:' something I have thought a lot about',
//     answer:1,
//     }, 
//     {
//     question: 'When I have to perform a task, I prefer to',
//     choice1:'master one way of doing it',
//     choice2:'come up with new ways of doing it',
//     answer:1,
//     }, 
//     {
//     question: 'When someone is showing me data, I prefer',
//     choice1:'charts or graphs',
//     choice2:'text summarizing the results',
//     answer:1,
//     }, 
//     {
//     question: 'When writing a paper, I am more likely to',
//     choice1:'work on (think about or write) the beginning of the paper and progress forward',
//     choice2:'work on (think about or write) different parts of the paper and then order them',
//     answer:1,
//     }, 
//     {
//     question: 'When I have to work on a group project, I first want to',
//     choice1:' have "group brainstorming" where everyone contributes ideas',
//     choice2:'brainstorm individually and then come together as a group to compare ideas',
//     answer:1,
//     }, 
//     {
//     question: 'I consider it higher praise to call someone',
//     choice1:'sensible',
//     choice2:'imaginative',
//     answer:1,
//     }, 
//     {
//     question: 'When I meet people at a party, I am more likely to remember',
//     choice1:'what they looked like',
//     choice2:'what they said about themselves',
//     answer:1,
//     }, 
//     {
//     question: 'When I am learning a new subject, I prefer to',
//     choice1:'stay focused on that subject, learning as much about it as I can',
//     choice2:'try to make connections between that subject and related subjects',
//     answer:1,
//     }, 
//     {
//     question: 'I am more likely to be considered',
//     choice1:'outgoing',
//     choice2:'reserved',
//     answer:1,
//     }, 
//     {
//     question: 'I prefer courses that emphasize',
//     choice1:'concrete material (facts, data)',
//     choice2:'abstract material (concepts, theories)',
//     answer:1,
//     },
//     {
//     question:'For entertainment, I would rather',
//     choice1:'watch television',
//     choice2:'read a book',
//     answer:1,
//     },
//     {
//     question: 'Some teachers start their lectures with an outline of what they will cover. Such outlines are',
//     choice1: 'somewhat helpful to me',
//     choice2: 'very helpful to me',
//     answer:1,
//     }, 
//     {
//     question: 'The idea of doing homework in groups, with one grade for the entire group',
//     choice1: 'appeals to me',
//     choice2: 'does not appeal to me',
//     answer:1,
//     }, 
//     {
//     question: 'When I am doing long calculations',
//     choice1: 'I tend to repeat all my steps and check my work carefully',
//     choice2: 'I find checking my work tiresome and have to force myself to do it',
//     answer: 1,
//     }, 
//     {
//     question: 'I tend to picture places I have been',
//     choice1: 'easily and fairly accurately',
//     choice2: 'with difficulty and without much detail',
//     answer: 1,
//     }, 
//     {
//     question: 'When solving problems in a group, I would be more likely to',
//     choice1: 'think of the steps in the solution process',
//     choice2: 'think of possible consequences or applications of the solution in a wide range of areas',
//     answer:1,
//     }
// ]
// const POINTS = 1 
// const MAX_QUESTIONS = 44


// function startGame() {
//     questionCounter = 0
//     avaiableQuestions = [...questions]
//     getNewQuestion()
// }

// export default function getNewQuestion() {
//     if (avaiableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         checkActiveReflective()
//         checkSensingRetuitive()
//         checkVisualVerbal()
//         checkSequentialGlobal()
//         localStorage.setItem('activeScore', active)
//         localStorage.setItem('reflectiveScore', reflective)
//         localStorage.setItem('sensingScore', sensing)
//         localStorage.setItem('retuitiveScore', retuitive)
//         localStorage.setItem('visualScore', visual)
//         localStorage.setItem('verbalScore', verbal)
//         localStorage.setItem('sequentialScore', sequential)
//         localStorage.setItem('globalScore', global)

//         return window.location.assign('/html/end.html')
//     }

//     questionCounter++
//     console.log(progressText)
//     // progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
//     // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

//     const questionsIndex = 0
//     currentQuestion = avaiableQuestions[questionsIndex]
//     // question.innerText = currentQuestion.question

//     choices.forEach(choice =>{
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//     })

//     avaiableQuestions.splice(questionsIndex, 1)

//     acceptingAnswers = true
// }

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset ['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
//         'incorrect'
       
//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout(() =>{
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()

//         }, 200)
//         for(var i=1; i<44; i+=4){
//             if (classToApply === 'correct' && questionCounter == i){
//             addActivesubReflective(POINTS)
//             }
//         else if(classToApply === 'incorrect' && questionCounter == i) {
//             subActiveaddReflective(POINTS)
//         }}
//         for(var i=2; i<44; i+=4){
//             if (classToApply === 'correct' && questionCounter == i){
//             addSensingsubRetuitive(POINTS)
//             }
//         else if(classToApply === 'incorrect' && questionCounter == i) {
//             subSensingaddRetuitive(POINTS)
//         }}
//         for(var i=3; i<44; i+=4){
//             if (classToApply === 'correct' && questionCounter == i){
//             addVisualsubVerbal(POINTS)
//             }
//         else if(classToApply === 'incorrect' && questionCounter == i) {
//             subVisualaddVerbal(POINTS)
//         }}
//         for(var i=4; i<45; i+=4){
//             if (classToApply === 'correct' && questionCounter == i){
//             addSequentialsubGlobal(POINTS)
//             }
//         else if(classToApply === 'incorrect' && questionCounter == i) {
//             subSequentialaddGlobal(POINTS)
//         }}
//     })
// })

// function checkActiveReflective() {
//     if( active < 0 ){ active = 0}
//     else if(reflective < 0){ reflective = 0}
// }
// function checkSensingRetuitive ()  {
//     if( sensing < 0 ){ sensing = 0}
//     else if(retuitive < 0){ retuitive = 0}
// }
// function checkVisualVerbal() {
//     if( visual < 0 ){ visual = 0}
//     else if(verbal < 0){ verbal = 0}
// }
// function checkSequentialGlobal() {
//     if( sequential < 0 ){ sequential = 0}
//     else if(global < 0){ global = 0}
// }


// function addActivesubReflective(so){
//     active +=so
//     reflective -=so
// }
// function subActiveaddReflective(so){
//     active-=so
//     reflective +=so
// }

// function addSensingsubRetuitive(so){
//     sensing +=so
//     retuitive -=so
// }
// function subSensingaddRetuitive(so){
//     sensing -=so
//     retuitive +=so
// }

// function addVisualsubVerbal(so){
//     visual +=so
//     verbal -=so
// }
// function subVisualaddVerbal(so){
//     visual -=so
//     verbal +=so
// }

// function addSequentialsubGlobal(so){
//     sequential +=so
//     global -=so
// }
// function subSequentialaddGlobal(so){
//     sequential -=so
//     global +=so
// }
// startGame()

// export function Test(){
//     return (
//         <div className="container">
//         <div id="game" className="justify-center flex-column">
//           <div id="hud">
//             <div className="hud-item">
//               <p id="progressText" className="hud-prefix">
//                 Question
//               </p><p>
//               </p><div id="progressBar">
//                 <div id="progressBarFull" />
//               </div>
//             </div>
//             <div className="hud-item2">       
//             </div>
//           </div>
//           <h1 className="text-display" id="question">What is the answer to this question</h1>
//           <div className="choice-container">
//             <p className="choice-prefix">A</p>
//             <p className="choice-text" data-number={1}>Choice</p>
//           </div>
//           <div className="choice-container">
//             <p className="choice-prefix">B</p>
//             <p className="choice-text" data-number={2}>Choice 2</p>
//           </div>
//         </div> 
//       </div>
//     )
// }