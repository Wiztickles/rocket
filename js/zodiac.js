function onZodiacLoaded() {
	// get the svg element in the html DOM
	var svgContainer = document.querySelector("#svgZodiac");
	// now get the SVG DOM and cache into a variable
	var svgContent = svgContainer.contentDocument; 
	// … now do stuff to svg DOM …..
	// var click_planet = svgContent.querySelector("#click");
	//planets
	var a = svgContent.querySelector("#a");
	var b = svgContent.querySelector("#b");
	var c = svgContent.querySelector("#c");
	var d = svgContent.querySelector("#d");
	var e = svgContent.querySelector("#e");
	var f = svgContent.querySelector("#f");
	var g = svgContent.querySelector("#g");
	var h = svgContent.querySelector("#h");
	var i = svgContent.querySelector("#i");
	var j = svgContent.querySelector("#j");
	var k = svgContent.querySelector("#k");
	var l = svgContent.querySelector("#l");
	//tags
	var a_tag = svgContent.querySelector("#a-tag");
	var b_tag = svgContent.querySelector("#b-tag");
	var c_tag = svgContent.querySelector("#c-tag");
	var d_tag = svgContent.querySelector("#d-tag");
	var e_tag = svgContent.querySelector("#e-tag");
	var f_tag = svgContent.querySelector("#f-tag");
	var g_tag = svgContent.querySelector("#g-tag");
	var h_tag = svgContent.querySelector("#h-tag");
	var i_tag = svgContent.querySelector("#i-tag");
	var j_tag = svgContent.querySelector("#j-tag");
	var k_tag = svgContent.querySelector("#k-tag");
	var l_tag = svgContent.querySelector("#l-tag");



	function show(elID) {
		$("#planets").children().addClass("hidden");

		var el = document.getElementById(elID);

		$(el).removeClass("hidden").addClass('show')

	}

	$(a).on({
		mouseenter: function() {
			TweenMax.to($(a_tag), 0.2, {opacity: "1"})
			TweenMax.to($(a), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(a_tag), 0.2, {opacity: "0"})
		}
	});

	$(a).click(
		function(){
			show('a_info')
			TweenMax.to($(a_tag), 0.1, {opacity: "0"})
		}
	);

	$(b).on({
		mouseenter: function() {
			TweenMax.to($(b_tag), 0.2, {opacity: "1"})
			TweenMax.to($(b), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(b_tag), 0.2, {opacity: "0"})
		}
	});

	$(b).click(
		function(){
			show('b_info')
			TweenMax.to($(a_tag), 0.1, {opacity: "0"})
		}
	);

	$(c).on({
		mouseenter: function() {
			TweenMax.to($(c_tag), 0.2, {opacity: "1"})
			TweenMax.to($(c), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(c_tag), 0.2, {opacity: "0"})
		}
	});

	$(c).click(
		function(){
			show('c_info')
			TweenMax.to($(c_tag), 0.1, {opacity: "0"})
		}
	);

	$(d).on({
		mouseenter: function() {
			TweenMax.to($(d_tag), 0.2, {opacity: "1"})
			TweenMax.to($(d), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(d_tag), 0.2, {opacity: "0"})
		}
	});

	$(d).click(
		function(){
			show('d_info')
			TweenMax.to($(d_tag), 0.1, {opacity: "0"})
		}
	);

	$(e).on({
		mouseenter: function() {
			TweenMax.to($(e_tag), 0.2, {opacity: "1"})
			TweenMax.to($(e), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(e_tag), 0.2, {opacity: "0"})
		}
	});

	$(e).click(
		function(){
			show('e_info')
			TweenMax.to($(e_tag), 0.1, {opacity: "0"})
		}
	);

	$(f).on({
		mouseenter: function() {
			TweenMax.to($(f_tag), 0.2, {opacity: "1"})
			TweenMax.to($(f), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(f_tag), 0.2, {opacity: "0"})
		}
	});

	$(f).click(
		function(){
			show('f_info')
			TweenMax.to($(f_tag), 0.1, {opacity: "0"})
		}
	);

	$(g).on({
		mouseenter: function() {
			TweenMax.to($(g_tag), 0.2, {opacity: "1"})
			TweenMax.to($(g), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(g_tag), 0.2, {opacity: "0"})
		}
	});

	$(g).click(
		function(){
			show('g_info')
			TweenMax.to($(g_tag), 0.1, {opacity: "0"})
		}
	);

	$(h).on({
		mouseenter: function() {
			TweenMax.to($(h_tag), 0.2, {opacity: "1"})
			TweenMax.to($(h), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(h_tag), 0.2, {opacity: "0"})
		}
	});

	$(h).click(
		function(){
			show('h_info')
			TweenMax.to($(h_tag), 0.1, {opacity: "0"})
		}
	);

	$(i).on({
		mouseenter: function() {
			TweenMax.to($(i_tag), 0.2, {opacity: "1"})
			TweenMax.to($(i), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(i_tag), 0.2, {opacity: "0"})
		}
	});

	$(i).click(
		function(){
			show('i_info')
			TweenMax.to($(i_tag), 0.1, {opacity: "0"})
		}
	);

	$(j).on({
		mouseenter: function() {
			TweenMax.to($(j_tag), 0.2, {opacity: "1"})
			TweenMax.to($(j), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(j_tag), 0.2, {opacity: "0"})
		}
	});

	$(j).click(
		function(){
			show('j_info')
			TweenMax.to($(j_tag), 0.1, {opacity: "0"})
		}
	);

	$(k).on({
		mouseenter: function() {
			TweenMax.to($(k_tag), 0.2, {opacity: "1"})
			TweenMax.to($(k), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(k_tag), 0.2, {opacity: "0"})
		}
	});

	$(k).click(
		function(){
			show('k_info')
			TweenMax.to($(k_tag), 0.1, {opacity: "0"})
		}
	);

	$(l).on({
		mouseenter: function() {
			TweenMax.to($(l_tag), 0.2, {opacity: "1"})
			TweenMax.to($(l), 0.2, {css:{cursor:"pointer"}})
		},
		mouseleave: function() {
			TweenMax.to($(l_tag), 0.2, {opacity: "0"})
		}
	});

	$(l).click(
		function(){
			show('l_info')
			TweenMax.to($(l_tag), 0.1, {opacity: "0"})
		}
	);

	$("#a_dd").click(
		function() {
			show('a_info')
		}
	);

	$("#b_dd").click(
		function() {
			show('b_info')
		}
	);

	$("#c_dd").click(
		function() {
			show('c_info')
		}
	);

	$("#d_dd").click(
		function() {
			show('d_info')
		}
	);

	$("#e_dd").click(
		function() {
			show('e_info')
		}
	);

	$("#f_dd").click(
		function() {
			show('f_info')
		}
	);

	$("#g_dd").click(
		function() {
			show('g_info')
		}
	);

	$("#h_dd").click(
		function() {
			show('h_info')
		}
	);

	$("#i_dd").click(
		function() {
			show('i_info')
		}
	);

	$("#j_dd").click(
		function() {
			show('j_info')
		}
	);

	$("#k_dd").click(
		function() {
			show('k_info')
		}
	);

	$("#l_dd").click(
		function() {
			show('l_info')
		}
	);







}