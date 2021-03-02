$(document).ready(function() {
    const selectClubBox = $('#select-scorer-box-1 > .dropdown-item');
    const selectScorerBox = $('#select-scorer-box-2');
    const dropdownScorers = $('#dropdown-scorers');

    $('#nav-toggler').click(function() {
        $('.nav-toggler-icon').toggleClass('active');
        $('#nav-toggler').toggleClass('no-border');
    });
    $.get("assets/data/playerdata.json", function(data) {
        var selectedScorers = [];
        var selectScorerBoxContent = '';

        var updateSelectScorerBox = function(scorers) {
            selectScorerBoxContent = '<h6 class="dropdown-header">Choose a scorer</h6>';
            console.log('updating with ' + scorers.length + ' scorers');
            for (let i = 0; i < scorers.length; i++) {
                console.log(scorers[i]);
                selectScorerBoxContent += '<a class="dropdown-item" href="#">' + scorers[i] + '</a>';
            }
            selectScorerBox.html(selectScorerBoxContent);

        }

        selectClubBox.click(function() {
            var _selectedClub = this.innerHTML;
            for (let i = 0; i < data.length; i++) {
                var selectedClub = _selectedClub.replace(/&amp;/, '&');
                if (data[i].club === selectedClub) {
                    selectedScorers.push(data[i].fullname);
                }
            }
            dropdownScorers.removeClass('d-none');
            updateSelectScorerBox(selectedScorers);
            selectedScorers = [];
        });
    });
});