function Quiz(questions, quizcon, resultcon, btnsubmit){

	function Ques(questions, quizcon){
		
		var output = [];
		var answers;
		for(var i=0; i<questions.length; i++){
			answers = [];
			for(key in questions[i].answers){
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+key+'">'
						+ key + ': '
						+ questions[i].answers[key]
					+ '</label>'
				);
			}
			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}
		quizcon.innerHTML = output.join('');
		
	}

	function showResults(questions, quizcon, resultcon){
		var ansArr = quizcon.querySelectorAll('.answers');
		var uAns = '';
		var numCorrect = 0;
		for(var i=0; i<questions.length; i++){
			uAns = (ansArr[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			if(uAns===questions[i].correctAnswer){
				numCorrect++;
				ansArr[i].style.color = 'lightgreen';
			}
			else{
				ansArr[i].style.color = 'red';
			}
		}

		resultcon.innerHTML = "The number of questions coreect is" +numCorrect + ' out of ' + questions.length;
	}

	Ques(questions, quizcon);
	btnsubmit.onclick = function(){
		showResults(questions, quizcon, resultcon);
	}
}

var myQuestions = [
  {
  question:"First China War was fought between",
answers:{
 a:"China and Britain",
b:"China and France",
c:"China and Egypt",
d:"China and Greek"
},
correctAnswer:"a"
},

{
    question: "Which is the biggest mountain in the world ?",
    answers: {
    a:"Mount Everest", 
    b:"Kanchenjunga", 
    c:"K2 (Mount Godwin Austen)",
    d:"Lhotse"
    },
    correctAnswer:"a"
  },

  {
    question: "Who is the present prime minister of India?",
   answers:{ 
   a:"Manmohan singh",
   b: "Narendra Modi",
   c: "Indra Gandhi",
   d:"Jawaharlal Nehru"
   },
    correctAnswer: "b"
  },

  {
    question: "Which country is famous for White Elephants?",
    answers: {
    a:"Thailand",
    b: "USA",
    c: "India", 
    d:"North America"},
    correctAnswer: "a"
  },

  {
    question: " Which is the first largest populated country in the World? ",
    answers:{ 
    a:"Australia",
    b: "India",
    c: "China",
    d: "South America"},
    correctAnswer: "c"
  }
];
var quizcon = document.getElementById('quiz');
var resultcon = document.getElementById('results');
var btnsubmit = document.getElementById('submit');
Quiz(myQuestions, quizcon, resultcon, btnsubmit);

