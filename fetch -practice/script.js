let display=document.getElementById("display");
let activityBtn=document.getElementById("activity");
let nextBtn=document.getElementById("nextBtn");
/*activityBtn.addEventListener("click",function()
{fetch("https://www.boredapi.com/api/activity")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    display.textContent=data.activity;
  })
}) */
let quotes=[];
let currentIndex=0;

  activityBtn.addEventListener("click", async function () {
    let responses = await fetch("https://dummyjson.com/quotes?limit=6");

    let data= await responses.json();
    quotes =data.quotes;
    currentIndex=0;
displayQuotes();
    
  });
  function displayQuotes(){
    display.textContent=quotes[currentIndex].quote+ " "+quotes[currentIndex].author
  };

  nextBtn.addEventListener("click", function () {
    if (quotes.length === 0) {
    display.textContent = "Please click Get Quotes first!";
    return;
}
    if(currentIndex <quotes.length-1){
     currentIndex++;
 displayQuotes();}
 else{
  display.textContent="no more question";
 }
});