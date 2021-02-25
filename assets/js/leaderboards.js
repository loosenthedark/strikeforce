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

    if (window.location.href.indexOf("#strikerate-tables") > -1) {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).addClass('active');
        $(strikerateTablesPane).addClass('active');
    } else if (window.location.href.indexOf("#strikevalue-tables") > -1) {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
        $(strikevalueTablesTab).addClass('active');
        $(strikevalueTablesPane).addClass('active');
    } else {
        $(summaryTablesTab).addClass('active');
        $(summaryTablesPane).addClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
    }

    // $('#nav-main a').on('click', function() {
    //     setTimeout(function() {
    //         $('#nav-toggleable-md').collapse('hide');
    //     }, 100);
    // });

    $(strikerateTablesNavLink).click(function() {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).addClass('active');
        $(strikerateTablesPane).addClass('active');
    })

    $(strikevalueTablesNavLink).click(function() {
        $(summaryTablesTab).removeClass('active');
        $(summaryTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
        $(strikevalueTablesTab).addClass('active');
        $(strikevalueTablesPane).addClass('active');
    })

    $(summaryTablesNavLink).click(function() {
        $(summaryTablesTab).addClass('active');
        $(summaryTablesPane).addClass('active');
        $(strikevalueTablesTab).removeClass('active');
        $(strikevalueTablesPane).removeClass('active');
        $(strikerateTablesTab).removeClass('active');
        $(strikerateTablesPane).removeClass('active');
    })

    $.get("assets/data/playerdata.json", function(data) {
        var leaderboardBody = document.getElementById('leaderboard-body');
        for (var i = 0; i < data.length; i++) {
            var tr = "<tr>";
            tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2"><a href="#">' + data[i].fullname + `</a></td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'><a class='d-block w-100 h-100' href='#'></a></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3">' + data[i].pens + '</td><td class="text-center pl-1 pr-3">' + data[i].goalsMinusPens + '</td></tr>'
            leaderboardBody.innerHTML += tr;

            var resort = true;
            $("[data-sort=table]").trigger('update', [resort]);

        }
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
    $("[data-sort=table]").tablesorter({
        // Sort on the fourth column,
        // in ascending order
        sortList: [
            [3, 1]
        ],
        // prevent first column from being sortable
        headers: {
            0: { sorter: false },
            1: { sorter: 'last-name' }
        },
        // apply custom widget
        widgets: ['numbering']
    });
    return false;
});