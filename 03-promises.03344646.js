!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");function a(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}var u=document.querySelector(".form"),f={};u.addEventListener("input",(function(e){e.preventDefault(),f[e.target.name]=Number(e.target.value)})),u.addEventListener("submit",(function(n){n.preventDefault(),setTimeout((function(){for(var n=f.delay,t=1;t<=f.amount;t++)a(t,n).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),n+=f.step}),f.delay)}))}();
//# sourceMappingURL=03-promises.03344646.js.map
