(function() {
    function displaySearchResults(results) {
        var searchResultsDispLoc = document.getElementById("search-results");

        if (results.length) { // are there any results?
            var resultsString = '';

            for (var i = 0; i < results.length; i++) {
                var item = store[results[i].ref];
                resultsString += "<li><a href=\"" + item.url + "\"><h3>" + item.title + "</h3></a>";
                resultsString += "<p>" + item.content.substring(0, 75) + "...</p></li>";
            }

            searchResultsDispLoc.innerHTML = resultsString;
        }
        else {
            searchResultsDispLoc.innerHTML = "<li>No results found :C</li>";
        }
    }
    function getQueryText() {
        var query = window.location.search.substring(3);
        return query.split("+").join(" ");
    }

    var searchTerm = getQueryText();

    if (searchTerm) {
        var index = lunr(function() {
            this.field('id');
            this.field('title', {boost: 10});
            this.field('author');
            this.field('content');

            for (var key in window.store) {
                this.add({
                    'id':key,
                    'title':window.store[key].title,
                    'author':window.store[key].author,
                    'content':window.store[key].content
                });
            }
            });

        var results = index.search(searchTerm);
        displaySearchResults(results, window.store);
    }
})();