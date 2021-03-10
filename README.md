<h1 align='center'>StrikeForce Website</h1>



<h2 align="center"><img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" alt="Code Institute logo" width="200" height="auto" style="margin-right:20px;"> <img src="assets/images/strikeforce-logo.png" alt="StrikeForce logo" width="200" height="auto"></h2>



<p align="center" style="font-style:italic;">Code Institute Diploma in Software Development: Interactive Frontend Development - Milestone Project</p>



<p align="center"><a href="https://loosenthedark.github.io/strikeforce/" style="font-weight:bold;">Live link to deployed project</a> (hosted on GitHub Pages)</p>



---



**StrikeForce** is an interactive frontend site, offering users a bespoke data portal through which they can browse, select and sort through a range of information and statistics relating to goals scored in the English Premier League this season (2020-21). The site meets the needs and objectives of a variety of users by allowing them to actively engage with the relevant data to gain a clear understanding of the facts behind the figures. Both first-time and returning visitors will be impressed by StrikeForce's minimalist mobile-first design and its intuitive navigation and layout, while their knowledge of PL goalscorers will be enriched by the site's incisive and intelligent data analysis.




<h2 align="center"><img src="assets/images/strikerate-leaderboards.png" alt="StrikeForce 'strikerate' leaderboards screenshots across multiple device sizes" width="70%" height="auto"></h2>




## User Experience (UX)

An abundance of football data websites exist nowadays, each claiming to offer visitors a definitive breakdown of the statistics and trends that matter. However, most of these sites actually only give incomplete overviews, due for the most part to poorly-collated data and misleadingly-labelled visualisations. StrikeForce aims to address such shortcomings by presenting users with robust, reliable and "meaningful data for the beautiful game" (the site's tag line, as cited in the `title` element at the top of each page).

As such, the site's user experience can best be illustrated by outlining a variety of **User Stories**, from inception to completion, in order to showcase how StrikeForce empowers a diverse cross-section of visitors to achieve their (often overlapping and interrelated) goals.

In no particular order, a list of such User Stories includes, but is not limited to, the following:

1. _"As a fan of the [Premier League](https://en.wikipedia.org/wiki/Premier_League) in general, I'm looking for a dashboard-style website that's easy to navigate and gives a clear and concise breakdown of who the most free-scoring players and teams are, and how potent they are compared to others."_
2. _"As a fan of the player [Patrick Bamford](https://en.wikipedia.org/wiki/Patrick_Bamford), I want to be able to track his goalscoring rate over the course of the season."_
3. _"As a fan of the club [Leeds United](https://en.wikipedia.org/wiki/Leeds_United_F.C.), I want to be able to track its goalscoring rate over the course of the season."_
4. _"As a non-English speaking fan of the Premier League and frequent social media user, I wish to be able to search for goalscorers by the hashtags/acronyms associated with their clubs that I see on Instagram, Twitter etc."_
5. _"As a statistically-minded follower of the PL, I take issue with most readily-available 'leading goalscorer' charts, as they tend to include penalties scored. For instance, both the [BBC](https://www.bbc.com/sport/football/premier-league/top-scorers) and [official PL](https://www.premierleague.com/stats/top/players/goals) rundowns present their data in an unfiltered and therefore somewhat misleading manner. The mark of a top striker for me is one who scores regularly from open play, so I'd like to be able to access a chart that's adjusted for penalties scored."_
6. _"As an avid [Fantasy Premier League](https://fantasy.premierleague.com/) participant, I already know who the top PL scorers outright are, but I need to find out which players offer the best 'value for money' return, i.e. goals scored per €1 million valuation, as I look to assemble my virtual squad for the rest of the 2020-21 season."_
7. _"As a return visitor to the site, I would like to be able to follow it on social media so I can keep up to date with its content."_
8. _"As someone who favours traditional email over social media, I'm wondering if it's possible to sign up to StrikeForce's mailing list in order to be made aware of any updates and announcements."_
9. _"As site owner, I am looking to build a community of regular users who come to view StrikeForce as their 'one-stop shop' source of accurate and informative PL goalscoring data. In order to do this, I need a site that's user-friendly, feels lightweight and uncluttered and is designed to be fully responsive across all device sizes."_



From a **Design** perspective, the look and feel of [this 'Dashboard' Official Bootstrap Theme](https://themes.getbootstrap.com/product/dashboard/) struck me as a solid foundation on which to base the site, as it offers a slick, modern-looking template design and a suite of eye-catching components and plugins to help drive engagement and deliver a dynamic user experience. The theme is built on top of [Bootstrap's core (v4.0.0-alpha.6)](https://v4-alpha.getbootstrap.com/) and is tailored towards interactive data visualisation and presentation.



Besides white and off-white for several of the site's Heading elements, the two main **colours** used throughout are a deep charcoal/slate grey for the `body`'s main background and a piercing ocean blue for standout site logos and interactive buttons, tabs, directional arrows etc. Both of these were available [right out of the box with the BS theme I had chosen](https://themes.getbootstrap.com/preview/?theme_id=1468) - the latter as its '-primary' color for use with relevant components - and since they also offered [an acceptable colour contrast ratio](https://webaim.org/resources/contrastchecker/?fcolor=1997C6&bcolor=252830), I decided to go with them as my main colour scheme. These were supplemented by secondary use of more muted greyish tones for elements such as tabular data text and `footer` and `nav` icons.



My choice of **font** for the site's main logo was informed by the ready availability of [Entypo](http://entypo.com/), which came bundled with the Dashboard theme and also gave access to "an awesome, high quality set of icon glyphs" [per the theme's docs](https://themes.getbootstrap.com/preview/?theme_id=1468) for use in lieu of Bootstrap's default icon font, Glyphicons. The widely-used Roboto font was used everywhere else throughout the site, with Helvetica Neue > Helvetica > Arial > sans-serif as the stated fallback options.



The site opts for a minimalist approach in terms of **imagery**: there is no background hero image, for instance, on the main landing page. It was felt that this might distract site visitors from focusing on the main search bar when they first arrive, and so background images have been forsaken in favour of informational icons that are used sparingly but effectively to guide the user. A compilation of these icons can be viewed as part of the flashing hero animation on the 'About' page. These have mostly been sourced from the aforementioned Entypo library, but a few [Font Awesome](https://fontawesome.com/) icons have also been selected.



Apart from this, dynamically-loaded imagery such as player profile photos and club crests and international flags for scorer summary data has been retrieved and inserted into the DOM by API calls to the (unofficial) [TransferMarket API](https://rapidapi.com/apidojo/api/transfermarket). The crests used elsewhere within the site were all downloaded from the relevant club [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) pages, and as such are used here in line with that site's 'fair use' policy.



### Wireframes

- Main landing page: mobile | tablet | desktop
- Leaderboards: mobile | tablet | desktop
- Dashboards: mobile | tablet | desktop
- 'About' page: mobile | tablet | desktop
- 'Contact' page: mobile | tablet | desktop



## Features

### Existing Features

- Main landing page:

  - Inspiration for scorer/club search functionailty gained from [this Traversy Media video tutorial](https://www.youtube.com/watch?v=1iysNUrI3lw&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=16) on leveraging JSON data to build an autocomplete application
  - Users can toggle with ease between scorer and club search bars
  - The autocomplete filter returns all available matches from the relevant (local) JSON files for search strings greater than two characters in length in the case of scorers and greater than zero characters in the case of clubs:

  <img src="assets/images/StrikeForce-landing1.png" alt="StrikeForce landing page scorer search" width="45%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-landing2.png" alt="StrikeForce landing page club search" width="45%" height="auto">

  - Once a dynamic list of matching scorers/clubs has been returned, users may select an individual scorer/club by clicking on the appropriate `.btn-strike-rate(-club)` `<a>` element on the right-hand side of each player's/club's data panel:

  <img src="assets/images/StrikeForce-landing3.png" alt="StrikeForce landing page scorer search" width="15%" height="auto" style="margin-right: 20px;">
  <img src="assets/images/StrikeForce-landing4.png" alt="StrikeForce landing page club search" width="15%%" height="auto">

  - This will load the data dashboard relating to the scorer/club in question, each of which consists of a header image and main content pane separated by a tabbed navigation bar that can be clicked to select from a total of three custom `.statcard` data visualisation components: one of these (labelled 'Summary') displays static data, while the other two ('StrikeRate' and 'StrikeValue') allow users to interact by filtering the data to be displayed (e.g. by clicking a toggle button that either excludes or includes penalties scored from the data rendered in chart form):

  <img src="assets/images/StrikeForce-landing5.png" alt="StrikeForce landing page scorer search" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-landing6.png" alt="StrikeForce landing page scorer search" width="15%%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-landing7.png" alt="StrikeForce landing page scorer search" width="15%%" height="auto">

- Leaderboard pages:
  
  - Each of the site's three subcategorised leaderboard pages (again divided by 'Summary', 'StrikeRate' and 'StrikeValue', thus establishing a consistent, intuitive navigational theme) consists of sortable tabular data.
  - Not only can users swiftly move between these three different table categories (either by using the site's main `nav` menu or by clicking on one of the three secondary nav tabs directly above each table)...

  <img src="assets/images/StrikeForce-leaderboards1.png" alt="StrikeForce Leaderboards page Summary table" width="25%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-leaderboards2.png" alt="StrikeForce Leaderboards page StrikeRate table" width="25%%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-leaderboards3.png" alt="StrikeForce l Leaderboards page StrikeValue table" width="25%" height="auto">

  - ...but they can also alternate between viewing individual and club goalscoring leaderboards by means of a pure CSS custom switch that was built using tips and code blocks from [Martin Haubek](https://haubek.github.io/custom-switch/) and retrieved from [this article](https://www.cssscript.com/ios-style-switches-bootstrap-4/):

  <img src="assets/images/StrikeForce-leaderboards4.png" alt="StrikeForce Leaderboards page custom switch" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-leaderboards5.png" alt="StrikeForce Leaderboards page custom switch" width="15%" height="auto">

  - By default, each table is sorted in descending order of goals scored outright, as indicated by the downward-pointing directional arrow visible in the bottom right-hand corner of the 'Goals' `th` element in the first screenshot below. However, as seen in the second screenshot, users may interact with each table to rearrange the data by clicking on the appropriate `th` category. Data can also be arranged in either descending (downward-pointing arrow) or ascending (upward-pointing arrow) order, according to user preference:

  <img src="assets/images/StrikeForce-leaderboards6.png" alt="StrikeForce Leaderboards page table sorting" width="25%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-leaderboards7.png" alt="StrikeForce Leaderboards page table sorting" width="25%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-leaderboards8.png" alt="StrikeForce Leaderboards page table sorting" width="25%" height="auto">

- Dashboard pages:

  - As an alternative to using the main landing page's autocomplete search bars to access data visualisations for individual scorers/clubs, users may instead select from a list of valid options when they navigate to one of the two (Scorers / Clubs) dashboard landing pages. Here they will be prompted by a CSS3 animation effect on the `.dropdown-toggle` `button` element to trigger a `.dropdown-menu`:

  <img src="assets/images/StrikeForce-dashboards1.png" alt="StrikeForce Dashboards page Scorers dropdown" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-dashboards3.png" alt="StrikeForce Dashboards page Scorers dropdown menu" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-dashboards2.png" alt="StrikeForce Dashboards page Clubs dropdown" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-dashboards4.png" alt="StrikeForce Dashboards page Clubs dropdown menu" width="15%" height="auto">

  - In the case of the Scorer dashboards `.dropdown-toggle`, the content of a second (initially hidden) `.dropdown-menu` element will be populated according to the user's choice when prompted to "Choose a club". For instance, if the user selects 'Leeds United' from the first `.dropdown-menu`, they will then be offered a selection limited to scorers from that club alone in the subsequent "Choose a scorer" menu. See the walkthrough below for clarification:

  <img src="assets/images/StrikeForce-dashboards5.png" alt="StrikeForce Dashboards page Scorers first dropdown" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-dashboards6.png" alt="StrikeForce Dashboards page Scorers first dropdown menu" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-dashboards7.png" alt="StrikeForce Dashboards page Scorers second dropdown" width="15%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-dashboards8.png" alt="StrikeForce Dashboards page Scorers second dropdown menu" width="15%" height="auto">

  - The relevant data visualisation dashboard will then load (per the main landing page's functionality described above) based on the user's selection from this *second* `.dropdown-menu` list.

  - Guidance on how to use jQuery to implement this dynamic functionality whereby a secondary `.dropdown-menu` list can be compiled based on a user's primary `.dropdown-menu` selection was received from reading the answer to [this Stack Overflow query](https://stackoverflow.com/questions/21561353/jquery-populate-drop-down-options-based-on-another-drop-down-option-using-javasc/21640704)

- 'About' page:

  - The only purely decorative (i.e. non-interactive) page on the site, the 'About' page nevertheless boasts a visually-arresting pure CSS animation on page load that combines enlarged versions of several of the site's recurring icons with a neat rendering of the StrikeForce tag line ("Meaningful data for the beautiful game"):

  <img src="https://media.giphy.com/media/LMr83nWYlUeLE5b395/giphy.gif" alt="StrikeForce About page flashing animation demo" width="70%" height="auto">

  - Pure CSS angled arrow-style borders were applied to the 'About' page's `.progress-bar` elements by referencing [this Stack Overflow thread](https://stackoverflow.com/questions/19736655/pointed-angled-arrow-style-borders-in-css) and [this CSS-Tricks tutorial](https://css-tricks.com/snippets/css/css-triangle/)

  - A decision was also made to restyle the site's main `nav` element for the 'About' and 'Contact' pages on tablet and desktop devices. This was a largely cosmetic modification: it was felt that keeping the `.sidebar` `nav` layout on larger screens would make both these pages appear asymmetrical and therefore not as pleasing on the eye. Thus, compare...

  <img src="assets/images/StrikeForce-navlanding.png" alt="StrikeForce landing page nav md" width="25%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-navleaderboards.png" alt="StrikeForce Leaderboards page nav md" width="25%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-navdashboards.png" alt="StrikeForce Dashboards page nav md" width="25%" height="auto">



  ...with...



  <img src="assets/images/StrikeForce-navabout.png" alt="StrikeForce About page nav md" width="25%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-navcontact.png" alt="StrikeForce Contact page nav md" width="25%" height="auto">



- 'Contact' page:

  - The site's contact page features an email newsletter subscription form that has been adapted from [this design template](https://www.markuptag.com/newsletter-subscription-form-design-in-bootstrap-4/)
  - Users are encouraged to submit their email address in order to be kept updated via the site's monthly newsletter; there is a brightly-coloured 'Subscribe' `button` element that triggers a `form` submit event when users click on it
  - There is also a timely reminder of StrikeForce's social media presence, with the social icons this time no longer located in the `footer`, but rather inside the contact form container close to the call-to-action `button`
  - When users successfully input their email address and submit the `form`, a `.modal` is activated thanking them for taking the time to subscribe and assuring them that they will soon be receiving a follow-up email to confirm their subscription:

  <img src="assets/images/StrikeForce-contact1.png" alt="StrikeForce Contact page pre-submit" width="25%" height="auto" style="margin-right: 10px;">
  <img src="assets/images/StrikeForce-contact2.png" alt="StrikeForce Contact page post-submit" width="25%" height="auto">

  - [This Stack Overflow solution](https://bootstrapshuffle.com/classes/modal/modal-dialog-centered) suggested a workaround for Bootstrap's `.modal-dialog-centered` class (inexplicably) malfunctioning - by following it, I was able to achieve vertical centering for my modal on contact `form` submit (see second screenshot above)



## Technologies Used

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programmes

3. [Bootstrap (v4.3.1)](https://getbootstrap.com/)
4. [jQuery (v3.3.1)](https://jquery.com/)
5. [Google Fonts](https://fonts.google.com/)
6. [Font Awesome](https://fontawesome.com/)
7. Hover.css: [site](http://ianlunn.github.io/Hover/) | [repo](https://github.com/IanLunn/Hover)
8. [Popper.js](https://popper.js.org/)
9. [Autoprefixer](https://autoprefixer.github.io/)

## Testing


All testing was performed manually, and on a near-constant basis as the project evolved. Frequent use of [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2) was central to this testing process, while ongoing testing of the site's responsiveness was conducted using [Responsinator](https://www.responsinator.com/).

Additionally, the site was tested in a variety of browsers (Chrome, Safari, Firefox, Amazon Silk) across several devices and screen sizes (Samsung Galaxy S5, iPhone 7 Plus, Huawei P20, MacBook Pro, iPad, Kindle Fire) to ensure compatibility.

[W3C](https://www.w3.org/)'s [Markup Validation Service](https://validator.w3.org/) was used to test the validity of all HTML used in this project. The code was [validated by direct input](https://validator.w3.org/#validate_by_input), and all suggested corrections were then made.

In a similar manner, the website's CSS was checked for errors using [W3C](https://www.w3.org/)'s [CSS Validation Service](https://jigsaw.w3.org/css-validator/). Once again, [validation by direct input](https://jigsaw.w3.org/css-validator/#validate_by_input) was the preferred method selected, and all necessary changes were subsequently carried out.

In terms of addressing the goals outlined above in the core User Stories, the following can all be said to have been rigorously tested and verified throughout the design process:

1. _"As site owner, the landing page boasts eye-catching `header` branding, as well as a motivating synopsis of why the user should choose to enlist my services. There is a prominent call-to-action `button` along with a secondary 'Read More' prompt encouraging the user to explore the site further. My academic and professional background, together with a bitesized account of my integrative approach, can all be viewed in the About Me section, which also features a professional-looking photo of me. Again, there is a well-positioned call-to-action `button` here, should the user wish to book an appointment right away. Still-undecided users can navigate further to the FAQ section, where they can browse a host of detailed and relevant answers to some of the questions they may have in relation to the practice. There are also a couple of explainer media links for those who wish to avail of additional resources. Towards the bottom of the site, a well-organised Contact form makes both getting in touch and booking an appointment quick and uncomplicated, while a supplementary Blog section and social media links enable me to consolidate my web presence and increase client retention rates."_
2. _"Having undergone therapy several years ago, I had heard about Matter of Heart through word-of-mouth and was keen to learn more about the practice. I found the site easy to navigate and visually appealing. The `.accordion` layout of the FAQ section conveniently allowed me to skip past the basic general queries about psychotherapy as a whole and focus instead on the more specific questions I had about this business. As an active social media user, I immediately decided to follow Matter of Heart on both Facebook and Twitter once I spotted the icons at the foot of the page, since I rely on notifications from these channels to stay up-to-date. Although I haven't yet booked my first appointment, I will probably do so in the coming days, as I can see that the booking process is smooth and straightforward."_
3. _"This being my first visit to a psychotherapy website, I was pleasantly surprised by the array of reassuring and instructive content available. The FAQ `.carousel` contained a lot of detail presented in a compact manner. Likewise, the About Me section reassured me about the therapist's credentials and made me consider booking an introductory session. The following day, when I had more time available, I returned to the site to watch the embedded video explaining 'How Psychotherapy Works', and that was enough to convince me to schedule an appointment."_

From a practical standpoint, best UX practice was followed to ensure that all external links open in a separate browser tab, thus preventing users from inadvertently leaving the site. This was implemented through sitewide use of the `target="_blank"` attribute. Again, this was systematically checked and verified throughout the project's duration. All internal buttons and links to elements with IDs within the page itself were similarly tested to confirm they are pointing to the correct section. A decision was also made on design grounds to remove default CSS `text-decoration` styling (i.e. underlines) from all website links.

HTML5 form validation was applied to the site's Contact form in line with current [Bootstrap documentation](https://getbootstrap.com/docs/4.0/components/forms/#validation). Thorough testing was then conducted prior to deployment to ensure the following:

+ If a user tries to submit a contact request by clicking the 'Send Message' `button` **without completing any of the form's `input` fields**, a feedback message will appear indicating that unfilled forms may not be submitted.
+ Likewise, since all `.form-control` elements contain a `required` attribute, attempting to submit the form **with just a single invalid `input` field** will also return a feedback message asking users to please fill the form in correctly. Thus:
  + A valid `text` entry must be provided when filling out the 'Name' field
  + A valid `email` address must be provided when filling out the 'Email' field
  + The form's drop-down list requires users to select a valid option from the available menu
  + A valid message must be entered in the `textarea` field prior to submission - otherwise a "Please fill in this field!" alert will again appear underneath.

One other form design aspect worth mentioning is that, since this is a static frontend site for the time being, form submission functionaility is currently limited. With this in mind, and in lieu of adding a redundant modal plugin element to the page, an extended `placeholder` message (visible on larger devices) was supplied in the `textarea` box informing users that all submitted contact requests will be responded to "as soon as possible".


## Deployment

[GitHub Pages](https://pages.github.com/) was the hosting service chosen for website deployment. The site repository's `master` branch was selected as the publishing source by following the steps detailed in [this GH Help article](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages). All new `commit`s made from the `master` branch will therefore automatically update the site.


In order to run this project locally, you can clone [the remote GH repository](https://github.com/loosenthedark/UCFD-milestone-project) for use and modification within your own local environment. This can easily be done by first of all changing the current working directory in your Terminal to the location where you want the cloned directory to be made. Once this is done, simply type `git clone` and then paste `https://github.com/loosenthedark/UCFD-milestone-project.git` into the command line. A more thorough explanation of all the steps involved in this cloning process can be found [here](https://help.github.com/en/articles/cloning-a-repository).

## Credits

### Content

All text featured across the Landing (Home), About Me and FAQ sections was provided by the site owner, with some minor edits made by me during construction. The text featured in the blurbs throughout the Blog section is copied from the introductions to relevant Wikipedia articles - each of which is linked to via its accompanying 'Read More' button.

### Media

The profile image of the site owner was provided by him directly - some vertical cropping was later applied by me. The two logo images positioned below this lead image were sourced from the corresponding organisations' websites, namely [Irish Association for Counselling and Psychotherapy](https://www.iacp.ie/) ([image link](https://www.iacp.ie/images/logo.png)) and [Dublin Business School](https://www.dbs.ie/) ([image link](https://www.dbs.ie/images/default-source/logos/dbs-logo-2019-small.png)).
All other images used, namely the background images in the Landing and Contact sections and the box divider images in the Blog section, were taken from [Pexels](https://www.pexels.com/), a free-to-use library of high-quality stock photos.


The two embedded media files featured in the FAQ section on larger devices were taken, respectively, from [YouTube](https://www.youtube.com/watch?v=g-i6QMvIAA0) (video) and [SoundCloud](https://soundcloud.com/user-685330905/what-is-psychotherapy) (audio), and are both linked to clearly and appropriately.


Font Awesome Icons were inserted alongside the media files in the FAQ section and across the top of the Contact form on larger devices, as well as in the text boxes throughout the Blog section and along the `footer`.


The `shortcut icon` (favicon) displayed in the website's tab was supplied with permission by [Gregor Cresnar](https://www.flaticon.com/authors/gregor-cresnar) of [Flaticon](https://www.flaticon.com/).


Finally, credit is due to Code Institute UCFD student lead Anthony O'Brien for suggesting [TinyJPG](https://tinyjpg.com/) as an indispensable resource for compressing image files prior to upload in order to speed up site load time. This process was applied to almost all images used in this project.


### Acknowledgements

Thanks to my mentor Antonio for his timely feedback, encouragement and recommendations throughout this project. Anto pointed me towards [WrapBootstrap](https://wrapbootstrap.com/) for browsing a wide selection of Bootstrap templates and themes, which provided plenty of inspiration. It was also he who suggested I should use Responsinator for testing site responsiveness throughout the construction process, and this proved to be an invaluable tool.


Other excellent pieces of advice came via @Anna_G and @Eventyret_mentor (among others) in Code Institute's Slack room. Thanks, guys!


////////////////////////////////////////////////////////////////////////////////////

* Entypo pictograms (used in site logo, favicon, `footer` and icons elsewhere) by Daniel Bruce — www.entypo.com

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

* Not happy with settling for a page refresh (`location.reload()`) workaround when unchecking leaderboards custom toggler switch - will look to rectify this at some point in the future

* The TransferMarket API applies a rate limit of 5 requests per second, which prevented me from making calls to it in order to populate my StrikeValue tables (for both individual scorers and clubs). Instead, I had to manually log scorer and squad values in my local .json files and retrieve the relevant data from there to load these tables, which proved to be quite time-consuming.

* Reminders on how to catch and handle errors and use them to implement client-side and server-side validation with alert messages on invalid form submit came from [this Udemy project source code](http://completewebdevelopercourse.com/content/6-php/7.11.php)

* Overriding/disabling default HTML5 client-side form validation was achieved by adding a `novalidate` attribute to the `#contact-form` element, as suggested in [this Stack Overflow solution](https://stackoverflow.com/questions/3090369/disable-validation-of-html5-form-elements)