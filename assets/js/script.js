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
        return scorer.fname.match(regex) || scorer.lname.match(regex) || scorer.club.match(regex);
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
      <div class="statcard col-9 statcard-primary statcard-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-3 py-3 pr-2 mb-1">
        <h3 class="statcard-number">
          ${match.fname} ${match.lname}
        </h3>
        <span class="statcard-desc statcard-desc-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">${match.club}</span></div>
        <div class="statcard col-3 d-flex statcard-primary statcard-secondary-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pr-3 py-1 mb-1">
        <a href="#" class="btn-strike-rate btn-strike-rate-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} mb-1 btn btn-outline-primary px-1"><span class="icon icon-bar-graph"></span></a>
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
        <div class="statcard col-9 statcard-primary statcard-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-3 py-3 pr-2 mb-1">
          <h3 class="statcard-number">
            ${match.clubname}
          </h3>
          <span class="statcard-desc statcard-desc-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">#${match.acronym}</span></div>
          <div class="statcard col-3 d-flex statcard-primary statcard-tertiary-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()} pl-3 pr-3 py-2 mb-1">
          <img class="mx-auto" src="${match.crestUrl}" height="auto" width="40">
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
})