document.getElementById('back_panel').style.left = panel_pos + 'px';
var top = document.getElementById('top');
var removed = false;
var clicked;
var where_mouse;
var exam = true;
var panel_pos = 100;
top.addEventListener('mousedown',function(e){if (e.target.id == "top") {where_mouse = e.clientX - document.getElementById('top').getBoundingClientRect().left;clicked = true;}});
top.addEventListener('mouseup',function(){clicked = false;});
top.addEventListener('mousemove',function(e){if (clicked && document.readyState === "complete")
{
if(e.clientX + (450 - where_mouse) >= document.documentElement.clientWidth - 20){
  document.getElementById('back_panel').style.left = document.documentElement.clientWidth - 20 - 450 + 'px';
}
else if (e.clientX - where_mouse <= 20){
  document.getElementById('back_panel').style.left = '20px';
}
  else {document.getElementById('back_panel').style.left = e.clientX - where_mouse + 'px';}

panel_pos = document.getElementById('top').getBoundingClientRect().left;
}});
document.getElementById('x').addEventListener('click',function(){if (exam){
document.getElementById('back_panel').style.bottom = "-" + getComputedStyle(document.getElementById('core'),'').height;exam = !exam;} else {
document.getElementById('back_panel').style.bottom = '0'; exam = !exam;}});

for (var ji = 0; ji < document.getElementsByClassName('clicable_image').length; ji++)
//  document.getElementsByClassName('clicable_image')[ji].addEventListener('abort',function(){this.classList.remove('clicable_image');});
  document.getElementsByClassName('clicable_image')[ji].addEventListener('click',function(){
    if (this.parentNode.id == "i489320480932"){
      document.getElementById("id589032485347893").appendChild(this);
      document.getElementById("id589032485347893").id="";
      document.getElementById('i489320480932').style.display = "none";
      document.body.style.overflow = "visible";

            this.classList.add("core_image");


    } else{
      this.parentNode.id = "id589032485347893";
      document.getElementById("i489320480932").appendChild(this);
      document.getElementById("i489320480932").style.display = "block";
      this.classList.add("core_image");





            this.classList.remove('core_image');
      document.body.style.overflow = "hidden";
    }
    document.getElementById('i489320480932').classList.toggle('i48390248092');
    this.classList.toggle('core_image');});



    document.getElementById('483290489024809').addEventListener('keyDown',function(){
       alert('test');

});

window.addEventListener('resize',function(){panel_pos = 50;if (document.documentElement.clientWidth <= 1100)
{
  document.getElementById('x').style.display="none";
  document.getElementsByClassName('wrapper')[0].insertBefore(
     document.getElementById('back_panel'),document.getElementsByClassName('special')[0]
  );
  document.getElementById('back_panel').style.display="block";
  document.getElementById('back_panel').style.position="static";
  document.getElementById('back_panel').style.width="100%";
}else{
  document.getElementById('x').style.display="block";
  document.getElementById('back_panel').style.display="block";
  document.getElementById('back_panel').style.right="100px";
  document.getElementById('back_panel').style.position="fixed";
  document.body.appendChild(document.getElementById('back_panel')
  );
  document.getElementById('back_panel').style.width="450px";
}

});
window.onload = function(){if (document.documentElement.clientWidth <= 1100)
{
  document.getElementById('x').style.display="none";
  document.getElementsByClassName('wrapper')[0].insertBefore(
     document.getElementById('back_panel'),document.getElementsByClassName('special')[0]
  );
  document.getElementById('back_panel').style.display="block";
  document.getElementById('back_panel').style.position="static";
  document.getElementById('back_panel').style.width="100%";
}
else{
  document.getElementById('x').style.display="block";
  document.getElementById('back_panel').style.display="block";
  document.getElementById('back_panel').style.right="100px";
  document.getElementById('back_panel').style.position="fixed";
  document.body.appendChild(document.getElementById('back_panel')
  );
  document.getElementById('back_panel').style.width="450px";
}
};
//setInterval(function(){var tklre = 500; getBoundingClientRect() = ++tklre;},200);

document.getElementById('5432890432890423890').addEventListener('click',function(){
  parentnode4213 = this.parentNode.parentNode.removeChild(this.parentNode);
  document.getElementsByClassName('exam_form_exam')[0].style.display="block";
  document.getElementById('i382190809321').value = "";
  document.getElementById('483290489024809').value = "";
  document.getElementById('4893248902321809').value = "";
  document.getElementById('textarea483290483290').value = "";
  document.getElementsByClassName('exam_form_exam')[0].classList.remove('line_up_4382948902');
})

document.getElementById('button5743894').addEventListener('click',function(){
  document.getElementsByClassName('exam_form_exam')[0].classList.add('line_up_4382948902');
  setTimeout(function(){document.getElementById('core').appendChild(parentnode4213)},600);
});

document.getElementById('p480239482903849023').addEventListener('click',function(){document.location.href = "https://ynoplanetashka.github.io/web-sait_father/example.html";});
document.getElementById('p48023948290384902323').addEventListener('click',function(){document.location.href = "https://ynoplanetashka.github.io/web-sait_father/example.html";});

// услуги

for (var i = 0; i < document.getElementsByClassName('core').length; i++) {
  document.getElementsByClassName('core')[i].addEventListener('click',function(){
    try {
      document.getElementById('id4583290483290').innerHTML = '';
    } catch (e) {
      document.getElementById('id4583290483290').innerTEXT = '';
    }
    for (var iqs = 0; iqs < document.getElementsByClassName('core').length; iqs++)
      document.getElementsByClassName('core')[iqs].classList.remove('cl432890432809');
    this.classList.add('cl432890432809');
    document.getElementById('id4583290483290').appendChild(this.parentNode.getElementsByClassName('ser-info')[0].cloneNode(true));

  })
}


var exa4829039 = document.getElementsByClassName('core')[0]

exa4829039.classList.add('cl432890432809');
var par43890321 = exa4829039.parentNode.getElementsByClassName('ser-info')[0].cloneNode(true);
document.getElementById('id4583290483290').appendChild(par43890321);



// window.onload = function(){
//
// };



//document.getElementById('button5743894')
// window.onload = function(){
// xhr('GET','http://localhost/httprequesttest/exam.php',function(jh){console.log(jh)});
// };
// function xhr(meth,ip,func, param){
//   var xml = new XMLHttpRequest();
//   xml.addEventListener('readystatechange',function(){
//     alert(xml.readyState);
//     if (xml.readyState == 4 && xml.status == 200)
//     alert(1);
//     func(xml.responseText);
//   });
//   xml.open(meth,ip);
//   xml.send();
// }




// for (var i = 0; i < document.getElementsByClassName('service').length; i++)
//   document.getElementsByClassName('service')[i].addEventListener('click',function(){
//     var bool = 0;
//     for (var iq = 0; iq < document.getElementsByClassName('service').length; iq++)
//       if(getComputedStyle(document.getElementsByClassName('service')[iq]).height
//       == getComputedStyle(document.getElementsByClassName('service')[iq].getElementsByClassName('core')[0]).height)
//        bool++;
//
//     if (bool == 2){
//     for (var iv = 0; iv < document.getElementsByClassName('service').length; iv++)
//       document.getElementsByClassName('service')[iv].style.height
//       = getComputedStyle(document.getElementsByClassName('service')[iv].getElementsByClassName('core')[0]).height;
//     this.style.height =
//     Number(getComputedStyle(this.getElementsByClassName('core')[0]).height.substr(0,getComputedStyle(this.getElementsByClassName('core')[0]).height.length - 2))
//      + Number(getComputedStyle(this.getElementsByClassName('ser-info')[0]).height.substr(0,getComputedStyle(this.getElementsByClassName('ser-info')[0]).height.length - 2)) + 'px';
//    }
//   });








// прокрутка к верху страницы от футера

document.getElementsByTagName('footer')[0].addEventListener('click',function(){
  window.scrollTo(0,0);
});











//var example_1 = [[5432,213,432],[3321,['geyb down',5432,123],32],5,'321'];

// zamk_cl(document.body);
//
// //console.log(document.body.childNodes[0].__proto__);
//
// function zamk_cl(a){
//   a.style.cursor = "pointer";
//   for (var h = 0; h < a.childNodes.length; h++)
//   if (a.childNodes[h].__proto__ != "Text")
//     zamk_cl(a.childNodes[h]);
// }
//

// for (var ji4 = 0; ji4 < document.getElementsByName('label_2').length; ji4++){
//   document.getElementsByName('label_2')[ji4].addEventListener('KeyUp',function(){
//     console.log(this.value.length);
//     if (this.value.length > 3){
//       document.getElementsByName('label_3')[0].focus();
//     }
//   });
// }




// var t = document.createElement('div');
// if (new Date().getMinutes()<10) t.innerHTML = new Date().getHours() + '&nbsp:&nbsp0' + new Date().getMinutes(); else t.innerHTML = new Date().getHours() + '&nbsp:&nbsp' + new Date().getMinutes();
// document.getElementById('time').appendChild(t);
//
// setInterval(function(){if (new Date().getMinutes()<10) t.innerHTML = new Date().getHours() + '&nbsp&nbsp&nbsp0' + new Date().getMinutes(); else t.innerHTML = new Date().getHours() + '&nbsp&nbsp&nbsp' + new Date().getMinutes();setTimeout(function(){
//   if (new Date().getMinutes()<10) t.innerHTML = new Date().getHours() + '&nbsp:&nbsp0' + new Date().getMinutes(); else t.innerHTML = new Date().getHours() + '&nbsp:&nbsp' + new Date().getMinutes();},500)},3000);
