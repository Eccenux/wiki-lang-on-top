// ==UserScript==
// @name         Lang on top.
// @namespace    pl.enux.wiki
// @version      1.0.0
// @description  Put language switch on top bar (e.g. fixed header).
// @author       Maciej Nux Jaros
// @match        https://*.wikipedia.org/*
// @exclude      https://*.m.wikipedia.org/*
// @icon         https://www.google.com/s2/favicons?domain=wikipedia.org
// @grant        none
// @run-at document-idle
// @updateURL    https://github.com/Eccenux/wiki-lang-on-top/raw/master/lang.meta.js
// @downloadURL  https://github.com/Eccenux/wiki-lang-on-top/raw/master/lang.user.js
// ==/UserScript==

// add lang to top if available
var lang = document.querySelector('#p-lang-btn');
if (!lang) {
	return;
}
var links = document.querySelector('.vector-user-links');
if (!links) {
	return;
}
links.parentNode.insertBefore(lang, links);

// add CSS
function setupCss(css) {
	var style = document.createElement('style');
	style.innerHTML = css;
	document.body.appendChild(style);
}
setupCss(`
#p-lang-btn .vector-menu-heading {
    font-size: initial;
}
#p-lang-btn .vector-menu-heading::after {
    top: 0;
    right: -.2em;
}
#p-lang-btn .vector-menu-heading.mw-ui-progressive.mw-ui-quiet::after {
    background-image: url(/w/skins/Vector/resources/common/images/arrow-down-progressive.svg?f0b59);
    opacity: 1;
}
`);