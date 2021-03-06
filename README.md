<h1 align='center'>StrikeForce Website</h1>



<p align="center"><img src="docs/images/screenshots/strikeforce-logo.png" alt="StrikeForce logo" width="200" height="auto"></p>





<p align="center"><a href="https://loosenthedark.github.io/strikeforce/" style="font-weight:bold;">Live link to deployed project</a> (hosted on GitHub Pages)</p>


<p align="center"><a href="http://loosenthedark.tech/strikeforce/" style="font-weight:bold;">Alternative link</a> (hosted on loosenthedark.tech)</p>


---



**StrikeForce** is an interactive frontend site, offering users a bespoke data portal through which they can browse, select and sort through a range of information and statistics relating to goals scored in the English Premier League so far this season (2020-21). The site meets the needs and objectives of a variety of users by allowing them to actively engage with the relevant data to gain a clear understanding of the facts behind the figures. Both first-time and returning visitors will be impressed by StrikeForce's minimalist mobile-first design and its intuitive navigation and layout, while their knowledge of PL goalscorers will be enriched by the site's incisive and intelligent data analysis.




<p align="center"><img src="docs/images/screenshots/strikerate-leaderboards.png" alt="StrikeForce 'strikerate' leaderboards screenshots across multiple device sizes" width="70%" height="auto"></p>




## User Experience (UX)

An abundance of football data websites exist nowadays, each claiming to offer visitors a definitive breakdown of the statistics and trends that matter. However, many of these sites only afford fans incomplete overviews, due to poorly-collated data and misleadingly-labelled visualisations. StrikeForce aims to address such shortcomings by presenting users with robust, reliable and "meaningful data for the beautiful game" (the site's tag line, as cited in the `title` element at the top of each page).

With this in mind, it is worth taking a close look at a selection of **User Stories**, from inception to completion, that combine to showcase how StrikeForce empowers a diverse cross-section of visitors to achieve their UX goals.

In no particular order, a list of such User Stories includes (but is not limited to) the following:

1. "As a fan of the [Premier League](https://en.wikipedia.org/wiki/Premier_League) in general, I'm looking for a dashboard-style website that's easy to navigate and gives a clear and concise breakdown of who the most free-scoring players and teams are, and how prolific they are compared to others."
2. "As a fan of the player [Patrick Bamford](https://en.wikipedia.org/wiki/Patrick_Bamford), I want to be able to track his goalscoring record over the course of the season."
3. "As a fan of the club [Leeds United](https://en.wikipedia.org/wiki/Leeds_United_F.C.), I want to be able to track its goalscoring record over the course of the season."
4. "As a non-English speaking fan of the Premier League and frequent social media user, I wish to be able to search for goalscorers by the hashtags/acronyms associated with their clubs that I see on Instagram, Twitter etc."
5. "As a statistically-minded follower of the PL, I take issue with most readily-available 'leading goalscorer' charts, as they tend to include penalties scored. For instance, both the [BBC](https://www.bbc.com/sport/football/premier-league/top-scorers) and [official PL](https://www.premierleague.com/stats/top/players/goals) countdowns present their data in an unfiltered and therefore somewhat misleading form. For me, the mark of a top striker is someone who scores regularly from open play, so I'd like to be able to access a chart that's adjusted for penalties scored."
6. "As an avid [Fantasy Premier League](https://fantasy.premierleague.com/) participant, I already know who the outright top PL scorers are, but I need to figure out which players offer the best 'value for money' return (i.e. who scores the most goals per €1 million valuation) as I look to assemble my virtual squad for the rest of the 2020-21 season."
7. "As a return visitor to the site, I would like to be able to follow it on social media so I can keep up to date with its content."
8. "As someone who favours traditional email over social media, I'm wondering if it's possible to sign up to StrikeForce's mailing list in order to be made aware of any updates and announcements."
9. "As site owner, I am looking to build a community of regular users who will come to view StrikeForce as their 'one-stop shop' source of accurate and informative PL goalscoring data. In order to do this, I need a site that's user-friendly, feels lightweight and uncluttered and is designed to be fully responsive across all device sizes."



From a **Design** perspective, the look and feel of [this 'Dashboard' Official Bootstrap Theme](https://themes.getbootstrap.com/product/dashboard/) struck me as a solid foundation on which to base the site, as it offers a slick, modern-looking template design and a suite of eye-catching components and plugins to help drive engagement and deliver a dynamic user experience. The theme is built on top of [Bootstrap's core (v4.0.0-alpha.6)](https://v4-alpha.getbootstrap.com/) and is tailored towards interactive data visualisation and presentation.



Besides white and off-white for several of the site's Heading elements, the two main **colours** used throughout are a deep charcoal/slate grey for the `body`'s main background and a piercing ocean blue for standout site logos and interactive buttons, tabs, directional arrows etc. Both of these were available [right out of the box with the BS theme I had chosen](https://themes.getbootstrap.com/preview/?theme_id=1468) - the latter as its '-primary' colour for use with relevant components - and since they also offered [an acceptable colour contrast ratio](https://webaim.org/resources/contrastchecker/?fcolor=1997C6&bcolor=252830), I decided to go with them as my main colour scheme. These were supplemented by secondary use of more muted greyish tones for elements such as tabular data text and `footer` and `nav` icons.



My choice of **font** for the site's main logo was informed by the ready accessibility of [Entypo](http://entypo.com/), which came bundled with the Dashboard theme and also gave access to "an awesome, high quality set of icon glyphs" ([per the theme's docs](https://themes.getbootstrap.com/preview/?theme_id=1468)) for use in lieu of Bootstrap's default icon font, Glyphicons. The widely-utilised Roboto font was used everywhere else throughout the site, with Helvetica Neue > Helvetica > Arial > sans-serif as the stated fallback options.



The site opts for a minimalist approach in terms of **imagery**: there is no background hero image, for instance, on the main landing page. It was felt that having one might distract visitors from focusing on the main search bar when they first arrive, and so background images have been forsaken in favour of informational icons that are employed sparingly but effectively to guide the user. A compilation of these icons can be seen in the flashing hero animation on the site's 'About' page. These have mostly been sourced from the aforementioned Entypo library, but a few [Font Awesome](https://fontawesome.com/) icons have also been used.



Apart from this, most dynamically-loaded imagery, such as player profile photos and international flags, has been retrieved and inserted into the DOM by API calls to the (unofficial) [TransferMarket API](https://rapidapi.com/apidojo/api/transfermarket). Some of the club crest images, meanwhile, were inserted using this same process, while others were downloaded from the relevant club [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) pages, and as such are used here in line with that site's 'fair use' policy.


## Features

### Main landing page:

- Inspiration for the main landing page's scorer/club search functionailty was gained from [this Traversy Media video tutorial](https://www.youtube.com/watch?v=1iysNUrI3lw&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=16) on leveraging JSON data to build an autocomplete application

- Users can toggle with ease between scorer and club search bars

- The autocomplete filter returns all available matches from the relevant (local) JSON files for search strings greater than two characters in length in the case of scorers and greater than zero characters in the case of clubs:

<p align="center"><img src="docs/images/screenshots/strikeforce-landing1.png" alt="StrikeForce landing page scorer search" width="48%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-landing2.png" alt="StrikeForce landing page club search" width="48%" height="auto"></p>

- Once a dynamic list of matching scorers/clubs has been returned, users may select an individual scorer/club by clicking on the appropriate `.btn-strike-rate(-club)` `<a>` element on the right-hand side of each player/club's data panel:

<p align="center"><img src="docs/images/screenshots/strikeforce-landing3.png" alt="StrikeForce landing page scorer search" width="15%" height="auto" style="margin-right: 20px;">
<img src="docs/images/screenshots/strikeforce-landing4.png" alt="StrikeForce landing page club search" width="15%%" height="auto"></p>

- This will load the data dashboard relating to the scorer/club in question, each of which consists of a header image and main content pane separated by a tabbed navigation bar that can be clicked to select from a total of three custom `.statcard` data visualisation components: one of these (labelled 'Summary') displays static data, while the other two ('StrikeRate' and 'StrikeValue') allow users to interact with colour-coded charts by filtering the data to be displayed (e.g. by clicking a toggle button that either excludes or includes penalties scored):

<p align="center"><img src="docs/images/screenshots/strikeforce-landing5.png" alt="StrikeForce landing page scorer search" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-landing6.png" alt="StrikeForce landing page scorer search" width="15%%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-landing7.png" alt="StrikeForce landing page scorer search" width="15%%" height="auto"></p>

### 'Leaderboard' pages:
  
- Each of the site's three subcategorised Leaderboard pages (again divided by 'Summary', 'StrikeRate' and 'StrikeValue', thus establishing a consistent, intuitive navigational theme) consists of sortable tabular data.
- Not only can users swiftly move between these three table categories (either by using the site's main `nav` menu or by clicking one of the three secondary nav tabs directly above each table)...

<p align="center"><img src="docs/images/screenshots/strikeforce-leaderboards1.png" alt="StrikeForce Leaderboards page Summary table" width="25%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-leaderboards2.png" alt="StrikeForce Leaderboards page StrikeRate table" width="25%%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-leaderboards3.png" alt="StrikeForce Leaderboards page StrikeValue table" width="25%" height="auto"></p>

- ...but they can also alternate between viewing individual and club goalscoring leaderboards by means of a pure CSS custom switch that was built using tips and code blocks from [Martin Haubek](https://haubek.github.io/custom-switch/) and retrieved from [this article](https://www.cssscript.com/ios-style-switches-bootstrap-4/):

<p align="center"><img src="docs/images/screenshots/strikeforce-leaderboards4.png" alt="StrikeForce Leaderboards page custom switch" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-leaderboards5.png" alt="StrikeForce Leaderboards page custom switch" width="15%" height="auto"></p>

- By default, each table is sorted in descending order of total goals scored outright, as indicated by the downward-pointing directional arrow visible in the bottom-right corner of the 'Goals' `th` element in the first screenshot below. However, as seen in the second screenshot, users may interact with each table to rearrange the data by clicking on the appropriate `th` category. Data can also be arranged in either descending (downward-pointing arrow) or ascending (upward-pointing arrow) order, according to user preference:

<p align="center"><img src="docs/images/screenshots/strikeforce-leaderboards6.png" alt="StrikeForce Leaderboards page table sorting" width="25%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-leaderboards7.png" alt="StrikeForce Leaderboards page table sorting" width="25%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-leaderboards8.png" alt="StrikeForce Leaderboards page table sorting" width="25%" height="auto"></p>

### 'Dashboard' pages:

- As an alternative to using the main landing page's autocomplete search bars to access data visualisations for individual scorers/clubs, users may instead select from a list of valid options when they navigate to one of the two (Scorers/Clubs) dashboard landing pages. Here they will be prompted by a CSS3 bouncing animation effect on thematic icons within the `.dropdown-toggle` `button` element to trigger a `.dropdown-menu`:

<p align="center"><img src="docs/images/screenshots/strikeforce-dashboards1.png" alt="StrikeForce Dashboards page Scorers dropdown" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-dashboards3.png" alt="StrikeForce Dashboards page Scorers dropdown menu" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-dashboards2.png" alt="StrikeForce Dashboards page Clubs dropdown" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-dashboards4.png" alt="StrikeForce Dashboards page Clubs dropdown menu" width="15%" height="auto"></p>

- In the case of the Scorer dashboards' `.dropdown` functionality, the `.dropdown-menu` content of a second (initially hidden) `.dropdown` component is populated according to the user's choice when prompted to "Choose a club" from the `.dropdown-menu` attached to the panel's first `.dropdown-toggle` `button`. For instance, if the user selects 'Leeds United' from this first `.dropdown-menu`, they will be offered a second selection limited to scorers from that club alone in the suddenly-unhidden "Choose a scorer" menu. See the walkthrough below for further clarification:

<p align="center"><img src="docs/images/screenshots/strikeforce-dashboards5.png" alt="StrikeForce Dashboards page Scorers first dropdown" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-dashboards6.png" alt="StrikeForce Dashboards page Scorers first dropdown menu" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-dashboards7.png" alt="StrikeForce Dashboards page Scorers second dropdown" width="15%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-dashboards8.png" alt="StrikeForce Dashboards page Scorers second dropdown menu" width="15%" height="auto"></p>

- The relevant data visualisation dashboard (identical to the corresponding one found on the main landing page) will then load according to the user's selection of a scorer from this *second* `.dropdown-menu` list.

- Guidance on how to use jQuery to implement this dynamic assembly of a secondary `.dropdown-menu` list's content based on a user's primary `.dropdown-menu` selection was received from reading the answer to [this Stack Overflow query](https://stackoverflow.com/questions/21561353/jquery-populate-drop-down-options-based-on-another-drop-down-option-using-javasc/21640704)

### 'About' page:

- The site's only purely decorative (i.e. non-interactive) page, the 'About' page nevertheless boasts a striking pure CSS animation on page load that combines enlarged versions of several of the site's recurring icons with a prominent rendering of the StrikeForce tag line ("Meaningful data for the beautiful game"):

<p align="center"><img src="docs/images/screenshots/strikeforce-about.png" alt="StrikeForce About page" width="70%" height="auto"></p>

- Pure CSS angled arrow-style borders were applied to the 'About' page's `.progress-bar` elements by referencing [this Stack Overflow thread](https://stackoverflow.com/questions/19736655/pointed-angled-arrow-style-borders-in-css) and [this CSS-Tricks tutorial](https://css-tricks.com/snippets/css/css-triangle/)

- A decision was also made to restyle the site's main `nav` element for the 'About' and 'Contact' pages on tablet and desktop devices. This was a largely cosmetic modification: it was felt that keeping the `.sidebar` `nav` layout on larger screens would make both these pages appear asymmetrical and therefore not as pleasing on the eye. By way of illustration, compare...

<p align="center"><img src="docs/images/screenshots/strikeforce-navlanding.png" alt="StrikeForce landing page nav md" width="25%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-navleaderboards.png" alt="StrikeForce Leaderboards page nav md" width="25%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-navdashboards.png" alt="StrikeForce Dashboards page nav md" width="25%" height="auto"></p>



<p align="center">.....with.....</p>



<p align="center"><img src="docs/images/screenshots/strikeforce-navabout.png" alt="StrikeForce About page nav md" width="25%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-navcontact.png" alt="StrikeForce Contact page nav md" width="25%" height="auto"></p>



### 'Contact' page:

- The site's contact page features an email newsletter subscription form that has been adapted from [this design template](https://www.markuptag.com/newsletter-subscription-form-design-in-bootstrap-4/)
- Users are encouraged to submit their email address in order to be kept updated via the site's monthly newsletter; there is a brightly-coloured 'Subscribe' `button` element that triggers a `form` submit event when users click on it
- There is also a timely reminder of StrikeForce's social media presence, with the social icons no longer located in the `footer`, but rather inside the `#contact-form` `.container` close to the call-to-action submit `button`
- When users successfully input their email address and submit the `form`, a `.modal` is activated thanking them for taking the time to subscribe and assuring them they will soon receive a follow-up email to confirm their subscription:

<p align="center"><img src="docs/images/screenshots/strikeforce-contact1.png" alt="StrikeForce Contact page pre-submit" width="25%" height="auto" style="margin-right: 10px;">
<img src="docs/images/screenshots/strikeforce-contact2.png" alt="StrikeForce Contact page post-submit" width="25%" height="auto"></p>

- [This Stack Overflow solution](https://stackoverflow.com/questions/50579924/bootstrap-modal-not-showing-properly-centered) suggested a workaround for Bootstrap's `.modal-dialog-centered` class (inexplicably) malfunctioning - by following it, I was able to achieve vertical centering for my modal on contact `form` submit (see second screenshot above)



### Wireframes

- [mobile](docs/wireframes/strikeforce_mobile.pdf)
- [tablet](docs/wireframes/strikeforce_tablet.pdf)
- [desktop](docs/wireframes/strikeforce_desktop.pdf)



## Technologies Used

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programmes

- [Bootstrap (v4.0.0-alpha.6)](https://v4-alpha.getbootstrap.com/)
- [jQuery (v2.1.4)](https://jquery.com/)
- [Font Awesome](https://fontawesome.com/)
- [Popper.js](https://popper.js.org/)
- [Chart.js](https://www.chartjs.org/)
- [tablesorter](https://mottie.github.io/tablesorter/)
- [EmailJS](https://www.emailjs.com/)
- [TransferMarket API](https://rapidapi.com/apidojo/api/transfermarket)


## Testing


- All testing was performed manually, and on a near-constant basis as the project evolved. [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2) served as an indispensable resource throughout this testing process, allowing incremental adjustments to be made to the site's infrastructure and layout. The site's responsiveness was also closely monitored and rigorously tested from start to finish using the bespoke developer-oriented [Blisk web browser](https://blisk.io/).

- In addition to Chrome and Blisk, the site's functionality and appearance was also checked repeatedly in the Firefox, Safari, Microsoft Edge and Amazon Silk browsers. Numerous devices and screen sizes - belonging mostly to friends and family members - were similarly used to identify any blind spots in the site's responsive design and feature compatibility. These included the Samsung Galaxy S5, iPhone 7 Plus, Moto G4, Huawei P20, MacBook Pro, iPad and Kindle Fire.

- During testing, a display bug was discovered that caused the `footer` content to rise and cramp/obscure the text input fields on mobile devices when the device keyboard was enabled. A workable hack for overcoming this issue was taken from [this Stack Overflow query](https://stackoverflow.com/questions/22627646/how-to-prevent-mobile-keyboard-from-rising-footer-over-the-text-fields)

- [W3C](https://www.w3.org/)'s [Markup Validation Service](https://validator.w3.org/) was used to test the validity of all HTML used in this project. The code was [validated by direct input](https://validator.w3.org/#validate_by_input), and all suggested corrections were then made. As a result, all five of the site's HTML source documents now return a _"Document checking completed. No errors or warnings to show."_ message upon being passed through this validator, as is reflected in the following screenshots:
  - [index.html validation](docs/images/validation/html-validation1.png)
  - [leaderboards.html validation](docs/images/validation/html-validation2.png)
  - [dashboards.html validation](docs/images/validation/html-validation3.png)
  - [about.html validation](docs/images/validation/html-validation4.png)
  - [contact.html validation](docs/images/validation/html-validation5.png)

  <p><img src="docs/images/validation/html-validation-icon.png" alt="W3C HTML validation icon" width="15%" height="auto" style="margin-left: 30px;"></p>

- Likewise, the website's custom CSS stylesheet was checked for errors using [W3C](https://www.w3.org/)'s [CSS Validation Service](https://jigsaw.w3.org/css-validator/). Once again, [validation by direct input](https://jigsaw.w3.org/css-validator/#validate_by_input) was the preferred method selected, and all necessary changes were subsequently carried out. Consequently, the stylesheet now returns a _"Congratulations! No error found."_ message upon being passed through this validator, as the following screenshot indicates:
  - [style.css validation](docs/images/validation/css-validation.png)

  <p><img src="docs/images/validation/css-validation-icon.png" alt="W3C CSS validation icon" width="16.5%" height="auto" style="margin-left: 30px;"></p>

- In a similar manner, all custom JavaScript files were validated against [JSHint](https://jshint.com/)'s error-detection tool, which is available both as an online linter and a VS Code extension for real-time JS problem-solving. The five screenshots below show that, after heeding various warning and error messages, at the time of deployment all five .js documents passed JSHint validation with no problems detected:
  - [script.js validation](docs/images/validation/js-validation1.png)
  - [leaderboards.js validation](docs/images/validation/js-validation2.png)
  - [dashboards.js validation](docs/images/validation/js-validation3.png)
  - [about.js validation](docs/images/validation/js-validation4.png)
  - [email.js validation](docs/images/validation/js-validation5.png)

  <p><img src="docs/images/validation/js-validation-icon.png" alt="JSHint icon" width="15%" height="auto" style="margin-left: 30px;"></p>

- Returning to the previously-outlined User Stories, each user objective was carefully deconstructed in order to verify that all of the following outcomes can be said to hold true:

1. **"As a fan of the Premier League in general, I'm looking for a dashboard-style website that's easy to navigate and gives a clear and concise breakdown of who the most free-scoring players and teams are, and how prolific they are compared to others."**
   - "I found that the site met my needs in that it was very simple to navigate between the five main sections, each of which shared a pleasingly consistent design. In particular, I found the option to search by either autocomplete text input (on the main landing page) or dropdown-menu lists (on the dashboards landing page) to be very convenient. I also liked that I could easily manipulate the tabulated leaderboards to discover which scorers/clubs were most prolific under a variety of different headings."
2. **"As a fan of the player Patrick Bamford, I want to be able to track his goalscoring record over the course of the season."**
   - "Upon landing on the site's main page, I was pleased to discover that a helpful search bar prompting me to "Enter scorer or club name" gained focus after a few seconds. As I began typing the name 'Patrick Bamford' into the text input field, after the first three letters I noticed the search bar's position shift upwards slightly to make way for a bright call-to-action panel with what looked like a button along its right-hand side. I subsequently clicked on this button to reveal a data dashboard summarising relevant statistics and graphics illustrating how many goals Bamford has scored so far this season."
   <p align="center"><img src="docs/images/screenshots/strikeforce-userstory2a.png" alt="StrikeForce user story 2" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory2b.png" alt="StrikeForce user story 2" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory2c.png" alt="StrikeForce user story 2" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory2d.png" alt="StrikeForce user story 2" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory2e.png" alt="StrikeForce user story 2" width="15%" height="auto" </p>
3. **"As a fan of the club Leeds United, I want to be able to track its goalscoring record over the course of the season."**
   - "It was quick and easy to locate goalscoring data for Leeds United: I firstly toggled the search bar in the middle of the main landing page by clicking on the 'Clubs' pill button underneath the input field. From there, as soon as I typed the letter 'L' it offered me three results instantly: Liverpool, Leicester City and Leeds United. Clicking on the icon on the RHS of the Leeds panel brought me to a mini-portal of data visualisations where I could see a breakdown of the squad's average age, current league position, average player value and number of goals scored to date. Navigating horizontally along this area's embedded nav bar, I was able to view and interact with doughnut charts indicating that Leeds' current mark of 20+ goals per €100 million squad valuation is the highest of all PL teams."
   <p align="center"><img src="docs/images/screenshots/strikeforce-userstory3a.png" alt="StrikeForce user story 3" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory3b.png" alt="StrikeForce user story 3" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory3c.png" alt="StrikeForce user story 3" width="15%" height="auto"></p><p align='center'><img src="docs/images/screenshots/strikeforce-userstory3d.png" alt="StrikeForce user story 3" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory3e.png" alt="StrikeForce user story 3" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory3f.png" alt="StrikeForce user story 3" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory3g.png" alt="StrikeForce user story 3" width="15%" height="auto" </p>
4. **"As a non-English speaking fan of the Premier League and frequent social media user, I wish to be able to search for goalscorers by the hashtags/acronyms associated with their clubs that I see on Instagram, Twitter etc."**
   - "Searching for my favourite clubs and goalscorers on StrikeForce was really straightforward thanks to the fact that it's possible to search by club hashtags/acronyms. Thus, entering 'LUFC' into the main search bar on the site's landing page returned a list of all Leeds United's leading scorers for the season so far. I tried using this search method for clubs as well, and it worked similarly."
   <p align='center'><img src="docs/images/screenshots/strikeforce-userstory4a.png" alt="StrikeForce user story 4" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory4b.png" alt="StrikeForce user story 4" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory4c.png" alt="StrikeForce user story 4" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory4d.png" alt="StrikeForce user story 4" width="15%" height="auto" </p>
5. **"As a statistically-minded follower of the PL, I take issue with most readily-available 'leading goalscorer' charts, as they tend to include penalties scored. For instance, both the BBC and official PL countdowns present their data in an unfiltered and therefore somewhat misleading form. For me, the mark of a top striker is someone who scores regularly from open play, so I'd like to be able to access a chart that's adjusted for penalties scored."**
   - "StrikeForce did exactly what I hoped it would do, namely provide a list of leading goalscorers from open play. I could still view an unfiltered leaderboard of top goalscorers outright, such as can be found elsewhere on the web, but this site's enhanced functionality allowed me to drill down into these numbers to see those players and clubs who don't rely so much on penalties to boost their goalscoring tallies."
   <p align="center"><img src="docs/images/screenshots/strikeforce-userstory5a.png" alt="StrikeForce user story 5" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory5b.png" alt="StrikeForce user story 5" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory5c.png" alt="StrikeForce user story 5" width="15%" height="auto"></p><p align='center'><img src="docs/images/screenshots/strikeforce-userstory5d.png" alt="StrikeForce user story 5" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory5e.png" alt="StrikeForce user story 5" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory5f.png" alt="StrikeForce user story 5" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory5g.png" alt="StrikeForce user story 5" width="15%" height="auto" </p>
6. **"As an avid Fantasy Premier League participant, I already know who the outright top PL scorers are, but I need to figure out which players offer the best 'value for money' return (i.e. who scores the most goals per €1 million valuation) as I look to assemble my virtual squad for the rest of the 2020-21 season."**
   - "When I clicked on the site's main navigation menu icon in the top-right corner of my smartphone's screen, I immediately saw a 'Leaderboards' header with three items listed underneath: 'Summary', 'StrikeRate' and 'StrikeValue'. Sensing that StrikeValue might be along the lines of what I was looking for, I clicked through to find a sortable table capable of listing goalscorers in order of goals (+/- penalties) scored per €1 million valuation. For instance, although Mohamed Salah is currently the top goalscorer outright, I was able to see that his hefty €120 million price tag means this equates to a mere 0.07 goals per €1 million. By contrast, the scorer with the highest goalscoring return is Sheffield United's David McGoldrick, with 2.5 goals per €1 million! This type of granular data is very useful to have at my fingertips when I'm picking players for my FPL team."
   <p align='center'><img src="docs/images/screenshots/strikeforce-userstory6a.png" alt="StrikeForce user story 6" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory6b.png" alt="StrikeForce user story 6" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory6c.png" alt="StrikeForce user story 6" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory6d.png" alt="StrikeForce user story 6" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory6e.png" alt="StrikeForce user story 6" width="15%" height="auto" </p>
7.  **"As a return visitor to the site, I would like to be able to follow it on social media so I can keep up to date with its content."**
    - "The site's social media icons were easy to find, as they are located in the footer/at the bottom of each page, as is the norm nowadays. A quick look at the three channels listed - each of which opened in a separate tab when I clicked on the relevant icon - assured me that StrikeForce already has a sizeable social media following, and is therefore a trusted and reputable data source. I decided to follow its Twitter account, as this is my preferred site."
   
    <p align='center'><img src="docs/images/screenshots/strikeforce-userstory7a.png" alt="StrikeForce user story 7" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory7b.png" alt="StrikeForce user story 7" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory7c.png" alt="StrikeForce user story 7" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory7d.png" alt="StrikeForce user story 7" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory7e.png" alt="StrikeForce user story 7" width="15%" height="auto" </p>

   <p align='center'><img src="docs/images/screenshots/strikeforce-userstory7f.png" alt="StrikeForce user story 7" width="30%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory7g.png" alt="StrikeForce user story 7" width="30%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory7h.png" alt="StrikeForce user story 7" width="30%" height="auto" </p>
   
8. **"As someone who favours traditional email over social media, I'm wondering if it's possible to sign up to StrikeForce's mailing list in order to be made aware of any updates and announcements."**
   - "When I selected the site's contact page from the main navigation bar, I found a colourful and engaging panel asking me to enter my email address in order to be added to a monthly newsletter mailing list. I duly filled in the email input field and clicked on the 'Subscribe' button. Before the page refreshed, a modal dialogue box appeared in the centre of my screen thanking me for signing up. This was followed a few minutes later by an introductory email from the StrikeForce team."
   <p align="center"><img src="docs/images/screenshots/strikeforce-userstory8a.png" alt="StrikeForce user story 8" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory8b.png" alt="StrikeForce user story 8" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory8c.png" alt="StrikeForce user story 8" width="15%" height="auto"></p><p align='center'><img src="docs/images/screenshots/strikeforce-userstory8d.png" alt="StrikeForce user story 8" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory8e.png" alt="StrikeForce user story 8" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory8f.png" alt="StrikeForce user story 8" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-userstory8g.png" alt="StrikeForce user story 8" width="15%" height="auto" </p>
   
9. **"As site owner, I am looking to build a community of regular users who will come to view StrikeForce as their 'one-stop shop' source of accurate and informative PL goalscoring data. In order to do this, I need a site that's user-friendly, feels lightweight and uncluttered and is designed to be fully responsive across all device sizes."**
   - "I am happy that the site in its current guise delivers a positive user experience that will drive engagement and attract new visitors through a combination of innovative data visualisations and  streamlined navigation, underscored by a distinctive colour scheme and clever use of icons and custom components. The ease with which users can keep track of site updates (be it on social media or through the monthly email newsletter) should hopefully facilitate the growth of a loyal following."
   <p align="center"><img src="docs/images/screenshots/strikeforce-userstory9.png" alt="StrikeForce club data visualisation screenshots across multiple device sizes" width="70%" height="auto"></p>

- Error Handling

  - Although StrikeForce's design is mostly free from the kinds of user input that can trigger site-wide errors and/or cause users to either get lost within the site or inadvertently navigate away from it, there was nevertheless a need to address the small number of potential cul de sacs and pitfalls visitors might sometimes encounter while browsing the site.
  - With these in mind, the following four categories of error triggered by invalid user interaction have been identified and catered for by relaying appropriate `.alert` messages whenever a user reaches a navigational dead end:

    - When searching for a goalscorer using the main landing page's primary autocomplete search bar, if a user enters a search string at least three characters long for which there are no valid matches, the following tailored `.alert-warning` message is provided by way of feedback:

    <p align="center"><img src="docs/images/screenshots/strikeforce-alert1.png" alt="StrikeForce landing page error alert" width="15%%" height="auto"></p>

    - Similarly, when searching for a club, if a user enters a search string at least one character in length for which there are no valid matches, they are provided with the following instructional `.alert`:

    <p align="center"><img src="docs/images/screenshots/strikeforce-alert2.png" alt="StrikeForce landing page error alert" width="15%%" height="auto"></p>

    - Elsewhere, if the user attempts to submit the newsletter subscription `form` on the 'Contact' page without entering anything in the email input field, they will be given the following `.alert` message:

    <p align="center"><img src="docs/images/screenshots/strikeforce-alert3.png" alt="StrikeForce contact page error alert" width="15%%" height="auto"></p>

    - Meanwhile, if they try submitting an invalid email address, they will be asked to try again using the following `.alert` message:

    <p align="center"><img src="docs/images/screenshots/strikeforce-alert4.png" alt="StrikeForce contact page error alert" width="15%%" height="auto"></p>

  - A decision was made to override/disable default HTML5 client-side `form` validation in favour of the custom client-side validation described above. This was achieved by adding a `novalidate` attribute to the `#contact-form` element, as suggested in [this Stack Overflow solution](https://stackoverflow.com/questions/3090369/disable-validation-of-html5-form-elements)

  - On the server side, any error such as a '404 Not Found' Client Error (resulting from an invalid API call, for instance) or a '503 Service Unavailable' Server Error will generate the following catch-all `.alert` message for the user, informing them of the existence of a problem and asking them to "(p)lease refresh the page and try again":

    <p align="center"><img src="docs/images/screenshots/strikeforce-alert5.png" alt="StrikeForce Contact page pre-submit" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-alert6.png" alt="StrikeForce Contact page post-submit" width="15%" height="auto"></p>

## Deployment

[GitHub Pages](https://pages.github.com/) was the hosting service chosen for website deployment. The site repository's master branch was selected as the publishing source by following the steps detailed in [this GH Help article](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages). All new commits made from the master branch will therefore automatically update the site.


In order to run this project locally, you can clone [the remote GH repository](https://github.com/loosenthedark/strikeforce) for use and modification within your own local environment. This can easily be done by first of all changing the current working directory in your Terminal to the location where you want the cloned directory to be made. Once this is done, simply type 'git clone' and then paste 'https://github.com/loosenthedark/strikeforce.git' into the command line. A more thorough explanation of all the steps involved in this cloning process can be found [here](https://help.github.com/en/articles/cloning-a-repository).

## Credits

### Code

- The following articles and resources proved helpful at various stages throughout the project's evolution:

  - Advice on how to combine the JS `normalize()` and `replace()` methods to remove accentuated characters' diacritics enabling API calls to return scorers with accentuated characters in their names was received from the top answer to [this Stack Overflow query](https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript)

  - I learned how to skip over an array element when using the JS `map()` method by first of all applying the `filter()` method to the array from [this Stack Overflow thread](https://stackoverflow.com/questions/24806772/how-to-skip-over-an-element-in-map). I needed to do this due to a bug generated by a scorer's market value being listed as 'null' at the TransferMarket API endpoint

  - A jQuery + CSS fix for animating the site's custom `#nav-toggler` icon on click incorporating [Font Awesome](https://fontawesome.com) icons was found in [this video tutorial](https://www.youtube.com/watch?v=g7v4BB9IMRw)

  - I needed a way to remove characters from the end of various numerical data strings returned by API calls, which I found thanks to [this Stack Overflow solution](https://stackoverflow.com/questions/31489413/remove-last-3-characters-of-string-or-number-in-javascript/45165923)

  - During testing, the `.icon-trophy` icon overlay flanking the left edge of the landing page's `input` element was found to be out of position when the site was viewed in either Firefox or Safari. I managed to find workarounds (CSS hacks) for this bug [here](https://stackoverflow.com/questions/952861/targeting-only-firefox-with-css) (Firefox) and [here](https://gist.github.com/jbutko/6718701) (Safari)

  - Guidance on implementing flexible client-side `table` sorting using the [Tablesorter](http://tablesorter.com/) jQuery plugin was found [here](https://bootstrap-themes.github.io/dashboard/docs/index.html#tablesorter)

  - I needed a way to implement a static/fixed (i.e. non-sortable) initial 'row number' column in my leaderboard tables, as well as a means of excluding the third (club crest image) column from sorting. I accomplished both of these tasks by following suggestions found [here](https://forum.jquery.com/topic/tablesorter-freeze-one-column) and [here](https://stackoverflow.com/questions/437290/exclude-a-column-from-being-sorted-using-jquery-tablesorter)

  - When sorting the names of goalscorers, my tablesorter plugin initially sorted them by first name - however, I needed a way of sorting them by surname instead, as is the norm. For this, I learned how to insert a custom parser thanks to these [two](https://mottie.github.io/tablesorter/docs/example-parsers.html) [examples](https://stackoverflow.com/questions/38209618/tablesorter-sort-by-last-name-ignore-middle-preffered-name).

  - For both my leaderboard and dashboard pages on mobile, I needed a way to hide the main `nav` element whenever one of the links within it that referred to a link on that same page was clicked. I was able to achieve this by using the Bootstrap `data-toggle` method to add the `collapse` component to the HTML links in line with this [Stack Overflow discussion](https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click)

  - Code used to create the site's custom football hexagon pattern `.loader` animation was adapted from [this loading animation tutorial](https://codemyui.com/soccer-ball-hexagon-pattern-loader/)

  - The ['About' page's landing animation](https://loosenthedark.github.io/strikeforce/about.html) was initially not rendering correctly when viewed in the Safari browser. After extensive troubleshooting and debugging, I realised this problem was caused by the fact that the element's original source code had been built using background-images (icons) as the 'animatable' properties. However, as [this MDN Web Docs list of 'Animatable CSS properties'](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) makes clear, background-images aren't capable of being animated. And as [this relatively recent Stack Overflow answer](https://stackoverflow.com/questions/56943604/change-background-image-with-css-animation) points out, "_for performance reasons, it's advisable to use `opacity` and `transform` properties when animating in CSS_." With all of this in mind, I decided to refactor my CSS code so that the animation now consists of a series of staggered mini-animations made on the `opacity` of several absolutely-positioned inner `div`s, each with an enlarged icon embedded within its background. This now renders correctly across all major browsers - see demo below:

  <p align="center"><img src="https://media.giphy.com/media/yzRki4vB4dJtkbqE6y/giphy.gif" alt="StrikeForce About page flashing animation demo" width="70%" height="auto"></p>


### Content

- All static content (e.g. text of the contact page's newsletter signup form) was generated by the developer

- Dynamic content loaded as a result of AJAX requests (API calls):

  - All scorer data relating to number of goals scored has been returned from calls to a local playerdata.json file, which reflects accurate figures for all PL goalscorers who had scored a minimum of 3 goals up to and including the 25th game of the season for each club.
  - All other relevant player data, such as figures for value, age etc. is returned from calls to the live, up-to-date TransferMarket API
  - Because this API applies a rate limit of 5 requests per second, I was prevented from making calls to it in order to populate my StrikeValue tables (for both individual scorers and clubs). Instead, I had to manually log scorer and squad values in my local JSON files and retrieve the relevant data from there to load these tables, which proved to be quite a time-consuming solution.
  - This might also mean that over time, unless I make sure to keep these local JSON files updated, some discrepancies may creep in between figures shown for (scorer/club) 'value'/'average player value' as seen here:

  <p align="center"><img src="docs/images/screenshots/strikeforce-value1.png" alt="StrikeForce value" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-value2.png" alt="StrikeForce value" width="15%" height="auto"></p>
  
  <p align="center">and those used to calculate 'goals (+/- penalties) per €1/100 million' as seen here:</p>

  <p align="center"><img src="docs/images/screenshots/strikeforce-value3.png" alt="StrikeForce value" width="15%" height="auto" style="margin-right: 10px;"><img src="docs/images/screenshots/strikeforce-value4.png" alt="StrikeForce value" width="15%" height="auto"></p>

  - The 'average player value' metric mentioned above was calculated by dividing the figure returned by API calls to TransferMarket for total squad value in the case of each club by the number of players in each particular club's squad. This was seen as offering a more accurate reflection of 'squad value' than simply quoting the total value, as PL squad sizes vary from club to club (and can be anything from 23 to 29 players)

### Media

- Entypo pictograms (used in site logo, favicon, `footer`, 'About' page loading animation and icons elsewhere) by [Daniel Bruce](www.entypo.com)

- Font Awesome 'futbol' icon SVG used as background-image in custom iOS-style switch as well as in the 'About' page's landing animation [with permission](https://fontawesome.com/license). Some minor modifications have been made to the file's source code to alter its colouration, size etc.


### Acknowledgements

- Many thanks to my mentor Aaron for his timely feedback, encouragement and recommendations over the course of this project's development
