javascript:
var opt=1;alert("keyboard commands:c=color picker. u=pen up. d=pen down. s=size. o=opacity. reload to clear.");
var pen='none';
var size=10;
function repeat(event){(function(){
  var color=document.createElement('div');
  var body=document.getElementsByTagName('body')[0];
  body.appendChild(color);
  color.style.position='fixed';
  color.style.bottom='0px';
  color.style.right='0px';
  color.style.margin='0px';
  color.style.paddingTop='0px';
  color.style.width='1366px';
  color.style.height='20px';
  color.style.zIndex=10000;
  color.style.opacity=0.8;
  color.style.color='white';
  color.style.backgroundColor='black';
  color.style.border='0px solid black';
  color.style.textAlign='center';
  color.style.cursor='pointer';
  color.id='color';
  color.style.display='circle';
  color.innerText='by dragonmaster73101';
  document.getElementById('me').addEventListener('click',function(){window.open('https://github.com/dragon731012');});}());}
function mousemove(event){
  var x=event.clientX;
  var y=event.clientY;
  x=x-9-size;y=y-12-size;
  (function(){
    var elem=document.createElement('div');
    var body=document.getElementsByTagName('body')[0];
    body.appendChild(elem);
    elem.style.position='fixed';
    elem.style.top=''+y+'px';
    elem.style.left=''+x+'px';
    elem.style.margin='10px';
    elem.style.paddingTop='10px';
    elem.style.width=''+size+'px';
    elem.style.height=''+size+'px';
    elem.style.zIndex=10000;
    elem.style.opacity=opt;
    elem.style.color=''+clr+'';
    elem.style.backgroundColor=''+clr+'';
    elem.style.border='0px solid white';
    elem.style.textAlign='center';
    elem.id='paint';
    elem.style.display=''+pen+'';
    elem.innerText='';}());}
window.addEventListener("keydown",function(event){
  if (event.key=="c"){
    clr=prompt("what color do you want? must be very broad, and with no caps or special characters. ex:blue");
    elem.style.display=%27block%27;}});
window.addEventListener("keydown",function(event){
  if (event.key=="s"){
    size=prompt("what size do you want? no caps, letters, or special characters. ex: 10");
    elem.style.display=%27block%27;}});
window.addEventListener("keydown",function(event){
  if(event.key=="u"){
    pen=%27none%27;}});
window.addEventListener("keydown",function(event){
  if(event.key=="d"){
    pen=%27circle%27;}});
window.addEventListener("keydown",function(event){
  if(event.key=="o"){
    opt=prompt("what do you want the opacity to be? 1 to 0. 1=none. 0=a lot.");}});
window.addEventListener(%27mousemove%27,mousemove);
repeat();
