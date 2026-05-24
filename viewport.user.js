// ==UserScript==
// @name         Responsive Viewport.
// @namespace    pl.enux.wiki
// @version      1.1.0
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
// @match        https://*.wikimedia.org/*
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
		
		// remove if exists
		let viewport = document.querySelector( 'meta[name="viewport"]' );
		if ( viewport ) {
			viewport.remove();
		}

		let meta = Object.assign(document.createElement('meta'), { 
			id: 'enux-respo-vw',
			name: 'viewport',
			content: 'width=device-width, initial-scale=1.0',
		});
		document.head.appendChild(meta);
	}

	// See also: https://meta.wikimedia.org/wiki/User:Hakimi97/responsiveVector2022.js
}())
