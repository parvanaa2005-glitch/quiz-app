let store=new URLSearchParams(window.location.search); 
let score=store.get("score");
let scoreElement=document.getElementById("score");
scoreElement.textContent=score+"/10"
let restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", function() {
    window.location.href = "startPade.html";
});