function onPlanetsLoaded(){
// get the svg element in the html DOM
var svgContainer = document.querySelector("#svgPlanets");
// now get the SVG DOM and cache into a variable
var svgContent = svgContainer.contentDocument; 
// … now do stuff to svg DOM …..
// var click_planet = svgContent.querySelector("#click");
//planets
var mars = svgContent.querySelector("#mars");
var earth = svgContent.querySelector("#earth");
var mercury = svgContent.querySelector("#mercury");
var venus = svgContent.querySelector("#venus");
var jupiter = svgContent.querySelector("#jupiter");
var pluto = svgContent.querySelector("#pluto");
var neptune = svgContent.querySelector("#neptune");
var uranus = svgContent.querySelector("#uranus");
var saturn = svgContent.querySelector("#saturn");
//tags
var mars_tag = svgContent.querySelector("#mars-tag");
var earth_tag = svgContent.querySelector("#earth-tag");
var mercury_tag = svgContent.querySelector("#mercury-tag");
var venus_tag = svgContent.querySelector("#venus-tag");
var jupiter_tag = svgContent.querySelector("#jupiter-tag");
var pluto_tag = svgContent.querySelector("#pluto-tag");
var neptune_tag = svgContent.querySelector("#neptune-tag");
var uranus_tag = svgContent.querySelector("#uranus-tag");
var saturn_tag = svgContent.querySelector("#saturn-tag");

function show(elID) {
	$("#planets").children().addClass("hidden");

	var el = document.getElementById(elID);

	$(el).removeClass("hidden").addClass('show')

}

$(mars).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.2, {opacity:"0"})
		TweenMax.to($(earth), 0.2, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.2, {opacity: "0.45"})
		TweenMax.to($(venus), 0.2, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.2, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.2, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.2, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.2, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.2, {opacity: "0.45"})
		TweenMax.to($(mars_tag), 0.2, {opacity: "1"})
		TweenMax.to($(mars), 0.2, {css:{scaleX: 1.5, scaleY: 1.5, transformOrigin: "center center", cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(earth), 0.2, {opacity: "1"})
		TweenMax.to($(mercury), 0.2, {opacity: "1"})
		TweenMax.to($(venus), 0.2, {opacity: "1"})
		TweenMax.to($(jupiter), 0.2, {opacity: "1"})
		TweenMax.to($(pluto), 0.2, {opacity: "1"})
		TweenMax.to($(neptune), 0.2, {opacity: "1"})
		TweenMax.to($(uranus), 0.2, {opacity: "1"})
		TweenMax.to($(saturn), 0.2, {opacity: "1"})
		TweenMax.to($(mars_tag), 0.2, {opacity: "0"})
		TweenMax.to($(mars), 0.2, {scale: 1})
	}
});


$(mars).click(
	function(){
		show('mars_info')
		TweenMax.to($(mars_tag), 0.1, {opacity: "0"})
	}
);

$(earth).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth_tag), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {css:{scaleX: 1.5, scaleY: 1.5, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {opacity: "1"})
		TweenMax.to($(earth_tag), 0.1, {opacity: "0"})
		TweenMax.to($(earth), 0.1, {scale: 1})
	}
});


$(earth).click(
	function(){
		show('earth_info')
		TweenMax.to($(earth_tag), 0.1, {opacity: "0"})
	}

);

$(mercury).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury_tag), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {css:{scaleX: 1.5, scaleY: 1.5, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {opacity: "1"})
		TweenMax.to($(mercury_tag), 0.1, {opacity: "0"})
		TweenMax.to($(mercury), 0.1, {scale: 1})
	}
});

$(mercury).click(
	function(){
		show('mercury_info')
		TweenMax.to($(mercury_tag), 0.1, {opacity: "0"})
	}
);

$(venus).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus_tag), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {css:{scaleX: 1.5, scaleY: 1.5, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {opacity: "1"})
		TweenMax.to($(venus_tag), 0.1, {opacity: "0"})
		TweenMax.to($(venus), 0.1, {scale: 1})
	}
});

$(venus).click(
	function(){
		show('venus_info')
		TweenMax.to($(venus_tag), 0.1, {opacity: "0"})
	}
);

$(jupiter).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter_tag), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {css:{scaleX: 1.3, scaleY: 1.3, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter_tag), 0.1, {opacity: "0"})
		TweenMax.to($(jupiter), 0.1, {scale: 1})
	}
});

$(jupiter).click(
	function(){
		show('jupiter_info')
		TweenMax.to($(jupiter_tag), 0.1, {opacity: "0"})
	}
);

$(saturn).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn_tag), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {css:{scaleX: 1.3, scaleY: 1.3, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {opacity: "1"})
		TweenMax.to($(saturn_tag), 0.1, {opacity: "0"})
		TweenMax.to($(saturn), 0.1, {scale: 1})
	}
});

$(saturn).click(
	function(){
		show('saturn_info')
		TweenMax.to($(saturn_tag), 0.1, {opacity: "0"})
	}
);

$(uranus).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus_tag), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {css:{scaleX: 1.5, scaleY: 1.5, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {opacity: "1"})
		TweenMax.to($(uranus_tag), 0.1, {opacity: "0"})
		TweenMax.to($(uranus), 0.1, {scale: 1})
	}
});

$(uranus).click(
	function(){
		show('uranus_info')
		TweenMax.to($(uranus_tag), 0.1, {opacity: "0"})
	}
);

$(neptune).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune_tag), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {css:{scaleX: 1.5, scaleY: 1.5, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {opacity: "1"})
		TweenMax.to($(neptune_tag), 0.1, {opacity: "0"})
		TweenMax.to($(neptune), 0.1, {scale: 1})
	}
});

$(neptune).click(
	function(){
		show('neptune_info')
		TweenMax.to($(neptune_tag), 0.1, {opacity: "0"})
	}
);

$(pluto).on({
	mouseenter: function() {
		// TweenMax.to($(click_planet), 0.1, {opacity:"0"})
		TweenMax.to($(mars), 0.1, {opacity: "0.45"})
		TweenMax.to($(earth), 0.1, {opacity: "0.45"})
		TweenMax.to($(venus), 0.1, {opacity: "0.45"})
		TweenMax.to($(jupiter), 0.1, {opacity: "0.45"})
		TweenMax.to($(mercury), 0.1, {opacity: "0.45"})
		TweenMax.to($(neptune), 0.1, {opacity: "0.45"})
		TweenMax.to($(uranus), 0.1, {opacity: "0.45"})
		TweenMax.to($(saturn), 0.1, {opacity: "0.45"})
		TweenMax.to($(pluto_tag), 0.1, {opacity: "1"})
		TweenMax.to($(pluto), 0.1, {css:{scaleX: 1.5, scaleY: 1.5, transformOrigin: "center center" ,cursor:"pointer"}})
	},
	mouseleave: function() {
		TweenMax.to($(mars), 0.1, {opacity: "1"})
		TweenMax.to($(earth), 0.1, {opacity: "1"})
		TweenMax.to($(venus), 0.1, {opacity: "1"})
		TweenMax.to($(jupiter), 0.1, {opacity: "1"})
		TweenMax.to($(mercury), 0.1, {opacity: "1"})
		TweenMax.to($(neptune), 0.1, {opacity: "1"})
		TweenMax.to($(uranus), 0.1, {opacity: "1"})
		TweenMax.to($(saturn), 0.1, {opacity: "1"})
		TweenMax.to($(pluto_tag), 0.1, {opacity: "0"})
		TweenMax.to($(pluto), 0.1, {scale: 1})
	}
});

$(pluto).click(
	function(){
		show('pluto_info')
		TweenMax.to($(pluto_tag), 0.1, {opacity: "0"})
	}
);

$("#mars_dd").click(
	function() {
		show('mars_info')
	}
);

$("#mercury_dd").click(
	function() {
		show('mercury_info')
	}
);

$("#earth_dd").click(
	function() {
		show('earth_info')
	}
);

$("#venus_dd").click(
	function() {
		show('venus_info')
	}
);

$("#jupiter_dd").click(
	function() {
		show('jupiter_info')
	}
);

$("#saturn_dd").click(
	function() {
		show('saturn_info')
	}
);

$("#uranus_dd").click(
	function() {
		show('uranus_info')
	}
);

$("#neptune_dd").click(
	function() {
		show('neptune_info')
	}
);

$("#pluto_dd").click(
	function() {
		show('pluto_info')
	}
);
}

