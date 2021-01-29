const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search .json file and filter data
const searchEntries = async searchText => {
    const res = await fetch('../data/state_capitals.json');
    const entries = await res.json();

    console.log(entries);
};

search.addEventListener('input', () => searchEntries(search.value));

