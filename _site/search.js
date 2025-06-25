(function() {
    function displaySearchResults(results) {
        var searchResultsDispLoc = document.getElementById("search-results");

        if (results.length) { // are there any results?
            var resultsString = '';

            for (var i = 0; i < results.length; i++) {
                var item = window.store[results[i]];
                resultsString += "<li><h3><a href=\"" + item.url + "\">" + item.title + "</a></h3>";
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

    // if (searchTerm) {
    //     var index = lunr(function() {
    //         this.field('id');
    //         this.field('title', {boost: 10});
    //         this.field('author');
    //         this.field('content');

    //         for (var key in window.store) {
    //             this.add({
    //                 'id':key,
    //                 'title':window.store[key].title,
    //                 'author':window.store[key].author,
    //                 'content':window.store[key].content
    //             });
    //         }
    //         });

        // var results = index.search(searchTerm);  
        var results = [];
        
        if (searchTerm) {
         
            for (var key in window.store) { 
                console.log(window.store[key].title);
                if (window.store[key].title.toLowerCase().includes(searchTerm.toLowerCase()) || window.store[key].author.toLowerCase().includes(searchTerm.toLowerCase())) {
                    results.push(key);
                }
            }
        } 

        displaySearchResults(results);
    
})();