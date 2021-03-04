![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

* Entypo pictograms (used in site logo, favicon, `footer` and icons elsewhere) by Daniel Bruce — www.entypo.com

* Advice on implementing a sticky `footer` using Flexbox from [this CSS-Tricks article](https://css-tricks.com/couple-takes-sticky-footer/)

* CSS hack for hiding `footer` on mobile when keyboard is enabled taken from [this Stack Overflow query](https://stackoverflow.com/questions/22627646/how-to-prevent-mobile-keyboard-from-rising-footer-over-the-text-fields)

* jQuery + CSS fix for animating custom `#nav-toggler` icon incorporating [Font Awesome](https://fontawesome.com) icons found in [this video tutorial](https://www.youtube.com/watch?v=g7v4BB9IMRw))

* Code used to create custom football hexagon pattern `.loader` element adapted from [this loading animation tutorial](https://codemyui.com/soccer-ball-hexagon-pattern-loader/)

* Advice on how to combine the JS `normalize()` and `replace()` methods to remove accentuated characters' diacritics enabling API calls to return scorers with accentuated characters in their names received from the top answer to [this Stack Overflow query](https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript)

* (https://stackoverflow.com/questions/24806772/how-to-skip-over-an-element-in-map)(https://stackoverflow.com/questions/31489413/remove-last-3-characters-of-string-or-number-in-javascript/45165923)

* Guidance on implementing flexible client-side `table` sorting using the [Tablesorter](http://tablesorter.com/) jQuery plugin found [here](https://bootstrap-themes.github.io/dashboard/docs/index.html#tablesorter)

* (https://forum.jquery.com/topic/tablesorter-freeze-one-column)(https://stackoverflow.com/questions/6833545/tablesorter-how-do-i-make-the-first-column-static-fixed-in-tablesorter)

* Tablesorter custom parser to sort scorers by surname instead of by first name: (https://mottie.github.io/tablesorter/docs/example-parsers.html)(https://stackoverflow.com/questions/38209618/tablesorter-sort-by-last-name-ignore-middle-preffered-name)

* (https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click)

* Font Awesome 'futbol' icon SVG used as background-image in custom iOS-style switch [with permission](https://fontawesome.com/license). No changes were made to the file's source code.

* Pure CSS custom switch built using tips and code blocks from [Martin Haubek](https://haubek.github.io/custom-switch/) and retrieved from [this article](https://www.cssscript.com/ios-style-switches-bootstrap-4/)

* Not happy with settling for a page refresh (`location.reload()`) workaround when unchecking leaderboards custom toggler switch - will look to rectify this at some point in the future

* The TransferMarket API applies a rate limit of 5 requests per second, which prevented me from making calls to it in order to populate my StrikeValue tables (for both individual scorers and clubs). Instead, I had to manually log scorer and squad values in my local .json files and retrieve the relevant data from there to load these tables, which proved to be quite time-consuming.

* Guidance on how to use jQuery to populate secondary dropdown options based primary dropdown selection gained from reading the answer to [this Stack Overflow query](https://stackoverflow.com/questions/21561353/jquery-populate-drop-down-options-based-on-another-drop-down-option-using-javasc/21640704)

* Newsletter subscription form on Contact page adapted from [this design template](https://www.markuptag.com/newsletter-subscription-form-design-in-bootstrap-4/)

* [This Stack Overflow solution](https://bootstrapshuffle.com/classes/modal/modal-dialog-centered) suggested a workaround for Bootstrap's `.modal-dialog-centered` class (inexplicably) malfunctioning - by following it, I was able to achieve vertical centering for my modal on contact `form` submit