let questions=[{
question:"what does HTML stans for",
options:[
  "Hyper Text Markup Language",
  "High Text Machine Language",
  "Hyper Transfer Markup Language",
  "Home Tool Markup Language"
],
answer:"Hyper Text Markup Language"
    },
    {
    question: "Which language is used to style a webpage?",
    options: [
              "HTML",
              "CSS",
              "JavaScript", 
              "Python"],
    answer: "CSS"},
        {
    question:"Which HTML tag is used to create a hyperlink?",
    options:[
                "<img>",
                "<a>",
                "<p>",
                "<h1>"
              ],
     answer:"<a>"             
        },
        {
          question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "print",
            "let",
            "echo",
            "style"
        ],
        answer: "let"
        },
        {
           question: "Which JavaScript method adds an element to the end of an array?",
        options: [
            "pop()",
            "shift()",
            "push()",
            "slice()"
        ],
        answer: "push()"
        },
        {
    question: "Which method is used to remove the last element from an array?",
    options: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
    ],
    answer: "pop()"
},
{
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
        "var",
        "let",
        "const",
        "static"
    ],
    answer: "const"
},
{
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
        "<!-- -->",
        "/* */",
        "//",
        "#"
    ],
    answer: "//"
},
{
    question: "Which method is used to display a message in the browser console?",
    options: [
        "console.log()",
        "document.write()",
        "alert()",
        "print()"
    ],
    answer: "console.log()"
},
{
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.convert()",
        "JSON.object()"
    ],
    answer: "JSON.parse()"
}
  ];
 let questionElement=document.getElementById("question");
 let optionElement=document.getElementById("options");

 let currentQuestionIndex=0;
 let score=0;
function displayQues(){
      let currentQuestion=questions[currentQuestionIndex];
        questionElement.textContent=currentQuestion.question;
            optionElement.innerHTML = "";
      currentQuestion.options.forEach(function(value) {
          let opButton = document.createElement("button");

          opButton.textContent = value;
          opButton.addEventListener("click",function(){
            optionElement.querySelectorAll("button").forEach(function(btn) {
    btn.disabled = true;
    if(btn.textContent===currentQuestion.answer)
    {btn.classList.add("correct"); }
});
            if(currentQuestion.answer===value){
            score++;
            opButton.classList.add("correct");
                console.log("correct",score);
                
            }
            else{
                 opButton.classList.add("wrong");
                console.log("wrong");
            }
          });

          optionElement.appendChild(opButton);
          console.log(questions.length);
      });
 
}
let nxtBtn=document.getElementById("nxtBtn");
  nxtBtn.addEventListener("click",function() 
  {                                                    if(currentQuestionIndex < questions.length-1) {                              
    currentQuestionIndex++;
    displayQues();}
    else{
      window.location.href="result.html?score="+score;
    }
});
let resBtn=document.getElementById("resBtn")
  resBtn.addEventListener("click",function(){
    currentQuestionIndex=0;
    score=0;
    displayQues();
})
displayQues();
