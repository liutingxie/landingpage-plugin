/*
* @Author: liutingxie
* @Date:   2018-01-26 17:19:45
* @Last Modified by:   liutingxie
* @Last Modified time: 2018-01-30 22:13:16
*/
jQuery(document).ready(function($) {
	function n(e, t) {
		return Math.floor(Math.random() * (t - e + 1) + e);
	};

	function transformData(data) {
		//translate
		var translate = "translate(" + (data.translateX + data.ratio * data.rotateX) + ", " + (data.translateY + data.ratio * data.rotateY) + ")";

		//rotate
		var rotate = "rotate("+ (data.angle + data.ratio * data.rotateAngle) + " 40 23.5)";

		return translate + " " + rotate;
	};

	var CreateSvg = function (el, arr) {

		for (var i = 0; i < arr.length; i++) {

			var d = "M17.25 15.95c-.02.1-.2.94-.57 1.9-.37.98-.9 2.15-2.06 2.82-.92.53-1.84.66-2.6.53-.75-.13-1.3-.46-1.68-.68-.82-.47-1.32-1.12-2.1-1.65-.78-.52-1.75-.96-3.3-.96-1.6 0-2.43.3-3 1.03-.56.72-.94 2.15-.94 4.57 0 2.42.38 3.85.95 4.57.56.72 1.38 1.03 3 1.03 1.54 0 2.5-.45 3.3-.97.77-.53 1.27-1.18 2.1-1.65.36-.22.93-.55 1.68-.68.75-.13 1.67 0 2.6.53 1.15.67 1.68 1.84 2.05 2.8.38.98.54 1.82.54 1.82L17.24 46h14.7c.07 0 .67-.13 1.42-.42.78-.3 1.57-.83 1.77-1.17.34-.57.35-.9.3-1.22-.06-.32-.23-.64-.44-1-.16-.26-.9-.96-1.58-2-.7-1-1.32-2.47-1.32-4.43 0-1.92.48-3.57 1.8-4.6 1.34-1.05 3.22-1.4 5.84-1.4 2.62 0 4.5.35 5.84 1.4 1.33 1.03 1.8 2.68 1.8 4.6 0 1.96-.62 3.42-1.3 4.44-.7 1.02-1.43 1.72-1.58 1.97-.2.37-.38.7-.43 1-.06.33-.05.66.28 1.24.2.35 1 .87 1.78 1.18.75.3 1.35.4 1.4.42h14.62V31.05c.02-.1.18-.94.56-1.9.38-.98.92-2.15 2.07-2.82.7-.4 1.42-.58 2.05-.58.22 0 .42.02.62.05.75.13 1.3.46 1.7.68.8.47 1.3 1.12 2.1 1.65.76.52 1.72.96 3.26.96 1.57 0 2.4-.32 2.95-1.03.56-.72.94-2.15.94-4.57 0-2.42-.4-3.85-.95-4.57-.56-.7-1.38-1.02-2.95-1.02-1.54 0-2.5.45-3.27.97-.8.53-1.28 1.18-2.1 1.65-.38.22-.94.55-1.7.68-.18.04-.4.05-.6.05-.63 0-1.35-.17-2.06-.58-1.15-.67-1.7-1.84-2.06-2.8-.37-.98-.53-1.82-.53-1.82L62.15 1H47.53c-.06 0-.66.13-1.4.42-.8.3-1.58.83-1.78 1.18-.33.57-.34.9-.3 1.22.07.32.24.64.45 1 .15.26.88.96 1.57 2 .6.88 1.16 2.1 1.3 3.72l.02.7c0 1.45-.28 2.74-.98 3.73-.23.34-.5.63-.84.9-1.16.9-2.75 1.28-4.9 1.36l-.94.02c-2.62 0-4.5-.35-5.83-1.4-1.32-1.03-1.8-2.68-1.8-4.6 0-1.96.62-3.42 1.32-4.44.7-1.02 1.42-1.72 1.57-1.97.1-.2.2-.36.27-.53.07-.16.13-.32.15-.48.06-.32.05-.65-.3-1.22-.2-.35-.98-.87-1.76-1.18-.75-.3-1.34-.4-1.4-.42h-14.7v14.95z",
				fill = "#0074ff",
				fillRule = "evenodd";

			var g = d3.select(el).append("g")
				.attr("opacity", arr[i].opacity)
				.attr("transform", transformData(arr[i]));


			g.append("path")
				.attr("d", d)
				.attr("fill", fill)
				.attr("fillRule", fillRule);

		}

	};

	function puzzle (position) {
		var M = {
			width: 504,
			height: 128
		},
		k = 220,
		_ = 60,
		H = {
			width: M.width + 2 * k,
			height: M.height + 2 * _
		},
		z = {
			width: 80,
			height: 47
		},
		F = 10,
		N = k,
		C = 20 + _,
		L = [.46, .33, .39, .41, .29, .47, .26, .47, .31, .19, .47, .34, .24, .26, .42, .15, .5, .45, .24, .11];

		if($("#puzzle-container").length) {
			var top = position ? position.top : 0,
				bottom = position ? position.bottom : 0;

			var o = top + (bottom - top) / 2,
				u = window.innerHeight / 2,
				c = Math.max(0, Math.min(o - u, u) / u);

			for (var arr = [], i = 0; i < 10; i++) {
				var a = i % 2 == 0,
					r = i * (z.width / 2 + 7.3) + N,
					l = ((F - 1) / 2 - i) / (F / 2) * -1;

				arr.push({
	 				translateX: r,
	 				translateY: C,
	 				rotateX: n(l * k * .8, l * k * 1),
	 				rotateY: n(10, 10 - _),
	 				rotateAngle: n(-360 * l, 360 * l),
					angle: a ? 0 : 90,
					opacity: L[i],
					ratio: c,

				});

				arr.push({
	 				translateX: r,
	 				translateY: z.height + C,
	 				rotateX: n(l * k * .8, l * k * 1),
	 				rotateY: n(-10, _ - 10),
	 				rotateAngle: n(-360 * l, 360 * l),
					angle: a ? 90 : 0,
					opacity: L[i + F],
					ratio: c
				});
			}

			$("#puzzle-container g").each(function(index, el) {
				d3.select(el).transition().attr("transform", transformData(arr[index]));
			});


		}
		else {
			//If not #puzzle-container, then create div id name is puzzle-container
			var e = $("#puzzle"),
				div = $("<div>").appendTo(e).css({
					position: "relative",
					height: H.height,
					margin: "0 auto",
					display: "flex",
					justifyContent: "center"
				}).attr("id", "puzzle-container"),
				svg = d3.select("#puzzle-container").append("svg")
					// .attr("position", "absolute")
					// .attr("top", -_)
					// .attr("display", "block")
					.attr("width", H.width)
					.attr("height", H.height);

			var top = position ? position.top : 0,
				bottom = position ? position.bottom : 0;

			var o = top + (bottom - top) / 2,
				u = window.innerHeight / 2,
				c = Math.max(0, Math.min(o - u, u) / u);

			for (var arr = [], i = 0; i < 10; i++) {
				var a = i % 2 == 0,
					r = i * (z.width / 2 + 7.3) + N,
					l = ((F - 1) / 2 - i) / (F / 2) * -1;

				arr.push({
	 				translateX: r,
	 				translateY: C,
	 				rotateX: n(l * k * .8, l * k * 1),
	 				rotateY: n(10, 10 - _),
	 				rotateAngle: n(-360 * l, 360 * l),
					angle: a ? 0 : 90,
					opacity: L[i],
					ratio: c,

				});

				arr.push({
	 				translateX: r,
	 				translateY: z.height + C,
	 				rotateX: n(l * k * .8, l * k * 1),
	 				rotateY: n(-10, _ - 10),
	 				rotateAngle: n(-360 * l, 360 * l),
					angle: a ? 90 : 0,
					opacity: L[i + F],
					ratio: c
				});
			}

			for (var i = 0; i < arr.length; i++) {

				var d = "M17.25 15.95c-.02.1-.2.94-.57 1.9-.37.98-.9 2.15-2.06 2.82-.92.53-1.84.66-2.6.53-.75-.13-1.3-.46-1.68-.68-.82-.47-1.32-1.12-2.1-1.65-.78-.52-1.75-.96-3.3-.96-1.6 0-2.43.3-3 1.03-.56.72-.94 2.15-.94 4.57 0 2.42.38 3.85.95 4.57.56.72 1.38 1.03 3 1.03 1.54 0 2.5-.45 3.3-.97.77-.53 1.27-1.18 2.1-1.65.36-.22.93-.55 1.68-.68.75-.13 1.67 0 2.6.53 1.15.67 1.68 1.84 2.05 2.8.38.98.54 1.82.54 1.82L17.24 46h14.7c.07 0 .67-.13 1.42-.42.78-.3 1.57-.83 1.77-1.17.34-.57.35-.9.3-1.22-.06-.32-.23-.64-.44-1-.16-.26-.9-.96-1.58-2-.7-1-1.32-2.47-1.32-4.43 0-1.92.48-3.57 1.8-4.6 1.34-1.05 3.22-1.4 5.84-1.4 2.62 0 4.5.35 5.84 1.4 1.33 1.03 1.8 2.68 1.8 4.6 0 1.96-.62 3.42-1.3 4.44-.7 1.02-1.43 1.72-1.58 1.97-.2.37-.38.7-.43 1-.06.33-.05.66.28 1.24.2.35 1 .87 1.78 1.18.75.3 1.35.4 1.4.42h14.62V31.05c.02-.1.18-.94.56-1.9.38-.98.92-2.15 2.07-2.82.7-.4 1.42-.58 2.05-.58.22 0 .42.02.62.05.75.13 1.3.46 1.7.68.8.47 1.3 1.12 2.1 1.65.76.52 1.72.96 3.26.96 1.57 0 2.4-.32 2.95-1.03.56-.72.94-2.15.94-4.57 0-2.42-.4-3.85-.95-4.57-.56-.7-1.38-1.02-2.95-1.02-1.54 0-2.5.45-3.27.97-.8.53-1.28 1.18-2.1 1.65-.38.22-.94.55-1.7.68-.18.04-.4.05-.6.05-.63 0-1.35-.17-2.06-.58-1.15-.67-1.7-1.84-2.06-2.8-.37-.98-.53-1.82-.53-1.82L62.15 1H47.53c-.06 0-.66.13-1.4.42-.8.3-1.58.83-1.78 1.18-.33.57-.34.9-.3 1.22.07.32.24.64.45 1 .15.26.88.96 1.57 2 .6.88 1.16 2.1 1.3 3.72l.02.7c0 1.45-.28 2.74-.98 3.73-.23.34-.5.63-.84.9-1.16.9-2.75 1.28-4.9 1.36l-.94.02c-2.62 0-4.5-.35-5.83-1.4-1.32-1.03-1.8-2.68-1.8-4.6 0-1.96.62-3.42 1.32-4.44.7-1.02 1.42-1.72 1.57-1.97.1-.2.2-.36.27-.53.07-.16.13-.32.15-.48.06-.32.05-.65-.3-1.22-.2-.35-.98-.87-1.76-1.18-.75-.3-1.34-.4-1.4-.42h-14.7v14.95z",
					fill = "#0074ff",
					fillRule = "evenodd";

				var g = svg.append("g")
					.attr("opacity", arr[i].opacity)
					.attr("transform", transformData(arr[i]));


				g.append("path")
					.attr("d", d)
					.attr("fill", fill)
					.attr("fillRule", fillRule);
			}
		}
	};

	puzzle();

	$(window).scroll(function(event) {

		// puzzle(document.getElementById("puzzle-container").getBoundingClientRect());

	});

	// $(window).resize(function(event) {
	// 	if($(window).width() < 730) {
	// 		$("#puzzle").empty();
	// 	}
	// });
});
