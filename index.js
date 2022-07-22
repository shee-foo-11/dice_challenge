var randNum1=Math.floor(Math.random()*6)+1;
var randNum2=Math.floor(Math.random()*6)+1;
var image1Name="dice"+randNum1+".png";
var image2Name="dice"+randNum2+".png";
var img1src="images/"+image1Name;
var img2src="images/"+image2Name;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",img1src);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",img2src);

var result=document.querySelector("h2");
if(randNum1>randNum2){
  result.innerHTML="Player 1 Wins !";
}
else if(randNum1<randNum2){
  result.innerHTML="Player 2 Wins !";
}
else result.innerHTML="Its a Tie !";
