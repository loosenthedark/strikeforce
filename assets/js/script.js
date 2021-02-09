const logoContainer = document.querySelector('.container-logo');
const playerSearch = document.getElementById('player-search');
const playerMatchList = document.getElementById('player-match-list');
const clubSearch = document.getElementById('club-search');
const clubMatchList = document.getElementById('club-match-list');
const pillsPlayersTab = document.getElementById('pills-players-tab');
const pillsClubsTab = document.getElementById('pills-clubs-tab');
const animateNavToggler = document.getElementById('nav-toggler');
const navTogglerIcons = document.querySelectorAll('.nav-toggler-icon');

// Search .json file and filter data
const searchScorers = async playerSearchText => {
    const playerRes = await fetch('assets/data/playerdata.json');
    const scorers = await playerRes.json();

    // Get matches to current text input
    let matches = scorers.filter(scorer => {
        const regex = new RegExp(`^${playerSearchText}`, 'gi');
        return scorer.fname.match(regex) || scorer.lname.match(regex) || scorer.club.match(regex) || scorer.clubAcronym.match(regex);
    });

    if (matches.length === 0) {
        playerMatchList.innerHTML = '';

    };

    if (playerSearchText.length > 2) { showScorers(matches); } else if (playerSearchText.length === 0) {
        matches = [];
        playerMatchList.innerHTML = '';
        logoContainer.classList.remove('no-top-margin');
        logoContainer.classList.add('mt-5');
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
        logoContainer.classList.remove('no-top-margin-n3');
        logoContainer.classList.add('mt-5');
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
        const scorerList = matches.map(match => `<div class="col-12"><div class="row px-3">
      <div class="statcard col-9 statcard-primary statcard-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-2 py-2 pr-2 mb-1">
        <h2 class="statcard-number">
          ${match.fname} ${match.lname}
        </h2>
        <span class="statcard-desc pt-1 statcard-desc-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">${match.club}</span></div>
        <div class="statcard col-3 d-flex statcard-primary statcard-secondary-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pr-2 py-2 mb-1">
        <a href="#ß" class="btn-strike-rate btn-strike-rate-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} mb-1 btn btn-outline-primary px-1"><span class="icon icon-bar-graph"></span></a>
      </div></div>
    </div>`).join('');
        logoContainer.classList.add('no-top-margin');
        logoContainer.classList.remove('mt-5');
        playerMatchList.innerHTML = scorerList;
    };
};

const showClubs = matches => {
    if (matches.length > 0) {
        const clubList = matches.map(match => `<div class="col-12"><div class="row px-3">
        <div class="statcard col-9 statcard-primary statcard-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-2 py-2 pr-2 mb-1">
          <h2 class="statcard-number">
            ${match.clubname}
          </h2>
          <span class="statcard-desc pt-1 statcard-desc-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">#${match.acronym}</span></div>
          <div class="statcard col-3 d-flex statcard-primary statcard-tertiary-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-1 pr-1 py-2 mb-1">
          <img class="mx-auto" src="${match.crestUrl}" height="49" width="50">
        </div></div>
      </div>`).join('');
        logoContainer.classList.add('no-top-margin');
        logoContainer.classList.remove('mt-5');
        clubMatchList.innerHTML = clubList;
    };
};

playerSearch.addEventListener('input', () => searchScorers(playerSearch.value));
clubSearch.addEventListener('input', () => searchClubs(clubSearch.value));
animateNavToggler.addEventListener('click', () => navTogglerIcons.classList.toggle('active'));

$(document).ready(function() {
    $('#nav-toggler').click(function() {
        $('.nav-toggler-icon').toggleClass('active');
        $(this).toggleClass('no-border');
    })
});

$(document).ready(function() {
    setTimeout(function() {
        $('#player-search').focus();
    }, 2000);
    $(document).on('click', '.btn-strike-rate', function() {
        const apiKey = "750dd332b2msh2ea2cd6530f8ce8p182023jsn0aa726d7814f";
        const host = "transfermarket.p.rapidapi.com"
        let scorerName = $(this).parent().prev().children('h2').text().trim().split(' ').join('%20');

        function scorerSummary(profile, value) {
            return `<div class='col-12'><img class="d-block mx-auto mt-3" src="${profile.playerImage}" height="auto" width="100"><div class='text-center'>${profile.playerName} Age: ${profile.age} | No.${profile.playerShirtNumber}</div><div class='text-center'>${value.marketValueCurrency} ${value.marketValue}0,000 | ${value.date}</div>`
        }

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
            // console.log(getScorerID.url);
            $.ajax(getScorerID).done(function(response) {
                var scorerID = response.players[0].id;

                const getScorerValue = new scorerSettings();
                getScorerValue.url = `https://transfermarket.p.rapidapi.com/players/get-market-value?id=${scorerID}`;
                // console.log(getScorerValue.url);

                const getScorerProfile = new scorerSettings();
                getScorerProfile.url = `https://transfermarket.p.rapidapi.com/players/get-profile?id=${scorerID}`;
                // console.log(getScorerProfile.url);
                $.when(
                    $.ajax(getScorerValue),
                    $.ajax(getScorerProfile)
                ).then(
                    function(responseValue, responseProfile) {
                        var currentMarketValue = responseValue[0].marketValueDevelopment[0];
                        // console.log(`${currentMarketValue.marketValueCurrency} ${currentMarketValue.marketValue}0,000 | ${currentMarketValue.date}`);
                        // console.log(responseValue);
                        // console.log(getScorerProfile.url);

                        var scorerProfile = responseProfile[0].playerProfile;
                        // console.log(`${scorerProfile.playerName} Age: ${scorerProfile.age} | No.${scorerProfile.playerShirtNumber}`);
                        // console.log(responseProfile);
                        // $(playerMatchList).html(`<div class='col-12'><img class="d-block mx-auto mt-3" src="${scorerProfile.playerImage}" height="auto" width="100"><div class='text-center'>${scorerProfile.playerName} Age: ${scorerProfile.age} | No.${scorerProfile.playerShirtNumber}</div><div class='text-center'>${currentMarketValue.marketValueCurrency} ${currentMarketValue.marketValue}0,000 | ${currentMarketValue.date}</div>`);
                        $(playerMatchList).html(scorerSummary(scorerProfile, currentMarketValue));
                    },
                    function(errorResponse) {
                        if (errorResponse.status === 404) {

                        } else if (errorResponse.status === 403) {

                        } else {

                        }
                    }
                );
            });
        };
        getScorerInfo();
    });
});