var buttonel =document .querySelector(".btn");
var divel =document .querySelector(".mydiv");
var pel =document .querySelector(".myp");

var colors = [ "rgb(19, 157, 216) ","rgb(12, 111, 154)","rgb(7, 73, 102)"];
var word = [" M e s s a g e <br> F o r <br> Y o u<br>  H e a r t . . !","Your d r e a m<br> H a s N o <br>E x p i r a t ion <br>D a t e .  " ," T a k e a d ee p<br> b r e a t h <br> A n d T r y<br> A g a i n. . . "," "] 
var i=0;

buttonel.onclick=function(){
    divel.style.backgroundColor=colors[i];
    pel.innerHTML=word[i];
    i++;
    if(i==3){
    i=0;
    }
}