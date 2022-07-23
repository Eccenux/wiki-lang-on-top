# Lang on top

Simply put – it puts language switch on top bar (pun intended 😉).

It works great with my fixed header as you always have language button in the same place on the screen.
[Wikipedysta:Nux/Fixed_top_bar.css](https://pl.wikipedia.org/wiki/Wikipedysta:Nux/Fixed_top_bar.css)

Oh, both are intended for Vector 2022. I try to keep up with updates of V22 and all layout changes, but you can ping me on Wikipedia if something is not working as expected. Suggestions are also welcome.

Installation
--------------------

1. Install [TamperMonkey Firefox add-on](https://addons.mozilla.org/pl/firefox/addon/tampermonkey/) (there is a [Chrome version too](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)).
2. Once TM is installed &rarr; **[install the script](https://github.com/Eccenux/wiki-lang-on-top/raw/master/lang.user.js)**.

I usually work in Firefox, but the script should work fine in Chrome, Microsoft Edge, Safari, Opera and all that jazz. IE is not supported. More on other browser on TM website: [www.tampermonkey.net](https://www.tampermonkey.net/). 

Example
--------------------

<img width="780" height="528" src="https://github.com/Eccenux/wiki-lang-on-top/raw/master/screen/Wikipedia-article.png" alt="Wikipedia article with toc on the right and lang on top.">

On the second image you should notice that whole bar is left on top (not just a replacement bar as in current V22). Again, this is part of my `Fixed_top_bar.css`. You can load that CSS in [Stylus](https://addons.mozilla.org/pl/firefox/addon/styl-us/) (fastest) or via `@import` in your `vector.css`.

<img width="780" height="336" src="https://github.com/Eccenux/wiki-lang-on-top/raw/master/screen/Wikipedia-article-scroll.png" alt="Scrolled down article keeps whole bar on top.">

The article on the image was not written by me. See [authors of the article](https://en.wikipedia.org/w/index.php?title=Boomerang_&#40;TV_network&#41;&action=history).

License and author(s)
----------------------------

Author: Maciej Nux Jaros.

License: [CC-BY](https://creativecommons.org/licenses/by/4.0/).
