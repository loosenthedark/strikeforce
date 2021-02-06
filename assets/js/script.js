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
});

function userInformationHTML(user) {
    return `<h5>${user.name} <span class='small-name'>(@<a href='${user.html_url}' target='_blank'>${user.login}</a>)</span></h5>
    <div class='gh-content'>
        <div class='gh-avatar'>
            <a href='${user.html_url}' target='_blank'>
                <img src='${user.avatar_url}' id='avatar-img' alt=${user.login}>
            </a>
        </div>
        <p>Followers: ${user.followers} | Following: ${user.following} <br> Projects: ${user.public_repos}</p>
    </div>`;
}

function repoInformationHTML(repos) {
    if (repos.length === 0) {
        return `<div class='repo-list'>No projects found!</div>`;
    }

    var listItemsHTML = repos.map(function(repo) {
        return `<li><a href='${repo.html_url}' target='_blank'>${repo.name}</a></li>`
    });

    return `<div class='repo-list'>
                <p class='repo-heading'><strong>Project list:</strong></p>
                <ul>
                    ${listItemsHTML.join(' ')}
                </ul>
            </div>`;
}

function fetchGitHubInfo(event) {
    var username = $('#gh-username').val();
    if (!username) {
        $('#gh-user-data').html(`<h5>Please enter a GitHub username!</h5>`).addClass('gh-alert');
        $('#gh-repo-data').html('');
        return;
    }
    $('#gh-user-data').html(`<div><img src='assets/img/1_CsJ05WEGfunYMLGfsT2sXA.gif' alt='loading...'></div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`)
    ).then(
        function(firstResponse, secondResponse) {
            var userData = firstResponse[0];
            var repoData = secondResponse[0];
            $('#gh-user-data').removeClass('gh-alert').html(userInformationHTML(userData));
            $('#gh-repo-data').html(repoInformationHTML(repoData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $('#gh-user-data').html(`<h5>No info found for user ${username}!</h5>`);
            } else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                $('#gh-user-data').addClass('gh-alert').html(`<h5>Too many API requests! <br>Please wait until ${resetTime.toLocaleTimeString()} before trying again.</h5>`);
            } else {
                $('#gh-user-data').html(`<h5>Error: ${errorResponse.responseJSON.message}!</h5>`);
            }
        }
    );
}

function getScorerValue(event) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://transfermarket.p.rapidapi.com/players/get-profile?id=411295",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "750dd332b2msh2ea2cd6530f8ce8p182023jsn0aa726d7814f",
            "x-rapidapi-host": "transfermarket.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function(response) {
        console.log(response.playerProfile);
        console.log(response.playerProfile.playerImage);
        console.log(response.playerProfile.playerName);
        console.log(response.playerProfile.playerID);
        console.log(response.playerProfile.marketValueCurrency);
        console.log(response.playerProfile.marketValue);
        console.log(response.playerProfile.marketValueLastChange);

        $('#player-match-list').html(`<div class='col text-center'>
    <img src='${response.playerProfile.playerImage}' class='scorer-image' alt='Raphinha'></div>`);

    });
}

//     $.when(
//         $.getJSON(settings.url)
//         // $.getJSON(`https://api.github.com/users/${username}/repos`)
//     ).then(
//         function(response) {
//             var scorerData = response[0];
//             // var repoData = secondResponse[0];
//             // $('#gh-user-data').removeClass('gh-alert').html(userInformationHTML(userData));
//             // $('#gh-repo-data').html(repoInformationHTML(repoData));
//             console.log(scorerData)
//         },
//         function(errorResponse) {
//             // if (errorResponse.status === 404) {
//             //     $('#gh-user-data').html(`<h5>No info found for user ${username}!</h5>`);
//             // } else if (errorResponse.status === 403) {
//             //     var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
//             //     $('#gh-user-data').addClass('gh-alert').html(`<h5>Too many API requests! <br>Please wait until ${resetTime.toLocaleTimeString()} before trying again.</h5>`);
//             // } else {
//             //     $('#gh-user-data').html(`<h5>Error: ${errorResponse.responseJSON.message}!</h5>`);
//             // }
//             console.log(errorResponse.responseJSON.message);
//         }
//     );
// }

// $(document).ready(getScorerValue);
$(document).ready(setTimeout(function() {
    $('#player-search').focus();
}, 3000));