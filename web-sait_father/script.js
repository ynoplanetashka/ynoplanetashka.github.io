function bigfirstchar(str) {

  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
function fast_yes_no(x){if(x){alert('yes');}else{alert('no');}}
//fast_yes_no(csssupports('transform-style','preserve-3d'));


function csssupports(svoistvo,value){ var element =  document.createElement('span');

try
{


if (element.style[svoistvo] === undefined/* && element.style[webkit+bigfirstchar(svoistvo)] === undefined && element.style[moz+bigfirstchar(svoistvo)] === undefined && element.style[ms+bigfirstchar(svoistvo)] === undefined*/)
{
  return false;
}
else {element.style[svoistvo] = value;/*element.style[webkit+bigfirstchar(svoistvo)] = value;element.style[moz+bigfirstchar(svoistvo)] = value;element.style[ms+bigfirstchar(svoistvo)] = value;*/

return element.style[svoistvo] === value;
}

}
catch
{
  return false;
}
}

var human_count = 0;




//window.onload=function(){if (csssupports('transform-style','preserve-3d')){document.getElementsByClassName('our_sertificats')[0].classList.add="confirm_3d";}};




var top_panel_timer = setInterval(function(){if(document.getElementById('only_hr').getBoundingClientRect().top<-100){document.getElementById('safe_menu').style.display="flex";}else{document.getElementById('safe_menu').style.display="none";}},1000/30);

function scrol_face(x){human_count+=x;if(human_count==3)human_count=0; else if(human_count==-1)human_count=2;for(var i=0;i<document.getElementsByClassName('image').length; i++){document.getElementsByClassName('image')[i].style.opacity=0;}document.getElementsByClassName('image')[human_count].style.opacity=1;}
function scroll_face(x) {if (!document.getElementsByClassName('button')[0].classList.contains('unclicable_scroll_button')){
for (var k = 0; k<2;k++){document.getElementsByClassName('button')[k].classList.add('unclicable_scroll_button');}
var timeout = setTimeout(function(){for (var i = 0; i<2; i++){document.getElementsByClassName('button')[i].classList.remove('unclicable_scroll_button')}},1200);
scrol_face(x);
}}
//slide_timer = setInterval(function(){if(!document.getElementsByClassName('paused_autoscroll')[0])scrol_face(1);},1500);
document.getElementsByClassName('our_workers')[0].addEventListener('mouseover',function(){
  for (var jp = 0;jp<2;jp++){document.getElementsByClassName('button')[jp].classList.add('paused_autoscroll');}
  clearTimeout('timerrr');
  timerrr = setTimeout(function(){for (var jpjp = 0;jpjp<2;jpjp++){document.getElementsByClassName('button')[jpjp].classList.remove('paused_autoscroll');}},1000);
});

function tci(x){if (x[0]===undefined){return "";}else if(x[0]=="#"){return document.getElementById(x.substring(1))}else if(x[0]=="."){return document.getElementsByClassName(x);}else{return document.getElementsByTagName(x);}}
//var jshover = function(x,y){var hover_interval = setInterval(function(){if (tci(x).getBoundingClientRect().top < client_y_pos && tci(x).getBoundingClientRect().top + getComputedStyle(tci(x)).height > client_y_pos/* && tci(x).getBoundingClientRect().left < client_x_pos && tci(x).getBoundingClientRect().left + getComputedStyle(tci(x)).width > client_x_pos*/) {alert('hi');tci(x).classList.add("js_hovered")}else{tci(x).classList.remove('js_hovered');} },y);};
var jshover = function(x){var bvalue=false;tci('#logologo').addEventListener('mouseover',function(){bvalue= true;});tci('#logologo').addEventListener('mouseout',function(){bvalue= false;});return bvalue;};
setInterval(function(){if (jshover(tci('#logologo'))){tci('#logologo').style.background="black";}},5);
var client_x_pos;
var client_y_pos;
window.onload = function(){var numbertest = tci('#logologo').getBoundingClientRect().top + getComputedStyle(tci('#logologo')).height;
console.log(numbertest + ':' + tci('#logologo').getBoundingClientRect().top + ':' + getComputedStyle(tci('#logologo')).height);};



tci('body')[0].addEventListener('mousemove',function(){client_x_pos = event.clientX;});
tci('body')[0].addEventListener('mousemove',function(){client_y_pos = event.clientY;});
//
