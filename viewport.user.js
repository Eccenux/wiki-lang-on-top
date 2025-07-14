// ==UserScript==
// @name         Responsive Viewport.
// @namespace    pl.enux.wiki
// @version      1.0.1
// @description  Adds true responsivness to wikis (flexible/mobile view).
// @author       Maciej Nux Jaros
// @match        https://*.wikipedia.org/*
// @match        https://*.wiktionary.org/*
// @match        https://*.wikibooks.org/*
// @match        https://*.wikinews.org/*
// @match        https://*.wikiquote.org/*
// @match        https://*.wikisource.org/*
// @match        https://*.wikidata.org/*
// @match        https://www.mediawiki.org/*
// @match        https://commons.wikimedia.org/*
// @match        https://*sysop.wikimedia.org/*
// @exclude      https://*.m.*.org/*
// @icon         https://www.google.com/s2/favicons?domain=wikipedia.org
// @grant        none
// @run-at document-body
// @updateURL    https://github.com/Eccenux/wiki-lang-on-top/raw/master/viewport.meta.js
// @downloadURL  https://github.com/Eccenux/wiki-lang-on-top/raw/master/viewport.user.js
// ==/UserScript==
(function(){
	// true responsivness (flexible/mobile view)
	let bodyClasses = document.body.classList;
	if (!bodyClasses.contains('mw-special-ContentTranslation') && bodyClasses.contains('skin--responsive')) {
		const meta = document.createElement('meta');
        meta.id = 'enux-respo-vw'
		meta.name = 'viewport';
		meta.content = 'width=device-width, initial-scale=1.0';
		document.head.appendChild(meta);
	}
}())
