$(document).ready(function() {

    const summaryTablesNavLink = document.getElementById('summary-tables-nav-link');
    const summaryTablesTab = document.getElementById('summary-tables-tab');
    const summaryTablesPane = document.getElementById('summary-tables');
    const strikerateTablesNavLink = document.getElementById('strikerate-tables-nav-link');
    const strikerateTablesTab = document.getElementById('strikerate-tables-tab');
    const strikerateTablesPane = document.getElementById('strikerate-tables');
    const strikevalueTablesNavLink = document.getElementById('strikevalue-tables-nav-link');
    const strikevalueTablesTab = document.getElementById('strikevalue-tables-tab');
    const strikevalueTablesPane = document.getElementById('strikevalue-tables');
    const leaderboardBody = document.getElementById('leaderboard-body');
    const leaderboardBodyStrikeRate = document.getElementById('leaderboard-body-strikerate');
    const leaderboardBodyStrikeValue = document.getElementById('leaderboard-body-strikevalue');

    // Animate nav toggler icon on click

    $('#nav-toggler').click(function() {
        $('.nav-toggler-icon').toggleClass('active');
        $(this).toggleClass('no-border');
    })

    if (window.location.href.indexOf("#strikerate-tables") > -1) {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).addClass('active');
        $(strikerateTablesPane).addClass('active');
        $('#nav-main a').removeClass('active');
        $('#strikerate-tables-nav-link').addClass('active');
    } else if (window.location.href.indexOf("#strikevalue-tables") > -1) {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
        $(strikevalueTablesTab).addClass('active');
        $(strikevalueTablesPane).addClass('active');
        $('#nav-main a').removeClass('active');
        $('#strikevalue-tables-nav-link').addClass('active');
    } else if (window.location.href.indexOf("#summary-tables") > -1) {
        $(summaryTablesTab).addClass('active');
        $(summaryTablesPane).addClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
    } else {
        $(summaryTablesTab).addClass('active');
        $(summaryTablesPane).addClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
    }

    $(strikerateTablesNavLink).click(function() {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).addClass('active');
        $(strikerateTablesPane).addClass('active');
    });

    $(strikevalueTablesNavLink).click(function() {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
        $(strikevalueTablesTab).addClass('active');
        $(strikevalueTablesPane).addClass('active');
    });

    $(summaryTablesNavLink).click(function() {
        $(summaryTablesTab).addClass('active');
        $(summaryTablesPane).addClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
    });

    $('#nav-main a').click(function() {
        $('#nav-main a').removeClass('active');
        $(this).addClass('active');
        $('.nav-toggler-icon').toggleClass('active');
        $('#nav-toggler').toggleClass('no-border');
    });

    $('.nav-link-leaderboards-tab').click(function() {
        if ($('#custom-switch-summary.custom-switch-label-status .custom-switch-input:checked')) {
            $('#custom-switch-summary.custom-switch-label-status .custom-switch-input').prop("checked", false);
        };
        if ($('#custom-switch-strikerate.custom-switch-label-status .custom-switch-input:checked')) {
            $('#custom-switch-strikerate.custom-switch-label-status .custom-switch-input').prop("checked", false);
        };
        if ($('#custom-switch-strikevalue.custom-switch-label-status .custom-switch-input:checked')) {
            $('#custom-switch-strikevalue.custom-switch-label-status .custom-switch-input').prop("checked", false);
        };

        leaderboardBody.innerHTML = '';
        leaderboardBodyStrikeRate.innerHTML = '';
        leaderboardBodyStrikeValue.innerHTML = '';
        $.get("assets/data/playerdata.json", function(data) {
            for (var i = 0; i < data.length; i++) {
                var tr = "<tr>";
                tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2"><a href="#">' + data[i].fullname + `</a></td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3">' + data[i].pens + '</td><td class="text-center pl-1 pr-3">' + data[i].goalsMinusPens + '</td></tr>';
                leaderboardBody.innerHTML += tr;

                var resort = true;
                $("#my-table").trigger('update', [resort]);
            };
            for (var i = 0; i < data.length; i++) {
                var tr = "<tr>";
                tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2"><a href="#">' + data[i].fullname + `</a></td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast">' + data[i].goalsPer90 + '</td><td class="text-center pl-1 pr-3 table-backdrop-contrast">' + data[i].goalsMinusPensPer90 + '</td></tr>';
                leaderboardBodyStrikeRate.innerHTML += tr;

                var resort = true;
                $("#my-second-table").trigger('update', [resort]);
            };
            for (var i = 0; i < data.length; i++) {
                var tr = "<tr>";
                tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2"><a href="#">' + data[i].fullname + `</a></td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast"></td><td class="text-center pl-1 pr-3 table-backdrop-contrast"></td></tr>';
                leaderboardBodyStrikeValue.innerHTML += tr;

                var resort = true;
                $("#my-second-table").trigger('update', [resort]);
            }
        });
        $("#my-table, #my-second-table, #my-third-table").tablesorter({
            // prevent first column from being sortable
            headers: {
                0: { sorter: false },
                1: { sorter: 'last-name' },
                2: { sorter: false }
            }, // apply custom widget
            widgets: ['numbering']
        });

        setTimeout(() => {
            $('#nav-toggleable-md').removeClass('show');
            $('#nav-toggleable-md').addClass('collapse');
        }, 300);
    });

    $(strikerateTablesTab).click(function() {
        window.location.replace('leaderboards.html#strikerate-tables');
        location.reload();
        setTimeout(() => {
            $('#nav-main a').removeClass('active');
            $(strikerateTablesNavLink).addClass('active');
        }, 300);
    });

    $(strikevalueTablesTab).click(function() {
        window.location.replace('leaderboards.html#strikevalue-tables');
        location.reload();
        setTimeout(() => {
            $('#nav-main a').removeClass('active');
            $(strikevalueTablesNavLink).addClass('active');
        }, 300);
    });

    $(summaryTablesTab).click(function() {
        window.location.replace('leaderboards.html#summary-tables');
        location.reload();
        setTimeout(() => {
            $('#nav-main a').removeClass('active');
            $(summaryTablesNavLink).addClass('active');
        }, 300);
    });

    $.get("assets/data/playerdata.json", function(data) {
        for (var i = 0; i < data.length; i++) {
            var tr = "<tr>";
            tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2"><a href="#">' + data[i].fullname + `</a></td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3">' + data[i].pens + '</td><td class="text-center pl-1 pr-3">' + data[i].goalsMinusPens + '</td></tr>';
            leaderboardBody.innerHTML += tr;

            var resort = true;
            $("#my-table").trigger('update', [resort]);
        }

        for (var i = 0; i < data.length; i++) {
            var tr = "<tr>";
            tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2"><a href="#">' + data[i].fullname + `</a></td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast">' + data[i].goalsPer90 + '</td><td class="text-center pl-1 pr-3 table-backdrop-contrast">' + data[i].goalsMinusPensPer90 + '</td></tr>';
            leaderboardBodyStrikeRate.innerHTML += tr;

            var resort = true;
            $("#my-second-table").trigger('update', [resort]);
        }

        for (var i = 0; i < data.length; i++) {
            var valueGoals = data[i].goals / data[i].value;
            var valueGoalsRounded = valueGoals.toFixed(2);
            var valueGoalsMinusPens = data[i].goalsMinusPens / data[i].value;
            var valueGoalsMinusPensRounded = valueGoalsMinusPens.toFixed(2);

            var tr = "<tr>";
            tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2"><a href="#">' + data[i].fullname + `</a></td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast">' + valueGoalsRounded + '</td><td class="text-center pl-1 pr-3 table-backdrop-contrast">' + valueGoalsMinusPensRounded + '</td></tr>';

            leaderboardBodyStrikeValue.innerHTML += tr;
            var resort = true;
            $("#my-third-table").trigger('update', [resort]);
        }

        // JS function and event listener to detect when custom switch gets pressed

        function confirmCheck() {
            if (this.checked) {
                $.get("assets/data/clubdata.json", function(clubdata) {
                    leaderboardBody.innerHTML = '';
                    for (var i = 0; i < clubdata.length; i++) {
                        var tr = "<tr>";
                        tr += "<td class='pl-1'>" + clubdata[i].clubStrikeRank + "</td><td class='pr-2'><a href='#'>" + clubdata[i].clubname + `</a></td><td class='pl-2 pr-2 crest-pane ${clubdata[i].clubname.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + clubdata[i].goals + '</td><td class="pl-2 text-center pr-3">' + clubdata[i].pens + '</td><td class="text-center pl-1 pr-3">' + clubdata[i].goalsMinusPens + '</td></tr>';
                        leaderboardBody.innerHTML += tr;

                        var resort = true;
                        $("#my-table").trigger('update', [resort]);

                        $('#my-table th').removeClass('headerSortDown');
                        $('#my-table th').removeClass('headerSortUp');
                        $('#my-table th:eq(3)').addClass('headerSortUp');


                        $("#my-table").tablesorter({
                            headers: { 1: { sorter: "text" } },
                            widgets: ['numbering']
                        });

                    }

                    leaderboardBodyStrikeRate.innerHTML = '';
                    for (var i = 0; i < clubdata.length; i++) {
                        var tr = "<tr>";
                        tr += "<td class='pl-1'>" + clubdata[i].clubStrikeRank + "</td><td class='pr-2'><a href='#'>" + clubdata[i].clubname + `</a></td><td class='pl-2 pr-2 crest-pane ${clubdata[i].clubname.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + clubdata[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast">' + clubdata[i].goalsPer90 + '</td><td class="text-center pl-1 pr-3 table-backdrop-contrast">' + clubdata[i].goalsMinusPensPer90 + '</td></tr>';
                        leaderboardBodyStrikeRate.innerHTML += tr;

                        var resort = true;
                        $("#my-second-table").trigger('update', [resort]);

                        $('#my-second-table th').removeClass('headerSortDown');
                        $('#my-second-table th').removeClass('headerSortUp');
                        $('#my-second-table th:eq(3)').addClass('headerSortUp');

                        $("#my-second-table").tablesorter({
                            headers: { 1: { sorter: "text" } },
                            widgets: ['numbering']
                        });
                    }

                    leaderboardBodyStrikeValue.innerHTML = '';
                    for (var i = 0; i < clubdata.length; i++) {
                        var valueGoalsClub = clubdata[i].goals / clubdata[i].squadvalue;
                        var valueGoalsClubRounded = valueGoalsClub.toFixed(2);
                        var valueGoalsMinusPensClub = clubdata[i].goalsMinusPens / clubdata[i].squadvalue;
                        var valueGoalsMinusPensClubRounded = valueGoalsMinusPensClub.toFixed(2);

                        $('#perPane').text('Per €100m');
                        var tr = "<tr>";
                        tr += "<td class='pl-1'>" + clubdata[i].clubStrikeRank + "</td><td class='pr-2'><a href='#'>" + clubdata[i].clubname + `</a></td><td class='pl-2 pr-2 crest-pane ${clubdata[i].clubname.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + clubdata[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast">' + valueGoalsClubRounded + '</td><td class="text-center pl-1 pr-3 table-backdrop-contrast">' + valueGoalsMinusPensClubRounded + '</td></tr>';
                        leaderboardBodyStrikeValue.innerHTML += tr;

                        var resort = true;
                        $("#my-third-table").trigger('update', [resort]);

                        $('#my-third-table th').removeClass('headerSortDown');
                        $('#my-third-table th').removeClass('headerSortUp');
                        $('#my-third-table th:eq(3)').addClass('headerSortUp');


                        $("#my-third-table").tablesorter({
                            headers: { 1: { sorter: "text" } },
                            widgets: ['numbering']
                        });
                    };

                    $('.sorter-last-name').removeClass('sorter-last-name');
                    $('.column-name').addClass('sorter-text');
                });
            } else {
                location.reload();
                $('.column-name').addClass('sorter-last-name');
            }
        }

        $('#custom-switch-input, #custom-switch-input-strikerate, #custom-switch-input-strikevalue').on('change', confirmCheck);

        return false;

    });
    // add custom numbering widget
    $.tablesorter.addWidget({
        id: "numbering",
        format: function(table) {
            var c = table.config;
            $("tr:visible", table.tBodies[0]).each(function(i) {
                $(this).find('td').eq(0).text(i + 1);
            });
        }
    });
    $.tablesorter.addParser({
        id: 'last-name',
        is: function() {
            return false;
        },
        format: function(str) {
            var parts = (str || '').split(/\s+/),
                last = parts.pop();
            parts.unshift(last);
            return parts.join(' ');
        },
        // set type, either numeric or text
        type: 'text'
    });

    // call the tablesorter plugin

    setTimeout(function() {
        $("#my-table, #my-second-table, #my-third-table").tablesorter({
            // Sort on the fourth column,
            // in ascending order
            sortList: [
                [3, 1]
            ],
            // prevent first column from being sortable
            headers: {
                0: { sorter: false },
                1: { sorter: 'last-name' },
                2: { sorter: false }
            },
            // apply custom widget
            widgets: ['numbering']
        });
    }, 300)
    return false;
});