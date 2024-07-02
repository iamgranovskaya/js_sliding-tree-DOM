var e=document.querySelectorAll("li"),n=document.querySelector(".tree");e.forEach(function(e){var n=document.createElement("span");e.prepend(n),n.prepend(n.nextSibling)}),n.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var n=e.target.nextSibling;n&&(n.hidden=!n.hidden)}});
//# sourceMappingURL=index.d584e0cf.js.map
