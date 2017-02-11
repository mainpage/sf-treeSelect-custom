var sfTreeSelect =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(1)

	/* script */
	__vue_exports__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\NSFI\\新建文件夹\\sf-treeSelect-custom\\src\\treeSelect.vue"
	__vue_options__._scopeId = "data-v-124c07f2"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-124c07f2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-124c07f2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] treeSelect.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.22.0@css-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-124c07f2&scoped=true!./../node_modules/.4.1.1@sass-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./treeSelect.vue", function() {
				var newContent = require("!!./../node_modules/.0.22.0@css-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-124c07f2&scoped=true!./../node_modules/.4.1.1@sass-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./treeSelect.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.m-select[data-v-124c07f2] {\n  display: inline-block;\n  position: relative;\n  margin: 0 auto;\n  height: 32px;\n  vertical-align: middle;\n  background: #fafafa;\n  border: 1px solid #ebebeb;\n  border-radius: 2px;\n  box-shadow: 0 1px 2px -3px #000;\n  cursor: pointer;\n}\n.m-select .select-sel[data-v-124c07f2] {\n    height: 32px;\n    line-height: 32px;\n    padding: 0 50px 0 40px;\n    color: #000;\n    border: none;\n}\n.m-select .select-sel span[data-v-124c07f2] {\n      line-height: 32px;\n      vertical-align: top;\n}\n.m-select .select-sel.disabled[data-v-124c07f2] {\n      color: #999;\n      background: #eee;\n      cursor: not-allowed;\n}\n.m-select .select-cnt[data-v-124c07f2] {\n    position: absolute;\n    top: 36px;\n    left: 0;\n    width: 150px;\n    border: 1px solid #e6eaeb;\n    border-radius: 2px;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n    background-color: #fff;\n    z-index: 10;\n}\n.m-select .u-icon-down[data-v-124c07f2] {\n    position: absolute;\n    top: 15px;\n    right: 10px;\n    width: 12px;\n    height: 12px;\n    background: url(/docs/res/img/icon-12.png);\n    background-position: 0 -540px;\n    background-size: 120px auto;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _treeList = __webpack_require__(6);

	var _treeList2 = _interopRequireDefault(_treeList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		name: 'sf-tree-select',
		componentName: 'treeSelect',
		components: {
			'sf-tree-list': _treeList2.default
		},
		computed: {},
		props: {
			options: Array,
			defid: [String, Number],
			title: String,
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data: function data() {
			return {
				selected: {},
				isShow: false,
				root: this
			};
		},

		methods: {
			/**
	   * 展开/折叠下拉列表(主动)
	   * @param  {boolean} show 
	   * @return {void}     
	   */
			toggle: function toggle(show) {
				if (this.disabled == true) return;
				if (show == undefined) {
					this.isShow = !this.isShow;
				} else {
					this.isShow = show;
				}
			},

			/**
	   * 展开/折叠下拉列表(被动)
	   * @param  {boolean} show 
	   * @return {void}     
	   */
			onToggle: function onToggle(show) {
				this.toggle(show);
				this.$emit('toggle', { show: this.isShow });
			},

			/**
	   * 选择某一项(主动)
	   * @param  {object} option 选中项
	   * @return {void}        
	   */
			select: function select(option) {
				if (this.disabled == true) return;
				this.selected = option;
			},

			/**
	   * 某一项被选中(被动)
	   * @param  {object} option 选中项
	   * @return {void}        
	   */
			onOptionSelect: function onOptionSelect(option) {
				this.selected = option;
				this.$emit('change', this.selected);
				this.onToggle(false);
			}
		},
		created: function created() {
			var _this = this;

			//重写render函数
			var customRender = this.$options.render;
			this.$options.render = function (h) {
				//h相当于$createElement
				/*let hasInlineTemplate = !!this._self.$vnode.data.inlineTemplate;*/
				var newRender = function newRender(_h) {
					return h(
						'div',
						{ 'class': 'm-select', ref: 'select-box' },
						[h(
							'div',
							{ 'class': { "select-sel": true, disabled: this.disabled }, on: {
									'click': this.onToggle.bind(this, !this.isShow)
								},
								attrs: { id: this.selected.id }
							},
							[h(
								'span',
								null,
								[this.selected.name]
							), h(
								'i',
								{ 'class': 'u-icon-down' },
								[]
							)]
						), h(
							'div',
							{ 'class': 'select-cnt', style: { display: this.isShow ? 'inline-block' : 'none' } },
							[h(
								'sf-tree-list',
								{
									attrs: { options: this.options, root: this.root, customRender: customRender }
								},
								[]
							)]
						)]
					);
				};
				return newRender.call(this._renderProxy, h);
			};

			//事件绑定
			this.$on('selectOption', this.onOptionSelect);
			//设置选中项
			var getDefOption = function getDefOption(options) {
				for (var i = 0; i < options.length; i++) {
					var item = options[i];
					if (item.id == _this.defid) {
						return item;
					} else if (item.children && item.children.length > 0) {
						var _option = getDefOption(item.children);
						if (!!_option) return _option;
					}
				}
			};
			var option = getDefOption(this.options);
			if (!!option) {
				this.selected = option;
			} else {
				this.selected = {
					name: this.title || '请选择'
				};
			}
		}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(7)

	/* script */
	__vue_exports__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\NSFI\\新建文件夹\\sf-treeSelect-custom\\src\\treeList.vue"
	__vue_options__._scopeId = "data-v-5c9a512e"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5c9a512e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5c9a512e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] treeList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.22.0@css-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-5c9a512e&scoped=true!./../node_modules/.4.1.1@sass-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./treeList.vue", function() {
				var newContent = require("!!./../node_modules/.0.22.0@css-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-5c9a512e&scoped=true!./../node_modules/.4.1.1@sass-loader/index.js!./../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./treeList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.list[data-v-5c9a512e] {\n  position: relative;\n  max-height: 300px;\n  overflow: hidden;\n}\n.itm[data-v-5c9a512e] {\n  padding: 8px 10px;\n  box-sizing: border-box;\n  overflow: hidden;\n  word-wrap: normal;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.itm .txt[data-v-5c9a512e] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.itm .u-icon-tickblue[data-v-5c9a512e] {\n    display: none;\n    width: 14px;\n    height: 14px;\n    margin-left: 5px;\n    vertical-align: middle;\n    background: url(/docs/res/img/icon-14.png);\n    background-size: 120px auto;\n    background-position: 0 -570px;\n}\n.itm.active > .u-icon-tickblue[data-v-5c9a512e] {\n    display: inline-block;\n}\n.itm.disabled[data-v-5c9a512e] {\n    color: #999;\n    background: #eee;\n    cursor: not-allowed;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		name: 'sf-tree-list',
		componentName: 'treeList',
		components: {},
		computed: {},
		props: {
			options: Array,
			root: Object,
			customRender: Function
		},
		data: function data() {
			return {};
		},

		methods: {
			selectOption: function selectOption(option, event) {
				event.stopPropagation();
				if (option.disabled) return;
				this.root.$emit('selectOption', option);
			}
		},
		created: function created() {
			this.$options.render = function (h) {
				var optionRender = void 0;
				if (!!this.customRender) {
					optionRender = function optionRender(_h) {
						var _this = this;

						return this.options.map(function (option) {
							return h(
								'li',
								{
									attrs: { id: option.id },
									on: {
										'click': _this.selectOption.bind(_this, option)
									},
									'class': { itm: true, active: _this.root.selected === option, disabled: option.disabled } },
								[_this.customRender.call({ option: option }, _h), option.children && option.children.length ? h(
									'sf-tree-list',
									{
										attrs: { options: option.children, root: _this.root, customRender: _this.customRender }
									},
									[]
								) : '']
							);
						});
					};
				} else {
					optionRender = function optionRender(_h) {
						var _this2 = this;

						return this.options.map(function (option) {
							return h(
								'li',
								_defineProperty({ 'class': 'itm', attrs: { id: option.id },
									on: {
										'click': _this2.selectOption.bind(_this2, option)
									}
								}, 'class', { itm: true, active: _this2.root.selected === option, disabled: option.disabled }),
								[h(
									'span',
									{ 'class': 'txt' },
									[option.name]
								), h(
									'i',
									{ 'class': 'u-icon-tickblue' },
									[]
								), option.children && option.children.length ? h(
									'sf-tree-list',
									{
										attrs: { options: option.children, root: _this2.root }
									},
									[]
								) : '']
							);
						});
					};
				}
				var newRender = function newRender(_h) {
					return h(
						'ul',
						{ 'class': 'list' },
						[optionRender.call(this, _h)]
					);
				};
				return newRender.call(this._renderProxy, h);
			};
		}
	};

/***/ }
/******/ ]);