require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({13:[function(require,module,exports) {
"use strict";function e(e,n){for(var r,o=[],t=[],l=arguments.length;l-- >2;)o.push(arguments[l]);for(;o.length;)if(Array.isArray(r=o.pop()))for(l=r.length;l--;)o.push(r[l]);else null!=r&&!0!==r&&!1!==r&&t.push(r);return"function"==typeof e?e(n||{},t):{name:e,props:n||{},children:t}}function n(e,n,r,o){var t,l=[],i=o&&o.children[0]||null,u=i&&function e(n,r){return{name:n.nodeName.toLowerCase(),props:{},children:r.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n,r)})}}(i,[].map),f=s(e),c=s(n);return a(function e(n,r,o){for(var t in o)"function"==typeof o[t]?function(e,t){o[e]=function(e){return"function"==typeof(e=t(e))&&(e=e(d(n,f),o)),e&&e!==(r=d(n,f))&&!e.then&&a(f=h(n,s(r,e),f)),e}}(t,o[t]):e(n.concat(t),r[t]=r[t]||{},o[t]=s(o[t]))}([],f,c)),c;function p(){t=!t;var e=r(f,c);for(o&&!t&&(i=function e(n,r,o,t,i,u){if(t===o);else if(null==o)r=n.insertBefore(g(t,i),r);else if(t.name&&t.name===o.name){!function(e,n,r,o){for(var t in s(n,r))r[t]!==("value"===t||"checked"===t?e[t]:n[t])&&m(e,t,r[t],o,n[t]);r.onupdate&&l.push(function(){r.onupdate(e,n)})}(r,o.props,t.props,i=i||"svg"===t.name);for(var f=[],c={},p={},a=0;a<o.children.length;a++){f[a]=r.childNodes[a];var h=o.children[a],d=v(h);null!=d&&(c[d]=[f[a],h])}for(var a=0,N=0;N<t.children.length;){var h=o.children[a],w=t.children[N],d=v(h),b=v(w);if(p[d])a++;else if(null==b)null==d&&(e(r,f[a],h,w,i),N++),a++;else{var k=c[b]||[];d===b?(e(r,k[0],k[1],w,i),a++):k[0]?e(r,r.insertBefore(k[0],f[a]),k[1],w,i):e(r,f[a],null,w,i),N++,p[b]=w}}for(;a<o.children.length;){var h=o.children[a];null==v(h)&&y(r,f[a],h),a++}for(var a in c)p[c[a][1].props.key]||y(r,c[a][0],c[a][1])}else t.name===o.name?r.nodeValue=t:(r=n.insertBefore(g(t,i),u=r),y(n,u,o));return r}(o,i,u,u=e));e=l.pop();)e()}function a(){t||(t=!t,setTimeout(p))}function s(e,n){var r={};for(var o in e)r[o]=e[o];for(var o in n)r[o]=n[o];return r}function h(e,n,r){var o={};return e.length?(o[e[0]]=e.length>1?h(e.slice(1),n,r[e[0]]):n,s(r,o)):n}function d(e,n){for(var r=0;r<e.length;r++)n=n[e[r]];return n}function v(e){return e&&e.props?e.props.key:null}function m(e,n,r,o,t){if("key"===n);else if("style"===n)for(var l in s(t,r))e[n][l]=null==r||null==r[l]?"":r[l];else"function"==typeof r||n in e&&!o?e[n]=null==r?"":r:null!=r&&!1!==r&&e.setAttribute(n,r),null!=r&&!1!==r||e.removeAttribute(n)}function g(e,n){var r="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name):document.createElement(e.name);if(e.props){e.props.oncreate&&l.push(function(){e.props.oncreate(r)});for(var o=0;o<e.children.length;o++)r.appendChild(g(e.children[o],n));for(var t in e.props)m(r,t,e.props[t],n)}return r}function y(e,n,r,o){function t(){e.removeChild(function e(n,r,o){if(o=r.props){for(var t=0;t<r.children.length;t++)e(n.childNodes[t],r.children[t]);o.ondestroy&&o.ondestroy(n)}return n}(n,r))}r.props&&(o=r.props.onremove)?o(n,t):t()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],5:[function(require,module,exports) {
"use strict";var E;function T(E,T,R){return T in E?Object.defineProperty(E,T,{value:R,enumerable:!0,configurable:!0,writable:!0}):E[T]=R,E}Object.defineProperty(exports,"__esModule",{value:!0});var R=exports.ROW_NUMBERS=8,e=exports.COLUMN_NUMBERS=8,L=exports.STATUSES={EMPTY:"EMPTY",BLACK:"BLACK",WHITE:"WHITE"},P=exports.DIRECTIONS={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT",UPPER_RIGHT:"UPPER_RIGHT",UPPER_LEFT:"UPPER_LEFT",LOWER_RIGHT:"LOWER_RIGHT",LOWER_LEFT:"LOWER_LEFT"},r=exports.DIRECTIONS_DELTA=(T(E={},P.UPPER_LEFT,{x:-1,y:-1}),T(E,P.UP,{x:0,y:-1}),T(E,P.UPPER_RIGHT,{x:1,y:-1}),T(E,P.LEFT,{x:-1,y:0}),T(E,P.RIGHT,{x:1,y:0}),T(E,P.LOWER_LEFT,{x:-1,y:1}),T(E,P.DOWN,{x:0,y:1}),T(E,P.LOWER_RIGHT,{x:1,y:1}),E);
},{}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.countUpCells=exports.findCell=exports.getCells=exports.cloneBoard=exports.initializeBoard=void 0;var r=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},t=require("./constants");function n(r){if(Array.isArray(r)){for(var t=0,n=Array(r.length);t<r.length;t++)n[t]=r[t];return n}return Array.from(r)}var e=exports.initializeBoard=function(r,n){var e=Array.from({length:r}).map(function(r,e){return Array.from({length:n}).map(function(r,n){return{status:t.STATUSES.EMPTY,position:{x:n,y:e},selectable:!0}})}),o=[e[r/2][n/2-1],e[r/2-1][n/2]],u=[e[r/2][n/2],e[r/2-1][n/2-1]];return o.forEach(function(r){return r.status=t.STATUSES.BLACK}),u.forEach(function(r){return r.status=t.STATUSES.WHITE}),[].concat(o,u).forEach(function(r){return r.selectable=!1}),e},o=exports.cloneBoard=function(t){return t.map(function(t){return t.map(function(t){return r({},t)})})},u=exports.getCells=function(r){return r.reduce(function(r,t){return[].concat(n(r),n(t))})},i=exports.findCell=function(r){var t=r.board,n=r.position,e=n.x,o=n.y;return u(t).find(function(r){var t=r.position,n=t.x,u=t.y;return e===n&&o===u})},a=exports.countUpCells=function(r){var n=u(r);return{black:n.filter(function(r){return r.status===t.STATUSES.BLACK}).length,white:n.filter(function(r){return r.status===t.STATUSES.WHITE}).length}};
},{"./constants":5}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp"),t=function(t){var o=t.status,l=t.position,n=t.selectable,r=t.onselect,s=["cell",o.toLowerCase(),n?"selectable":null].filter(function(e){return e}).join(" ");return(0,e.h)("div",{class:s,onclick:function(){r({position:l}),console.log(l)}})};exports.default=t;
},{"hyperapp":13}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp"),s=require("../board-utils"),t=function(t){var a=t.board,r=t.isBlackTurn,i=t.gameFinished,l=t.onclickRestart,c=void 0;if(i){var o=(0,s.countUpCells)(a),u=o.black,n=o.white,d=void 0;d=u===n?"Draw":(u>n?"Black":"White")+" won!",c=[(0,e.h)("div",{class:"message"},d+" (Black: "+u+", White: "+n+")"),(0,e.h)("button",{class:"restart-button",onclick:l},"Restart game")]}else c=(0,e.h)("div",{class:"message"},(r?"Black":"White")+"'s turn");return(0,e.h)("div",{class:"game-status"},c)};exports.default=t;
},{"hyperapp":13,"../board-utils":8}],3:[function(require,module,exports) {
"use strict";var t=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(i)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=require("hyperapp"),r=require("./constants"),n=require("./board-utils"),i=require("./components/Cell"),a=u(i),o=require("./components/GameStatus"),l=u(o);function u(t){return t&&t.__esModule?t:{default:t}}function c(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var s=Object.values(r.DIRECTIONS),S=Object.values(r.DIRECTIONS_DELTA),d=function(e){var n=Object.entries(r.DIRECTIONS_DELTA).find(function(r){var n=t(r,2),i=(n[0],n[1]),a=i.x,o=i.y;return e.x===a&&e.y===o})||[];return t(n,1)[0]},f=function(t){var e=t.board,r=t.position,i=r.x,a=r.y;return S.map(function(t){var r=t.x,o=t.y;return(0,n.findCell)({board:e,position:{x:i+r,y:a+o}})}).filter(function(t){return t})},T=function(t){var e=t.board,i=t.position,a=t.isBlackTurn;i.x,i.y,(0,n.findCell)({board:e,position:i});if(currentStatus!==r.STATUSES.EMPTY)return!1;a?r.STATUSES.BLACK:r.STATUSES.WHITE},b=function t(e){var i=e.board,a=e.cell,o=e.targetStatus,l=e.direction,u=e.reversibleCells,s=void 0===u?[]:u,S=o===r.STATUSES.BLACK?r.STATUSES.WHITE:r.STATUSES.BLACK,d=a.position,f=r.DIRECTIONS_DELTA[l],T=(0,n.findCell)({board:i,position:{x:d.x+f.x,y:d.y+f.y}}),b=[].concat(c(s),[a]);return T?T.status===r.STATUSES.EMPTY?[]:T.status===S?b:t({board:i,cell:T,targetStatus:o,direction:l,reversibleCells:b}):[]},p=function(t){var e=t.board,n=t.cell,i=t.isBlackTurn?r.STATUSES.BLACK:r.STATUSES.WHITE,a=n.position;return f({board:e,position:a}).filter(function(t){return t.status===i}).some(function(t){var r=t.position,n={x:r.x-a.x,y:r.y-a.y},o=d(n);return b({board:e,cell:t,targetStatus:i,direction:o}).length>0})},E={isBlackTurn:!0,board:(0,n.initializeBoard)(r.ROW_NUMBERS,r.COLUMN_NUMBERS),gameFinished:!1},v={initialize:function(){return function(t,e){e.initializeState(),e.updateSelectableCells()}},initializeState:function(){return function(){return{isBlackTurn:!0,board:(0,n.initializeBoard)(r.ROW_NUMBERS,r.COLUMN_NUMBERS),gameFinished:!1}}},updateSelectableCells:function(){return function(t){var e=t.board,i=t.isBlackTurn,a=(0,n.cloneBoard)(e),o=(0,n.getCells)(a).filter(function(t){return t.status===r.STATUSES.EMPTY});o.forEach(function(t){return t.selectable=!1});var l=o.filter(function(t){return p({board:a,cell:t,isBlackTurn:!i})});return l.forEach(function(t){return t.selectable=!0}),{board:a,gameFinished:0===l.length}}},select:function(t){var e=t.position;return function(t){var i=t.board,a=t.isBlackTurn,o=(0,n.cloneBoard)(i),l=(0,n.findCell)({board:o,position:e});if(l.selectable)return s.map(function(t){return b({board:o,cell:l,targetStatus:a?r.STATUSES.WHITE:r.STATUSES.BLACK,direction:t})}).reduce(function(t,e){return[].concat(c(t),c(e))}).forEach(function(t){t.status=a?r.STATUSES.BLACK:r.STATUSES.WHITE,t.selectable=!1}),console.log(o),{board:o,isBlackTurn:!a}}},selectAndUpdateSelectableCells:function(t){var e=t.position;return function(t,r){r.select({position:e}),r.updateSelectableCells()}}},A=function(t,r){var n=t.board,i=t.isBlackTurn,o=t.gameFinished;return(0,e.h)("div",{oncreate:r.updateSelectableCells},[(0,e.h)("div",{class:"board"},n.map(function(t){return(0,e.h)("div",{class:"row"},t.map(function(t){var e=t.status,n=t.position,i=t.selectable;return(0,a.default)({status:e,position:n,selectable:i,onselect:r.selectAndUpdateSelectableCells})}))})),(0,l.default)({board:n,isBlackTurn:i,gameFinished:o,onclickRestart:r.initialize}),(0,e.h)("div",{class:"info"},(0,e.h)("a",{class:"link github",href:"https://github.com/syumai/hyper-reversi/"},"GitHub"))])},y=(0,e.app)(E,v,A,document.body);
},{"hyperapp":13,"./constants":5,"./board-utils":8,"./components/Cell":6,"./components/GameStatus":7}]},{},[3])