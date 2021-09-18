import React, { useState } from 'react';
import "./testlearningstyle.scss"
import BarChart from './BarChart'

export default function Test() {
	const questions = [
		{
			questionText: 'I understand something better after I',
			answerOptions: [
				{ answerText: 'try it out', isCorrect: true },
				{ answerText: 'think it through', isCorrect: false },
			],
		},
		{
			questionText: 'I would rather be considered',
			answerOptions: [
				{ answerText: 'realistic', isCorrect: true },
				{ answerText: 'innovative', isCorrect: false },
			],
		},
		{
			questionText: 'When I think about what I did yesterday, I am most likely to get',
			answerOptions: [
				{ answerText: 'a picture', isCorrect: true },
				{ answerText: 'words', isCorrect: false },
			],
		},
		{
			questionText: 'I tend to',
			answerOptions: [
				{ answerText: 'understand details of a subject but may be fuzzy about it overall structure', isCorrect: true },
				{ answerText: 'understand the overall structure but may be fuzzy about details', isIncorrect: false },
			],
		},
		{
			questionText: 'When I am learning something new, it helps me to',
			answerOptions: [
				{ answerText: 'talk about it', isCorrect: true },
				{ answerText: 'think about it', iscorrect: false },
			],
		},
		{
			questionText: 'If I were a teacher, I would rather teach a course',
			answerOptions: [
				{ answerText: 'that deals with facts and real life situations', isCorrect: true },
				{ answerText: 'that deals with ideas and theorie', isCorrect: false },
			],
		},
		{
			questionText: 'I prefer to get new information in',
			answerOptions: [
				{ answerText: 'pictures, diagrams, graphs, or maps', isCorrect: true },
				{ answerText: 'written directions or verbal information', isCorrect: false },
			],
		},
		{
			questionText: 'Once I understand',
			answerOptions: [
				{ answerText: 'all the parts, I understand the whole thing', isCorrect: true },
				{ answerText: 'the whole thing, I see how the parts fit', isCorrect: false },
			],
		},
		{
			questionText: 'In a study group working on difficult material, I am more likely to',
			answerOptions: [
				{ answerText: 'jump in and contribute ideas', isCorrect: true },
				{ answerText: 'sit back and listen', isCorrect: false },
			],
		},
		{
			questionText: 'I find it easier',
			answerOptions: [
				{ answerText: 'to learn facts', isCorrect: true },
				{ answerText: 'to learn concepts', isCorrect: false },
			],
		},
		{
			questionText: 'In a book with lots of pictures and charts, I am likely to',
			answerOptions: [
				{ answerText: 'look over the pictures and charts carefully', isCorrect: true },
				{ answerText: 'focus on the written text', isCorrect: false },
			],
		},
		{
			questionText: 'When I solve math problems',
			answerOptions: [
				{ answerText: 'I usually work my way to the solutions one step at a time', isCorrect: true },
				{ answerText: 'I often just see the solutions but then have to struggle to figure out the steps to get to them', isCorrect: false },
			],
		},
		{
			questionText: 'In classes I have taken',
			answerOptions: [
				{ answerText: 'I have usually gotten to know many of the students', isCorrect: true },
				{ answerText: 'I have rarely gotten to know many of the students', isCorrect: false },
			],
		},
		{
			questionText: 'In reading nonfiction, I prefer',
			answerOptions: [
				{ answerText: 'something that teaches me new facts or tells me how to do something', isCorrect: true },
				{ answerText: 'something that gives me new ideas to think about', isCorrect: false },
			],
		},
		{
			questionText: 'I like teachers',
			answerOptions: [
				{ answerText: 'who put a lot of diagrams on the board', isCorrect: true },
				{ answerText: 'who spend a lot of time explaining', isCorrect: false },
			],
		},
		{
			questionText: 'When I am analyzing a story or a novel',
			answerOptions: [
				{ answerText: 'I think of the incidents and try to put them together to figure out the themes', isCorrect: true },
				{ answerText: 'I just know what the themes are when I finish reading and then I have to go back and find the incidents that demonstrate them', isCorrect: false },
			],
		},
		{
			questionText: 'When I start a homework problem, I am more likely to',
			answerOptions: [
				{ answerText: 'start working on the solution immediately', isCorrect: true },
				{ answerText: 'try to fully understand the problem first', isCorrect: false },
			],
		},
		{
			questionText: 'I prefer the idea of',
			answerOptions: [
				{ answerText: 'certainty', isCorrect: true },
				{ answerText: 'theory', isCorrect: false },
			],
		},
		{
			questionText: 'I remember best',
			answerOptions: [
				{ answerText: 'what I see', isCorrect: true },
				{ answerText: 'what I hear', isCorrect: false },
			],
		},
		{
			questionText: 'It is more important to me that an instructor',
			answerOptions: [
				{ answerText: 'lay out the material in clear sequential steps', isCorrect: true },
				{ answerText: 'give me an overall picture and relate the material to other subjects', isCorrect: false },
			],
		},
		{
			questionText: 'I prefer to study',
			answerOptions: [
				{ answerText: 'in a study group', isCorrect: true },
				{ answerText: 'alone', isCorrect: false },
			],
		},
		{
			questionText: 'I am more likely to be considered',
			answerOptions: [
				{ answerText: 'careful about the details of my work', isCorrect: true },
				{ answerText: 'creative about how to do my work', isCorrect: false },
			],
		},
		{
			questionText: 'When I get directions to a new place, I prefer',
			answerOptions: [
				{ answerText: 'a map', isCorrect: true },
				{ answerText: 'written instructions', isCorrect: false },
			],
		},
		{
			questionText: 'I learn',
			answerOptions: [
				{ answerText: 'at a fairly regular pace. If I study hard, I will get it', isCorrect: true },
				{ answerText: 'win fits and starts. I will be totally confused and then suddenly it all clicks', isCorrect: false },
			],
		},
		{
			questionText: 'I would rather first',
			answerOptions: [
				{ answerText: 'try things out', isCorrect: true },
				{ answerText: 'think about how I am going to do it', isCorrect: false },
			],
		},
		{
			questionText: 'When I am reading for enjoyment, I like writers to',
			answerOptions: [
				{ answerText: 'clearly say what they mean', isCorrect: true },
				{ answerText: 'say things in creative, interesting ways', isCorrect: false },
			],
		},
		{
			questionText: 'When I see a diagram or sketch in class, I am most likely to remember',
			answerOptions: [
				{ answerText: 'the picture', isCorrect: true },
				{ answerText: 'what the instructor said about it', isCorrect: false },
			],
		},
		{
			questionText: 'When considering a body of information, I am more likely to',
			answerOptions: [
				{ answerText: 'focus on details and miss the big picture', isCorrect: true },
				{ answerText: 'try to understand the big picture before getting into the details', isCorrect: false },
			],
		},
		{
			questionText: 'I more easily remember',
			answerOptions: [
				{ answerText: 'something I have done', isCorrect: true },
				{ answerText: 'wsomething I have thought a lot about', isCorrect: false },
			],
		},
		{
			questionText: 'When I have to perform a task, I prefer to',
			answerOptions: [
				{ answerText: 'master one way of doing it', isCorrect: true },
				{ answerText: 'come up with new ways of doing it', isCorrect: false },
			],
		},
		{
			questionText: 'When someone is showing me data, I prefer',
			answerOptions: [
				{ answerText: 'charts or graphs', isCorrect: true },
				{ answerText: 'text summarizing the results', isCorrect: false },
			],
		},
		{
			questionText: 'When writing a paper, I am more likely to',
			answerOptions: [
				{ answerText: 'work on (think about or write) the beginning of the paper and progress forward', isCorrect: true },
				{ answerText: 'work on (think about or write) different parts of the paper and then order them', isCorrect: false },
			],
		},
		{
			questionText: ' When I have to work on a group project, I first want to',
			answerOptions: [
				{ answerText: 'have "group brainstorming" where everyone contributes ideas', isCorrect: true },
				{ answerText: 'brainstorm individually and then come together as a group to compare ideas', isCorrect: false },
			],
		},
		{
			questionText: 'I consider it higher praise to call someone',
			answerOptions: [
				{ answerText: 'sensible', isCorrect: true },
				{ answerText: 'imaginative', isCorrect: false },
			],
		},
		{
			questionText: 'When I meet people at a party, I am more likely to remember',
			answerOptions: [
				{ answerText: 'what they looked like', isCorrect: true },
				{ answerText: 'what they said about themselves', isCorrect: false },
			],
		},
		{
			questionText: 'When I am learning a new subject, I prefer to',
			answerOptions: [
				{ answerText: 'stay focused on that subject, learning as much about it as I can', isCorrect: true },
				{ answerText: 'try to make connections between that subject and related subjects', isCorrect: false },
			],
		},
		{
			questionText: 'I am more likely to be considered',
			answerOptions: [
				{ answerText: 'outgoing', isCorrect: true },
				{ answerText: 'reserved', isCorrect: false },
			],
		},
		{
			questionText: 'I prefer courses that emphasize',
			answerOptions: [
				{ answerText: 'concrete material (facts, data)', isCorrect: true },
				{ answerText: 'abstract material (concepts, theories)', isCorrect: false },
			],
		},
		{
			questionText: 'For entertainment, I would rather',
			answerOptions: [
				{ answerText: 'watch television', isCorrect: true },
				{ answerText: 'read a book', isCorrect: false },
			],
		},
		{
			questionText: 'Some teachers start their lectures with an outline of what they will cover. Such outlines are',
			answerOptions: [
				{ answerText: 'somewhat helpful to me', isCorrect: true },
				{ answerText: 'very helpful to me', isCorrect: false },
			],
		},
		{
			questionText: 'The idea of doing homework in groups, with one grade for the entire group',
			answerOptions: [
				{ answerText: 'appeals to me', isCorrect: true },
				{ answerText: 'does not appeal to me', isCorrect: false },
			],
		},
		{
			questionText: 'When I am doing long calculations',
			answerOptions: [
				{ answerText: 'I tend to repeat all my steps and check my work carefully', isCorrect: true },
				{ answerText: 'I find checking my work tiresome and have to force myself to do it', isCorrect: false },
			],
		},
		{
			questionText: 'I tend to picture places I have been',
			answerOptions: [
				{ answerText: 'easily and fairly accurately', isCorrect: true },
				{ answerText: 'with difficulty and without much detail', isCorrect: false },
			],
		},
		{
			questionText: 'When solving problems in a group, I would be more likely to',
			answerOptions: [
				{ answerText: 'think of the steps in the solution process', isCorrect: true },
				{ answerText: 'think of possible consequences or applications of the solution in a wide range of areas', isCorrect: false },
			],
		},

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [active, setActive] = useState(0);
	const [reflective, setReflective] = useState(0);
	const [sensing, setSensing] = useState(0);
	const [retuitive, setRetuitive] = useState(0);
	const [visual, setVisual] = useState(0);
	const [verbal, setVerbal] = useState(0);
	const [sequential, setSequential] = useState(0);
	const [global, setGlobal] = useState(0);
	sessionStorage.setItem('active', active);
	sessionStorage.setItem('reflective', reflective);
	sessionStorage.setItem('sensing', sensing);
	sessionStorage.setItem('retuitive', retuitive);
	sessionStorage.setItem('visual', visual);
	sessionStorage.setItem('verbal', verbal);
	sessionStorage.setItem('sequential', sequential);
	sessionStorage.setItem('global', global);


	const handleAnswerOptionClick = (isCorrect) => {
	
		for(var i=0; i<=44; i+=4){
	
		if (isCorrect === true && currentQuestion == i) {
			setActive(active + 1);
			setReflective(reflective - 1);
			sessionStorage.setItem('active', active);
			sessionStorage.setItem('reflective', reflective);
		}
		else if (isCorrect === false && currentQuestion == i) {
			setReflective(reflective + 1);
			setActive(active -1);
			sessionStorage.setItem('active', active);
			sessionStorage.setItem('reflective', reflective);
		}
	}
	for(var i=1; i<= 44; i=i+4){
		if (isCorrect === true && currentQuestion == i) {
			setSensing(sensing + 1);
			setRetuitive(retuitive - 1);
			sessionStorage.setItem('sensing', sensing);
			sessionStorage.setItem('retuitive', retuitive);
		}
		else if (isCorrect === false && currentQuestion  == i) {
			setSensing(sensing - 1);
			setRetuitive(retuitive + 1);
			sessionStorage.setItem('sensing', sensing);
			sessionStorage.setItem('retuitive', retuitive);
	} 
}
	for(var i=2; i<=44; i+=4){
		if (isCorrect === true && currentQuestion == i) {
			setVisual(visual + 1);
			setVerbal(verbal - 1);
			sessionStorage.setItem('visual', visual);
			sessionStorage.setItem('verbal', verbal);
		}
		else if (isCorrect === false && currentQuestion == i) {
			setVisual(visual - 1);
			setVerbal(verbal + 1);
			sessionStorage.setItem('visual', visual);
			sessionStorage.setItem('verbal', verbal);
		}
	}
	for(var i=3; i<=44; i+=4){
		if (isCorrect === true && currentQuestion == i) {
			setSequential(sequential + 1);
			setGlobal(global - 1);
			sessionStorage.setItem('sequential', sequential);
			sessionStorage.setItem('global', global);
		}
		else if (isCorrect === false && currentQuestion == i) {
			setSequential(sequential - 1);
			setGlobal(global + 1);
			sessionStorage.setItem('sequential', sequential);
			sessionStorage.setItem('global', global);
		}
	}
	const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			checkActive();
			checkReflective();
			checkSensing();
			checkRetuitive();
			checkVisual();
			checkVerbal();
			checkSequential();
			checkGlobal();
			setShowScore(true);
	}	
}
	const checkActive = () => {
		if (active < 0){setActive(0)}}
	const checkReflective = ()=>{
		if (reflective < 0){setReflective(0)}}
	const checkSensing = ()=>{
		if (sensing < 0){setSensing(0)}}
	const checkRetuitive = ()=>{
		if (retuitive < 0){setRetuitive(0)}}
	const checkVisual = ()=>{
		if (visual < 0){setVisual(0)}}
	const checkVerbal = ()=>{
		if (verbal < 0){setVerbal(0)}}
	const checkSequential = ()=>{
		if (sequential < 0){setSequential(0)}}
	const checkGlobal = ()=>{
		if (global < 0){setGlobal(0)}}
	
		const App = () => {
			return (
				<div>
					<BarChart/>
				</div>
				)
			}
		
		return (
			<div className='app'>
				{showScore ? ( App()
					/*<div className='score-section'>
						You active score:{active}<br></br>
						You reflective score:{reflective}<br></br>
						You sensing score:{sensing} <br></br>
						You retuitive score:{retuitive}<br></br>
						You visual score:{visual} <br></br>
						You verbal score:{verbal} <br></br>
						You sequential score:{sequential} <br></br>
						You global score:{global} 
					</div>*/
					
				) : (
				<>
					<div><h1 class = "name">LET'S TEST THE LEARNING STYLE</h1></div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span> of {questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}