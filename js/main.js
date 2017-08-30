$(onLoaded)

function onSVGContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgObject");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onAriesContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgAries");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onCancerContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgCancer");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onCapContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgCap");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onGemniContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgGemni");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onLeoContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgLeo");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onLibraContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgLibra");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onPiscesContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgPisces");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onSagContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgSag");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onScoContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgSco");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onTarContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgTar");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}

function onVigContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgVig");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var star = svgContent.querySelector("#star");
var circle = svgContent.querySelector("#circle");
var line = svgContent.querySelector("#line");


var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((star), {opacity:"0"}).set((circle), {opacity:"0"}).set((line), {opacity:"0"})

var t2 = new TimelineMax({repeat:-1,repeatDelay:0.5,paused:false});
t2.to((star), 1.5, {opacity:"1", ease: Power1.easeIn}).to((circle), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"1", ease: Power1.easeIn}).to((line), 1.5, {opacity:"0", ease: Power1.easeIn},"+=3").to((circle), 1.5, {opacity:"0", ease: Power1.easeIn}).to((star), 1.5, {opacity:"0", ease: Power1.easeIn})

}



function onLogoContentLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgLogo");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
var text = svgContent.querySelector("#Text");
var ship = svgContent.querySelector("#Ship");

var t1 = new TimelineMax({repeat:0,paused:false});
t1.set((text), {opacity:"0"}).set(".logo", {x:-650,y:650}).set(".navHome", {y:+1000})

var t2 = new TimelineMax({repeat:0,paused:false});
t2.to(".logo", 0.8, {x:0,y:0,ease: Power1.easeOut}).to((text),0.4,{opacity:1}).to(".navHome",0.4,{opacity:1,y:0, ease: Back.easeOut})


}