// ==UserScript==
// @name         Lang on top.
// @namespace    pl.enux.wiki
// @version      1.1.1
// @description  Put language switch on top bar (e.g. fixed header).
// @author       Maciej Nux Jaros
// @match        https://*.wikipedia.org/*
// @match        https://*.wiktionary.org/*
// @match        https://*.wikibooks.org/*
// @match        https://*.wikiquote.org/*
// @match        https://*.wikisource.org/*
// @exclude      https://*.m.wikipedia.org/*
// @icon         https://www.google.com/s2/favicons?domain=wikipedia.org
// @grant        none
// @run-at document-idle
// @updateURL    https://github.com/Eccenux/wiki-lang-on-top/raw/master/lang.meta.js
// @downloadURL  https://github.com/Eccenux/wiki-lang-on-top/raw/master/lang.user.js
// ==/UserScript==
(function(){
	let isMobile = /[a-z]+\.m\./.test(location.hostname);
	if (isMobile) {
		return;
	}

	// add lang to top if available
	let lang = document.querySelector('#p-lang-btn');
	if (!lang) {
		return;
	}
	let links = document.querySelector('.vector-user-links');
	if (!links) {
		return;
	}
	links.parentNode.insertBefore(lang, links);

	// add CSS
	function setupCss(css) {
		let style = document.createElement('style');
		style.innerHTML = css;
		document.body.appendChild(style);
	}

	let css = `
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
	`;
	
	setupCss(css);
}())
