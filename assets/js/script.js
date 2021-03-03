const logoContainer = document.querySelector('.container-logo');
const mainContent = document.getElementById('content-main');
const playerSearch = document.getElementById('player-search');
const playerMatchList = document.getElementById('player-match-list');
const clubSearch = document.getElementById('club-search');
const clubMatchList = document.getElementById('club-match-list');
const pillsPlayersTab = document.getElementById('pills-players-tab');
const pillsClubsTab = document.getElementById('pills-clubs-tab');
const pillsTabContent = document.getElementById('pills-tab-content');
const animateNavToggler = document.getElementById('nav-toggler');
const navTogglerIcons = document.querySelectorAll('.nav-toggler-icon');

// Implement custom football spinner while page is loading during API calls
const renderSpinner = () => {
    return '<div class="col-12 px-0 main-loader"><div class="main-fader mt-2 mb-5" responsive-height-comments><div class="loader"><svg viewBox="0 0 866 866" xmlns="http://www.w3.org/2000/svg"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.83 151.5"><path class="path-0" d="M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z" fill="#1997c6" /><path class="path-1" d="M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z" fill="#1997c6" /><path class="path-2" d="M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z" fill="#1997c6" /><path class="path-3" d="M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z" fill="#1997c6" /><path class="path-4" d="M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z" fill="#1997c6" /><path class="path-5" fill="#1997c6" d="M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z" /><path class="path-6" fill="#1997c6" d="M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z"/><path class="path-7" fill="#1997c6" d="M66.28,132.51c13.36,3.78,25.62,3.5,38-.9C91.68,129.59,79.36,128,66.28,132.51Z" /><path class="path-8" fill="#1997c6" d="M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z" /><path class="bb-9" fill="#1997c6" d="M117.35,125c5.58-2.32,16.9-13.84,18.1-19.2-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z" /></svg></svg></div></div></div>';
};

// Search local .json files and filter data

const searchScorers = async playerSearchText => {
    const playerRes = await fetch('assets/data/playerdata.json');
    const scorers = await playerRes.json();

    // Get matches to current text input
    let matches = scorers.filter(scorer => {
        const regex = new RegExp(`^${playerSearchText}`, 'gi');

        return scorer.fname.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(regex) || scorer.lname.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(regex) || scorer.club.match(regex) || scorer.clubAcronym.match(regex);
    });

    if (matches.length === 0) {
        playerMatchList.innerHTML = '';

    };

    if (playerSearchText.length > 2) { showScorers(matches); } else if (playerSearchText.length === 0) {
        matches = [];
        playerMatchList.innerHTML = '';
        logoContainer.classList.remove('no-top-margin');
        logoContainer.classList.add('mt-5');
        mainContent.classList.add('mt-4');
    };

    pillsClubsTab.addEventListener('click', () => {
        matches = [];
        playerMatchList.innerHTML = '';
        playerSearch.value = '';
    });
};

const searchClubs = async clubSearchText => {
    const clubRes = await fetch('assets/data/clubdata.json');
    const clubs = await clubRes.json();

    // Get matches to current text input
    let matches = clubs.filter(club => {
        const regex_ = new RegExp(`^${clubSearchText}`, 'gi');
        return club.clubname.match(regex_) || club.acronym.match(regex_);
    });

    if (matches.length === 0) {
        clubMatchList.innerHTML = '';
    };

    if (clubSearchText.length > 0) { showClubs(matches); } else if (clubSearchText.length === 0) {
        matches = [];
        clubMatchList.innerHTML = '';
        logoContainer.classList.remove('no-top-margin');
        logoContainer.classList.add('mt-5');
        mainContent.classList.add('mt-4');
    };
    pillsPlayersTab.addEventListener('click', () => {
        matches = [];
        clubMatchList.innerHTML = '';
        clubSearch.value = '';
    });
};


// Display list of scorers in HTML

const showScorers = matches => {
    if (matches.length > 0) {
        const scorerList = matches.map(match => `<div class="col-12 px-0"><div class="row px-3">
      <div class="statcard col-9 statcard-primary statcard-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-2 py-2 pr-2 mb-1">
        <h2 class="statcard-number">
          ${match.fname} ${match.lname}
        </h2>
        <span class="statcard-desc pt-1 statcard-desc-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">${match.club}</span></div>
        <div class="statcard col-3 d-flex statcard-primary statcard-secondary-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pr-2 py-2 mb-1">
        <a href="#" class="btn-strike-rate btn-strike-rate-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} mb-1 btn btn-outline-primary px-1" title="Load scorer dashboards"><span class="icon icon-bar-graph"></span></a>
      </div></div>
    </div>`).join('');
        logoContainer.classList.add('no-top-margin');
        logoContainer.classList.remove('mt-5');
        mainContent.classList.remove('mt-4');
        playerMatchList.innerHTML = scorerList;
    };
};

// Display list of clubs in HTML

const showClubs = matches => {
    if (matches.length > 0) {
        const clubList = matches.map(match => `<div class="col-12 px-0"><div class="row px-3">
        <div class="statcard col-8 statcard-primary statcard-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-2 py-2 pr-2 mb-1">
          <h2 class="statcard-number statcard-number-clubs" id="${match.APIclubname.split(' ').join('')}">
            ${match.clubname}
          </h2>
          <span class="statcard-desc pt-1 statcard-desc-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">#${match.acronym}</span></div>
          <div class="statcard col-2 d-flex statcard-crest statcard-crest-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-1 pr-2 py-2 mb-1">
          <img class="club-crest" src="${match.crestURL}" height="48px" width="100%">
        </div><div class="statcard col-2 d-flex px-0 mb-1 statcard-line-chart statcard-line-chart-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">
        <a href="#" class="d-flex btn-strike-rate-club btn-strike-rate-club-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()}" title="Load club dashboards"><i class="d-flex fas fa-chart-line"></i></a>
      </div></div>
      </div>`).join('');
        logoContainer.classList.add('no-top-margin');
        logoContainer.classList.remove('mt-5');
        mainContent.classList.remove('mt-4');
        clubMatchList.innerHTML = clubList;
    };
};

// Listen for JLINGZ (Easter Egg) search input

playerSearch.addEventListener('input', () => {
    if (playerSearch.value === "JLINGZ") { $(playerMatchList).html(`<div class="col-12 statcard-img border-bottom-0 px-0"><img class="d-block mx-auto mt-4 mb-3" src="assets/images/JLINGZ.jpg" alt="JLINGZ" height="auto" width="180"><div class="col-12 mb-4 px-0 border-top-0 statcard-img-name text-center"><h3>JLINGZ</h3></div></div><nav class="iconav mt-0 px-0 mb-0 col-12"><div class="iconav-slider row"><div class="col-12"><ul class="row nav nav-pills iconav-nav flex-md-column mx-0"><li class="nav-item px-0 col-4"><a class="nav-link active" href="#" title="Load summary dashboard" data-toggle="tooltip" data-placement="right" data-container="body"><span class="icon iconav-icon icon-list"></span><small class="iconav-nav-label hidden-md-up">Summary</small></a></li><li class="nav-item px-0 col-4 ml-0"><a class="nav-link" href="#" title="Load StrikeRate dashboard" data-toggle="tooltip" data-placement="right" data-container="body"><span class="icon iconav-icon icon-circular-graph"></span><small class="iconav-nav-label hidden-md-up">StrikeRate</small></a></li><li class="nav-item px-0 col-4 ml-0"><a class="nav-link" href="#" title="Load StrikeValue dashboard" data-toggle="tooltip" data-placement="right" data-container="body"><span class="icon iconav-icon icon-line-graph"></span><small class="iconav-nav-label hidden-md-up">StrikeValue</small></a></li></ul></div></div></nav><div class="col-12 px-0 statcard-body-wrapper"><div class="row statcard-body-row mx-0"><div class="col-12 border-top-0 statcard-body"><div class="row statcard-row statcard p-3"><div class="col-5 px-0 statcard-col text-center"><h6 class="statcard-stat statcard-number">AGELESS</h6><span class="statcard-desc">Age</span></div><div class="col-2 statcard-col"></div><div class="col-5 px-0 statcard-col text-center"><h6 class="statcard-stat statcard-number">JLINGZ.COM</h6><span class="statcard-desc">Shirt number</span></div></div><div class="row statcard-row statcard px-3"><div class="col-4 statcard-col text-center"></div><div class="col-4 px-0 statcard-col text-center"><span class="icon icon-user"></span></div><div class="col-4 statcard-col text-center"></div></div><div class="row statcard-row statcard py-3 pl-0 pr-3"><div class="col-7 px-0 statcard-col text-center"><h6 class="statcard-stat statcard-number">TOO MANY TO COUNT</h6><span class="statcard-desc">Goals</span></div><div class="col-5 px-0 statcard-col text-center"><h6 class="statcard-stat statcard-number">PRICELE$$</h6><span class="statcard-desc">Value</span></div></div></div></div></div>`); }
    // search for scorers from user search input
    else { searchScorers(playerSearch.value) }
});

// Listen for club search input and search for clubs from user search input

clubSearch.addEventListener('input', () => searchClubs(clubSearch.value));

// Animate nav toggler icon on click

$(document).ready(function() {
    $('#nav-toggler').click(function() {
        $('.nav-toggler-icon').toggleClass('active');
        $('#nav-toggler').toggleClass('no-border');
    })
});

// Ensure scorer search input field gets focus on page load (after timeout) by default

$(document).ready(function() {
    setTimeout(function() {
        playerSearch.focus();
    }, 1000);
    // make API call to TransferMarket when user clicks on scorer StrikeRate button
    $(document).on('click', '.btn-strike-rate', function() {
        const apiKey = "750dd332b2msh2ea2cd6530f8ce8p182023jsn0aa726d7814f";
        const host = "transfermarket.p.rapidapi.com";
        let scorerHTMLName = $(this).parent().prev().children('h2').text().trim();
        let scorerName = $(this).parent().prev().children('h2').text().trim().split(' ').join('%20');

        // function for rendering scorer summary data with main image + name in header pane, followed by tabinated nav with three data panels: Summary (static), StrikeRate (interactive) and StrikeValue (interactive)
        function scorerSummary(profile, value, goals, _goals, goals_, gpm, _gpm) {
            return `<div class="col-12 statcard-img border-bottom-0 px-0"><img class="d-block mx-auto mt-4 mb-3" src="${profile.playerImage}" alt="${profile.playerName}" height="auto" width="180"><div class="col-12 mb-4 px-0 border-top-0 statcard-img-name text-center"><h3>${profile.playerName}</h3></div></div><nav class="iconav mt-0 px-0 mb-0 col-12"><div class="iconav-slider row"><div class="col-12"><ul class="row nav nav-pills iconav-nav flex-md-column mx-auto" id="scorers-tab" role="tablist"><li class="nav-item px-0 col-4" role="presentation"><a class="nav-link nav-link-scorers active" id="scorers-players-tab" href="#scorers-players" title="Load summary dashboard" role="tab" aria-controls="scorers-players" aria-selected="true" data-toggle="pill"><span class="icon iconav-icon icon-list"></span><small class="iconav-nav-label hidden-md-up">Summary</small></a></li><li class="nav-item ml-0 px-0 col-4" role="presentation"><a class="nav-link nav-link-scorers" id="scorers-strikerate-tab" href="#scorers-strikerate" title="Load StrikeRate dashboard" role="tab" aria-controls="scorers-strikerate" aria-selected="false" data-toggle="pill"><span class="icon iconav-icon icon-circular-graph"></span><small class="iconav-nav-label hidden-md-up">StrikeRate</small></a></li><li class="nav-item ml-0 px-0 col-4" role="presentation"><a class="nav-link nav-link-scorers" id="scorers-strikevalue-tab" href="#scorers-strikevalue" title="Load StrikeValue dashboard" role="tab" aria-controls="scorers-strikevalue" aria-selected="false" data-toggle="pill"><span class="icon iconav-icon icon-line-graph"></span><small class="iconav-nav-label hidden-md-up">StrikeValue</small></a></li></ul></div></div></nav><div class="col-12 px-0 tab-content statcard-body-wrapper" id="scorers-tab-content"><div class="row statcard-body-row mx-0 tab-pane fade show active" id="scorers-players" role="tabpanel" aria-labelledby="scorers-players-tab"><div class="col-12 border-top-0 statcard-body"><div class="row statcard-row statcard p-3"><div class="col-4 statcard-col text-center"><h4 class="statcard-stat statcard-number">${profile.age}</h4><span class="statcard-desc">Age</span></div><div class="col-4 statcard-col"></div><div class="col-4 statcard-col text-center"><h4 class="statcard-stat statcard-number">${profile.playerShirtNumber}</h4><span class="statcard-desc">Number</span></div></div><div class="row statcard-row statcard px-3"><div class="crest-box col-4 px-0 statcard-col d-flex"><img src="${profile.clubImage}" alt="${profile.club}" width="50%"></div><div class="user-box col-4 py-3 px-0 statcard-col d-flex"><span class="icon icon-user d-flex"></span></div><div class="crest-box col-4 px-0 statcard-col d-flex"><img src="${profile.countryImage}" alt="${profile.country}" width="40%"></div></div><div class="row statcard-row statcard px-3 pt-4 pb-3"><div class="col-4 statcard-col text-center"><h4 class="statcard-stat statcard-number">${goals}</h4><span class="statcard-desc">Goals</span></div><div class="col-4 statcard-col"></div><div class="col-4 statcard-col text-center"><h4 class="statcard-stat statcard-number" id="statcard-player-value-stat">€${value}m</h4><span class="statcard-desc">Value</span></div></div></div></div><div class="statcard-body-container tab-pane fade show" id="scorers-strikerate" role="tabpanel" aria-labelledby="scorers-strikerate-tab"><div class="row statcard-body-row mx-0"><button type="button" class='d-block mx-auto mt-3 mb-2 btn btn-sm btn-pill btn-warning' id="toggle-pens">Exclude pens</button><div class="col-12 border-top-0 statcard-body statcard-canvas px-4 pb-4 pt-1"><canvas id="myChart"></canvas></div></div></div><div class="statcard-body-container tab-pane fade show" id="scorers-strikevalue" role="tabpanel" aria-labelledby="scorers-strikevalue-tab"><div class="row statcard-body-row mx-0"><button type="button" class='d-block mx-auto mt-3 mb-2 btn btn-sm btn-pill btn-secondary' id="toggle-penz">Exclude pens</button><div class="col-12 border-top-0 statcard-body statcard-canvas px-4 pb-4 pt-1"><canvas id="mySecondChart"></canvas></div></div></div></div><script>var ctx = document.getElementById('myChart').getContext('2d');var chart = new Chart(ctx, {type: 'doughnut',data: {datasets: [{data: [${_goals}, 0.9 - ${_goals}],backgroundColor: ['#1bc98e', '#252830'],borderColor: ['#fff', '#252830'],borderAlign: 'inner'}]}, options: {responsive:true, cutoutPercentage: 60, maintainAspectRatio: false, title: {display: true,position: 'bottom',fontSize: 20, fontStyle: 'normal', text: '${_goals} goals per game',fontColor: '#fff'}, legend: {display: false}, tooltips: {callbacks: {label: function(tooltipItem) {return tooltipItem.yLabel;}}}}}); var pensToggler = document.getElementById('toggle-pens'); function resetStrikeRatePane() {pensToggler.innerText = 'Exclude pens';pensToggler.classList.add('btn-warning'); pensToggler.classList.remove('btn-success'); chart.config.data.datasets[0].data = [${_goals}, 0.9 - ${_goals}]; chart.config.data.datasets[0].backgroundColor = ['#1bc98e', '#252830'];chart.config.options.title.text = '${_goals} goals per game';chart.update();} let scorersPlayersTabsArray = document.querySelectorAll(".nav-link-scorers");scorersPlayersTabsArray.forEach(function(tab) {tab.addEventListener("click", resetStrikeRatePane);});pensToggler.addEventListener('click', function() {this.classList.toggle('btn-warning');this.classList.toggle('btn-success');if(this.classList.contains('btn-success')) {this.innerText = 'Include pens';chart.config.data.datasets[0].data = [${goals_}, 0.9 - ${goals_}];chart.config.data.datasets[0].backgroundColor = ['#e4d836', '#252830'];chart.config.options.title.text = '${goals_} goals per game';chart.update();} else {this.innerText = 'Exclude pens';chart.config.data.datasets[0].data = [${_goals}, 0.9 - ${_goals}];chart.config.data.datasets[0].backgroundColor = ['#1bc98e', '#252830'];chart.config.options.title.text = '${_goals} goals per game';chart.update();};});var _ctx = document.getElementById('mySecondChart').getContext('2d'); var _chart = new Chart(_ctx, {type: 'doughnut',data: {datasets: [{data: [${gpm}, 2.5 - ${gpm}],backgroundColor: ['#9f86ff', '#252830'],borderColor: ['#fff', '#252830'],borderAlign: 'inner'}]},options: {responsive:true, cutoutPercentage: 60, maintainAspectRatio: false, title: {display: true,position: 'bottom',fontSize: 20,fontStyle: 'normal',text: '${gpm} goals per €1m',fontColor: '#fff'}, legend: {display: false}, tooltips: {callbacks: {label: function(tooltipItem) {return tooltipItem.yLabel;}}}}});var penzToggler = document.getElementById('toggle-penz');function resetStrikeValuePane() {penzToggler.innerText = 'Exclude pens';penzToggler.classList.add('btn-secondary');penzToggler.classList.remove('btn-info');_chart.config.data.datasets[0].data = [${gpm}, 2.5 - ${gpm}];_chart.config.data.datasets[0].backgroundColor = ['#9f86ff', '#252830'];_chart.config.options.title.text = '${gpm} goals per €1m';_chart.update();}scorersPlayersTabsArray.forEach(function(tab) {tab.addEventListener("click", resetStrikeValuePane);});penzToggler.addEventListener('click', function() {this.classList.toggle('btn-secondary');this.classList.toggle('btn-info');if(this.classList.contains('btn-info')) {this.innerText = 'Include pens';_chart.config.data.datasets[0].data = [${_gpm}, 2.5 - ${_gpm}];_chart.config.data.datasets[0].backgroundColor = ['#f5f5f5', '#252830'];_chart.config.options.title.text = '${_gpm} goals per €1m';_chart.update();} else {this.innerText = 'Exclude pens';_chart.config.data.datasets[0].data = [${gpm}, 2.5 - ${gpm}];_chart.config.data.datasets[0].backgroundColor = ['#9f86ff', '#252830'];_chart.config.options.title.text = '${gpm} goals per €1m';_chart.update();};});</script>`;
        }

        // Load custom spinner while data is being retrieved from scorer API endpoints
        renderSpinner();

        // Make calls to various API endpoints to get scorer data
        var getScorerInfo = function() {
            class scorerSettings {
                constructor() {
                    this.async = true;
                    this.crossDomain = true;
                    this.url = "https://transfermarket.p.rapidapi.com/";
                    this.method = "GET";
                    this.headers = {
                        "x-rapidapi-key": "750dd332b2msh2ea2cd6530f8ce8p182023jsn0aa726d7814f",
                        "x-rapidapi-host": "transfermarket.p.rapidapi.com"
                    };
                }
            }
            const getScorerID = new scorerSettings();
            getScorerID.url += `search?query=${scorerName}`;
            $.ajax(getScorerID).done(function(response) {
                // Store scorer ID from initial API call in variable
                var scorerID = response.players[0].id;

                // Use this scorer ID variable in two further API calls
                const getScorerValue = new scorerSettings();
                getScorerValue.url = `https://transfermarket.p.rapidapi.com/players/get-market-value?id=${scorerID}`;

                const getScorerProfile = new scorerSettings();
                getScorerProfile.url = `https://transfermarket.p.rapidapi.com/players/get-profile?id=${scorerID}`;

                // Hide pill buttons while page is loading scorer data
                $('#pills-tab').addClass('d-none');

                // Show custom spinner while page is loading scorer data
                $(playerMatchList).html(renderSpinner());

                // Also make a further call to locally-stored .json file
                $.when(
                    $.ajax(getScorerValue),
                    $.ajax(getScorerProfile),
                    $.ajax('assets/data/playerdata.json')
                ).then(
                    // function to handle responses from API calls
                    function(responseValue, responseProfile, responseGoals) {
                        var currentMarketValue = responseValue[0].marketValueDevelopment[0].marketValue.replace(',', '.').slice(0, -1);
                        var roundedMarketValue;
                        if (currentMarketValue[currentMarketValue.length - 1] !== "0") {
                            roundedMarketValue = currentMarketValue;
                        } else {
                            roundedMarketValue = currentMarketValue.slice(0, -2);
                        }

                        var scorerProfile = responseProfile[0].playerProfile;

                        for (let i = 0; i < responseGoals[0].length; i++) {

                            if (`${scorerHTMLName}` === `${responseGoals[0][i].fullname}`) {
                                var goals = responseGoals[0][i].goals;
                                var goalsMinusPens = responseGoals[0][i].goalsMinusPens;
                                var goalsPer90 = responseGoals[0][i].goalsPer90;
                                var goalsMinusPensPer90 = responseGoals[0][i].goalsMinusPensPer90;
                                var goalsPerMillion = goals / currentMarketValue;
                                var gPerM = goalsPerMillion.toFixed(2);
                                var goalsMinusPensPerMillion = goalsMinusPens / currentMarketValue;
                                var _gPerM = goalsMinusPensPerMillion.toFixed(2);
                            };
                        };


                        // Unhide pill buttons once scorer data has been loaded
                        $('#pills-tab').removeClass('d-none');

                        // Push main input field and site logo up using negative margin to make way for scorer data dashboard display
                        $('#content-main').removeClass('mt-4');


                        $(playerMatchList).html(scorerSummary(scorerProfile, roundedMarketValue, goals, goalsPer90, goalsMinusPensPer90, gPerM, _gPerM));

                        $(playerSearch).val('');
                    },
                    // function to handle any errors arising from API calls
                    function(errorResponse) {
                        if (errorResponse.status === 404) {

                        } else if (errorResponse.status === 403) {

                        } else {

                        }
                    }
                );
            });
        };
        // Call function to make API calls to scorer data endpoints
        getScorerInfo();
    });
    // make API call to TransferMarket when user clicks on club StrikeRate button
    $(document).on('click', '.btn-strike-rate-club', function() {
        let clubHTMLName = $(this).parent().prev().prev().children('h2').text().trim();
        let clubName = $(this).parent().prev().prev().children('h2').text().trim().split(' ').join('%20');
        let clubNameAPI = $(this).parent().prev().prev().children('h2').attr('id');

        // function for rendering club summary data with club crest main image in header pane, followed by tabinated nav with three data panels: Summary (static), StrikeRate (interactive) and StrikeValue (interactive)
        function clubSummary(logo, size, age, position, _value, value, goals, gp100m, gmpp100m) {
            return `<div class="col-12 statcard-img statcard-img-${goals.acronym.toLowerCase()} border-bottom-0 px-0"><img class="d-block mx-auto mt-4 mb-3" src="${goals.crestURL}" alt="${goals.clubname} club crest" height="auto" width="180"><div class="col-12 mb-4 px-0 border-top-0 statcard-img-name text-center"><h3 class="d-none d-sm-block">${goals.clubname}</h2></div></div><nav class="iconav mt-0 px-0 mb-0 col-12"><div class="iconav-slider row"><div class="col-12"><ul class="row nav nav-pills iconav-nav flex-md-column mx-auto" id="clubs-tab" role="tablist"><li class="nav-item px-0 col-4" role="presentation"><a class="nav-link nav-link-clubs active" id="scorers-clubs-tab" href="#scorers-clubs" title="Load club summary dashboard" role="tab" aria-controls="scorers-clubs" aria-selected="true" data-toggle="pill"><span class="icon iconav-icon icon-list"></span><small class="iconav-nav-label hidden-md-up">Summary</small></a></li><li class="nav-item ml-0 px-0 col-4" role="presentation"><a class="nav-link nav-link-clubs" id="clubs-strikerate-tab" href="#clubs-strikerate" title="Load club StrikeRate dashboard" role="tab" aria-controls="clubs-strikerate" aria-selected="false" data-toggle="pill"><span class="icon iconav-icon icon-circular-graph"></span><small class="iconav-nav-label hidden-md-up">StrikeRate</small></a></li><li class="nav-item ml-0 px-0 col-4" role="presentation"><a class="nav-link nav-link-clubs" id="clubs-strikevalue-tab" href="#clubs-strikevalue" title="Load club StrikeValue dashboard" role="tab" aria-controls="clubs-strikevalue" aria-selected="false" data-toggle="pill"><span class="icon iconav-icon icon-line-graph"></span><small class="iconav-nav-label hidden-md-up">StrikeValue</small></a></li></ul></div></div></nav><div class="col-12 px-0 tab-content statcard-body-wrapper" id="clubs-tab-content"><div class="row statcard-body-row mx-0 tab-pane fade show active" id="scorers-clubs" role="tabpanel" aria-labelledby="scorers-clubs-tab"><div class="col-12 border-top-0 statcard-body"><div class="row statcard-row statcard py-3 px-2"><div class="col-5 px-0 statcard-col text-center"><h4 class="statcard-stat statcard-number">${age.slice(0, -1)}</h4><span class="statcard-desc">Average age</span></div><div class="col-2 statcard-col"></div><div class="col-5 px-0 statcard-col text-center"><h4 class="statcard-stat statcard-number">${position}</h4><span class="statcard-desc">League position</span></div></div><div class="row statcard-row statcard py-0 px-2"><div class="col-4 statcard-col text-center"></div><div class="user-box col-4 py-3 px-0 statcard-col d-flex"><span class="icon icon-sports-club d-flex"></span></div><div class="col-4 statcard-col text-center"></div></div><div class="row statcard-row statcard px-2 pt-4 pb-3"><div class="col-5 px-0 statcard-col text-center"><h4 class="statcard-stat statcard-number">${goals.goals}</h4><span class="statcard-desc">Goals</span></div><div class="col-2 statcard-col"></div><div class="col-5 px-0 statcard-col text-center"><h4 class="statcard-stat statcard-number" id="statcard-value-stat">€${_value}m</h4><span class="statcard-desc">Average player value</span></div></div></div></div><div class="statcard-body-container tab-pane fade show" id="clubs-strikerate" role="tabpanel" aria-labelledby="clubs-strikerate-tab"><div class="row statcard-body-row mx-0"><button type="button" class='d-block mx-auto mt-3 mb-2 btn btn-sm btn-pill btn-warning' id="pens-toggle">Exclude pens</button><div class="col-12 border-top-0 statcard-body statcard-canvas px-4 pb-4 pt-1"><canvas id="myClubsChart"></canvas></div></div></div><div class="statcard-body-container tab-pane fade show" id="clubs-strikevalue" role="tabpanel" aria-labelledby="clubs-strikevalue-tab"><div class="row statcard-body-row mx-0"><button type="button" class='d-block mx-auto mt-3 mb-2 btn btn-sm btn-pill btn-secondary' id="penz-toggle">Exclude pens</button><div class="col-12 border-top-0 statcard-body statcard-canvas px-4 pb-4 pt-1"><canvas id="mySecondClubsChart"></canvas></div></div></div></div><script>var config = document.getElementById('myClubsChart').getContext('2d');var clubsChart = new Chart(config, {type: 'doughnut',data: {datasets: [{data: [${goals.goals / 20}, 2 - ${goals.goals / 20}],backgroundColor: ['#1bc98e', '#252830'],borderColor: ['#fff', '#252830'],borderAlign: 'inner'}]},options: {responsive:true, cutoutPercentage: 60, maintainAspectRatio: false,title: {display: true,position: 'bottom',fontSize: 20,fontStyle: 'normal',text: '${goals.goals / 20} goals per game',fontColor: '#fff'}, legend: {display: false}, tooltips: {callbacks: {label: function(tooltipItem) {return tooltipItem.yLabel;}}}}});var _pensToggler = document.getElementById('pens-toggle');function resetClubStrikeRatePane() {_pensToggler.innerText = 'Exclude pens';_pensToggler.classList.add('btn-warning');_pensToggler.classList.remove('btn-success');clubsChart.config.data.datasets[0].data = [${goals.goals / 20}, 2 - ${goals.goals / 20}];clubsChart.config.data.datasets[0].backgroundColor = ['#1bc98e', '#252830'];clubsChart.config.options.title.text = '${goals.goals / 20} goals per game';clubsChart.update();}let scorersClubsTabsArray = document.querySelectorAll(".nav-link-clubs");scorersClubsTabsArray.forEach(function(tab) {tab.addEventListener("click", resetClubStrikeRatePane);});_pensToggler.addEventListener('click', function() {this.classList.toggle('btn-warning');this.classList.toggle('btn-success');if(this.classList.contains('btn-success')) {this.innerText = 'Include pens';clubsChart.config.data.datasets[0].data = [${goals.goalsMinusPens / 20}, 2 - ${goals.goalsMinusPens / 20}];clubsChart.config.data.datasets[0].backgroundColor = ['#e4d836', '#252830'];clubsChart.config.options.title.text = '${goals.goalsMinusPens / 20} goals per game';clubsChart.update();} else {this.innerText = 'Exclude pens';clubsChart.config.data.datasets[0].data = [${goals.goals / 20}, 2 - ${goals.goals / 20}];clubsChart.config.data.datasets[0].backgroundColor = ['#1bc98e', '#252830'];clubsChart.config.options.title.text = '${goals.goals / 20} goals per game';clubsChart.update();};});var _config = document.getElementById('mySecondClubsChart').getContext('2d');var _clubsChart = new Chart(_config, {type: 'doughnut',data: {datasets: [{data: [${gp100m}, 19.1 - ${gp100m}],backgroundColor: ['#9f86ff', '#252830'],borderColor: ['#fff', '#252830'],borderAlign: 'inner'}]},options: {responsive:true, cutoutPercentage: 60, maintainAspectRatio: false, title: {display: true,position: 'bottom',fontSize: 20,fontStyle: 'normal',text: '${gp100m} goals per €100m',fontColor: '#fff'}, legend: {display: false}, tooltips: {callbacks: {label: function(tooltipItem) {return tooltipItem.yLabel;}}}}});var _penzToggler = document.getElementById('penz-toggle');function resetClubStrikeValuePane() {_penzToggler.innerText = 'Exclude pens';_penzToggler.classList.add('btn-secondary');_penzToggler.classList.remove('btn-info');_clubsChart.config.data.datasets[0].data = [${gp100m}, 19.1 - ${gp100m}];_clubsChart.config.data.datasets[0].backgroundColor = ['#9f86ff', '#252830'];_clubsChart.config.options.title.text = '${gp100m} goals per €100m';_clubsChart.update();}scorersClubsTabsArray.forEach(function(tab) {tab.addEventListener("click", resetClubStrikeValuePane);});_penzToggler.addEventListener('click', function() {this.classList.toggle('btn-secondary');this.classList.toggle('btn-info');if(this.classList.contains('btn-info')) {this.innerText = 'Include pens';_clubsChart.config.data.datasets[0].data = [${gmpp100m}, 19.1 - ${gmpp100m}];_clubsChart.config.data.datasets[0].backgroundColor = ['#f5f5f5', '#252830'];_clubsChart.config.options.title.text = '${gmpp100m} goals per €100m';_clubsChart.update();} else {this.innerText = 'Exclude pens';_clubsChart.config.data.datasets[0].data = [${gp100m}, 19.1 - ${gp100m}];_clubsChart.config.data.datasets[0].backgroundColor = ['#9f86ff', '#252830'];_clubsChart.config.options.title.text = '${gp100m} goals per €100m';_clubsChart.update();};});</script>`;
        }

        // Load custom spinner while data is being retrieved from club API endpoints
        renderSpinner();

        // Make calls to various API endpoints to get club data
        var getClubInfo = function() {
            class clubSettings {
                constructor() {
                    this.async = true;
                    this.crossDomain = true;
                    this.url = "https://transfermarket.p.rapidapi.com/";
                    this.method = "GET";
                    this.headers = {
                        "x-rapidapi-key": "750dd332b2msh2ea2cd6530f8ce8p182023jsn0aa726d7814f",
                        "x-rapidapi-host": "transfermarket.p.rapidapi.com"
                    };
                }
            }
            const getClubID = new clubSettings();
            getClubID.url += `search?query=${clubName}`;
            $.ajax(getClubID).done(function(response) {
                // Store club ID from initial API call in variable
                var clubID = response.clubs[0].id;
                var _clubLogo = response.clubs[0].logoImage;

                // Use this club ID variable in three further API calls
                const get_ClubLogo = new clubSettings();
                get_ClubLogo.url = `https://transfermarket.p.rapidapi.com/clubs/get-short-info?ids=${clubID}`;

                const getClubProfile = new clubSettings();
                getClubProfile.url = `https://transfermarket.p.rapidapi.com/clubs/get-profile?id=${clubID}`;

                const getClubPosition = new clubSettings();
                getClubPosition.url = `https://transfermarket.p.rapidapi.com/competitions/get-table?id=GB1&seasonID=2020`;

                const getSquadValue = new clubSettings();
                getSquadValue.url = `https://transfermarket.p.rapidapi.com/clubs/get-squad?id=${clubID}`;

                // Hide pill buttons while page is loading club data
                $('#pills-tab').addClass('d-none');

                // Show custom spinner while page is loading club data
                $(clubMatchList).html(renderSpinner());

                // Also make a further call to locally-stored .json file
                $.when(
                    $.ajax(get_ClubLogo),
                    $.ajax(getClubProfile),
                    $.ajax(getClubPosition),
                    $.ajax(getSquadValue),
                    $.ajax('assets/data/clubdata.json')
                ).then(
                    // function to handle responses from API calls
                    function(responseLogo, responseClubProfile, responseClubPosition, responseSquadValue, responseClubGoals) {
                        var clubLogo = responseLogo[0].clubs[0].image;

                        var squadSize = responseClubProfile[0].mainFacts.squadSize;

                        var avgAge = responseClubProfile[0].mainFacts.avgAge;

                        var leagueTable = responseClubPosition[0].table;

                        for (let i = 0; i < leagueTable.length; i++) {
                            if (`${clubNameAPI}` === `${leagueTable[i].clubName.split(' ').join('')}`) {
                                var clubPosition = i + 1;
                                if (clubPosition === 1) {
                                    clubPosition += "st";
                                } else if (clubPosition === 2) {
                                    clubPosition += "nd";
                                } else if (clubPosition === 3) {
                                    clubPosition += "rd";
                                } else if (clubPosition === 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12 || 13 || 14 || 15 || 16 || 17 || 18 || 19 || 20) {
                                    clubPosition += "th";
                                };
                            };
                        }

                        var squad = responseSquadValue[0].squad;

                        var values = squad.filter(function(squadMember) {
                            if (squadMember.marketValue.value === null) {
                                return false; // skip
                            };
                            return true;
                        }).map(getNumericalValues);

                        function getNumericalValues(_squad) {
                            return parseInt(_squad.marketValue.value, 10);
                        };

                        var squadValue = values.reduce((a, b) => a + b, 0);

                        squadValue = (squadValue - (squadValue % 100000)) / 100000;

                        function insertDecimal(num) {
                            return Number((num / 10).toFixed(1));
                        };

                        squadValue = insertDecimal(squadValue);
                        console.log(squadValue);

                        var avgValue = squadValue / squadSize;
                        var _avgValue = avgValue.toFixed(1)

                        var roundedSquadValue = `${Math.round(squadValue)}`;
                        var _roundedSquadValue;
                        if (roundedSquadValue.length > 3) {
                            function insertBillionDecimal(num) {
                                return Number((num / 1000).toFixed(2));
                            };
                            _roundedSquadValue = insertBillionDecimal(roundedSquadValue) + 'bn';
                        } else {
                            _roundedSquadValue = roundedSquadValue + 'm';
                        }

                        for (let i = 0; i < responseClubGoals[0].length; i++) {
                            if (`${clubHTMLName}` === `${responseClubGoals[0][i].clubname}`) { var clubGoals = responseClubGoals[0][i]; };
                        };

                        var goalsPer1m = clubGoals.goals / squadValue;
                        var goalsPer100m = goalsPer1m * 100;
                        var _goalsPer100m = goalsPer100m.toFixed(2);

                        var goalsMinusPensPer1m = clubGoals.goalsMinusPens / squadValue;
                        var goalsMinusPensPer100m = goalsMinusPensPer1m * 100;
                        var _goalsMinusPensPer100m = goalsMinusPensPer100m.toFixed(2);

                        // Unhide pill buttons once club data has been loaded
                        $('#pills-tab').removeClass('d-none');

                        // Push main input field and site logo up using negative margin to make way for club data dashboard display
                        $('#content-main').removeClass('mt-4');


                        $(clubMatchList).html(clubSummary(clubLogo, squadSize, avgAge, clubPosition, _avgValue, _roundedSquadValue, clubGoals, _goalsPer100m, _goalsMinusPensPer100m));

                        $(clubSearch).val('');
                    },
                    // function to handle any errors arising from API calls
                    function(errorResponse) {
                        if (errorResponse.status === 404) {

                        } else if (errorResponse.status === 403) {

                        } else {

                        }
                    }
                );
            });
        };
        // Call function to make API calls to club data endpoints
        getClubInfo();
    });
});