/*
* @Author: liutingxie
* @Date:   2018-01-24 12:54:15
* @Last Modified by:   liutingxie
* @Last Modified time: 2018-01-27 10:35:18
*/
		function(e, t, a) {
			"use strict";

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function n(e, t) {
				return Math.floor(Math.random() * (t - e + 1) + e)
			}

			function l() {
				for (var e = [], t = 0; t < F; t++) {
					var a = t % 2 == 0,
						r = t * (z.width / 2 + 7.3) + N,
						l = ((F - 1) / 2 - t) / (F / 2) * -1;
					e.push({
						x: r,
						y: C,
						offsetX: n(l * k * .8, l * k * 1),
						offsetY: n(10, 10 - _),
						offsetAngle: n(-360 * l, 360 * l),
						angle: a ? 0 : 90,
						opacity: L[t]
					}), e.push({
						x: r,
						y: z.height + C,
						offsetX: n(l * k * .8, l * k * 1),
						offsetY: n(-10, _ - 10),
						offsetAngle: n(-360 * l, 360 * l),
						angle: a ? 90 : 0,
						opacity: L[t + F]
					})
				}
				return e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = a(3),
				o = r(i),
				u = a(1),
				c = r(u),
				d = a(2),
				s = r(d),
				f = a(4),
				m = r(f),
				h = a(5),
				p = r(h),
				y = a(13),
				g = r(y),
				v = a(0),
				E = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
					return t.default = e, t
				}(v),
				b = a(6),
				w = r(b),
				x = E.createElement("path", {
					d: "M17.25 15.95c-.02.1-.2.94-.57 1.9-.37.98-.9 2.15-2.06 2.82-.92.53-1.84.66-2.6.53-.75-.13-1.3-.46-1.68-.68-.82-.47-1.32-1.12-2.1-1.65-.78-.52-1.75-.96-3.3-.96-1.6 0-2.43.3-3 1.03-.56.72-.94 2.15-.94 4.57 0 2.42.38 3.85.95 4.57.56.72 1.38 1.03 3 1.03 1.54 0 2.5-.45 3.3-.97.77-.53 1.27-1.18 2.1-1.65.36-.22.93-.55 1.68-.68.75-.13 1.67 0 2.6.53 1.15.67 1.68 1.84 2.05 2.8.38.98.54 1.82.54 1.82L17.24 46h14.7c.07 0 .67-.13 1.42-.42.78-.3 1.57-.83 1.77-1.17.34-.57.35-.9.3-1.22-.06-.32-.23-.64-.44-1-.16-.26-.9-.96-1.58-2-.7-1-1.32-2.47-1.32-4.43 0-1.92.48-3.57 1.8-4.6 1.34-1.05 3.22-1.4 5.84-1.4 2.62 0 4.5.35 5.84 1.4 1.33 1.03 1.8 2.68 1.8 4.6 0 1.96-.62 3.42-1.3 4.44-.7 1.02-1.43 1.72-1.58 1.97-.2.37-.38.7-.43 1-.06.33-.05.66.28 1.24.2.35 1 .87 1.78 1.18.75.3 1.35.4 1.4.42h14.62V31.05c.02-.1.18-.94.56-1.9.38-.98.92-2.15 2.07-2.82.7-.4 1.42-.58 2.05-.58.22 0 .42.02.62.05.75.13 1.3.46 1.7.68.8.47 1.3 1.12 2.1 1.65.76.52 1.72.96 3.26.96 1.57 0 2.4-.32 2.95-1.03.56-.72.94-2.15.94-4.57 0-2.42-.4-3.85-.95-4.57-.56-.7-1.38-1.02-2.95-1.02-1.54 0-2.5.45-3.27.97-.8.53-1.28 1.18-2.1 1.65-.38.22-.94.55-1.7.68-.18.04-.4.05-.6.05-.63 0-1.35-.17-2.06-.58-1.15-.67-1.7-1.84-2.06-2.8-.37-.98-.53-1.82-.53-1.82L62.15 1H47.53c-.06 0-.66.13-1.4.42-.8.3-1.58.83-1.78 1.18-.33.57-.34.9-.3 1.22.07.32.24.64.45 1 .15.26.88.96 1.57 2 .6.88 1.16 2.1 1.3 3.72l.02.7c0 1.45-.28 2.74-.98 3.73-.23.34-.5.63-.84.9-1.16.9-2.75 1.28-4.9 1.36l-.94.02c-2.62 0-4.5-.35-5.83-1.4-1.32-1.03-1.8-2.68-1.8-4.6 0-1.96.62-3.42 1.32-4.44.7-1.02 1.42-1.72 1.57-1.97.1-.2.2-.36.27-.53.07-.16.13-.32.15-.48.06-.32.05-.65-.3-1.22-.2-.35-.98-.87-1.76-1.18-.75-.3-1.34-.4-1.4-.42h-14.7v14.95z",
					fill: "#0074ff",
					fillRule: "evenodd"
				}),
				M = {
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
				S = z.width / 2 + " " + z.height / 2,
				F = 10,
				N = k,
				C = 20 + _,
				L = [.46, .33, .39, .41, .29, .26, .47, .31, .19, .34, .24, .26, .42, .15, .5, .45, .47, .47, .24, .11],
				P = (0, w.default)("div", {
					position: "relative",
					height: M.height,
					margin: "0 auto",
					display: "flex",
					justifyContent: "center"
				});
			P.displayName = "Container";
			var j = (0, w.default)("svg", (0, g.default)({}, H, {
				position: "absolute",
				top: -_,
				display: "block"
			}));
			j.displayName = "PuzzleBoard";
			var B = function(e) {
				function t() {
					var e, a, r, n;
					(0, c.default)(this, t);
					for (var i = arguments.length, u = Array(i), d = 0; d < i; d++) u[d] = arguments[d];
					return a = r = (0, m.default)(this, (e = t.__proto__ || (0, o.default)(t)).call.apply(e, [this].concat(u))), r.state = {
						percent: 0
					}, r.groups = l(), r._handleScroll = function() {
						var e = r,
							t = e.container;
						if (t && r.props.animate) {
							var a = t.getBoundingClientRect(),
								n = a.top,
								i = a.bottom,
								o = n + (i - n) / 2,
								u = window.innerHeight / 2,
								c = Math.max(0, Math.min(o - u, u) / u);
							0 === c && 0 !== r.state.percent && (r.groups = l()), r.setState({
								percent: c
							})
						}
					}, n = a, (0, m.default)(r, n)
				}
				return (0, p.default)(t, e), (0, s.default)(t, [{
					key: "componentDidMount",
					value: function() {
						window.addEventListener("scroll", this._handleScroll)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						window.removeEventListener("scroll", this._handleScroll)
					}
				}, {
					key: "render",
					value: function() {
						var e = this,
							t = this.props.className,
							a = this.state.percent;
						return E.createElement(P, {
							className: t,
							innerRef: function(t) {
								return e.container = t
							}
						}, E.createElement(j, null, this.groups.map(function(e, t) {
							var r = e.x,
								n = e.y,
								l = e.angle,
								i = e.offsetX,
								o = e.offsetY,
								u = e.offsetAngle,
								c = e.opacity;
							return E.createElement("g", {
								key: t,
								opacity: c,
								transform: "translate(" + (r + i * a) + ", " + (n + o * a) + ") rotate(" + (l + u * a) + " " + S + ")"
							}, x)
						})))
					}
				}]), t
			}(E.PureComponent);
			t.default = B
		};
for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log('#' + i  + ' ' + this.species + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}