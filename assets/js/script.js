const playerSearch = document.getElementById('player-search');
const playerMatchList = document.getElementById('player-match-list');
const clubSearch = document.getElementById('club-search');
const clubMatchList = document.getElementById('club-match-list');


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
    };
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
    };
};


// Display list of scorers in HTML

const showScorers = matches => {
    if (matches.length > 0) {
        const scorerList = matches.map(match => `<div class="col-12">
        <div class="statcard statcard-primary statcard-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()} p-4 mb-1">
          <h3 class="statcard-number">
            ${match.fname} ${match.lname}
          </h3>
          <span class="statcard-desc statcard-desc-${match.club.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">${match.club}</span>
        </div>
      </div>`).join('');
        playerMatchList.innerHTML = scorerList;
    };
};

const showClubs = matches => {
    if (matches.length > 0) {
        const clubList = matches.map(match => `<div class="col-12">
        <div class="statcard statcard-primary statcard-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()} p-4 mb-1">
          <h3 class="statcard-number">
            ${match.clubname}
          </h3>
          <span class="statcard-desc statcard-desc-${match.clubname.replace(/\s/g, '').replace('&', 'and').toLowerCase()}">#${match.acronym}</span>
          <img src="${match.crestUrl}">
        </div>
      </div>`).join('');
        clubMatchList.innerHTML = clubList;
    };
};

playerSearch.addEventListener('input', () => searchScorers(playerSearch.value));
clubSearch.addEventListener('input', () => searchClubs(clubSearch.value));