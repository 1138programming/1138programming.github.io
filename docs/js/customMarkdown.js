var documentTxts = document.getElementById("compiledMarkdownDiv").getElementsByTagName("p");

for(let i of documentTxts) {
    
    if (i.innerText.startsWith("!! ")) {
        // we want this to be a note
        let userText = i.innerHTML.substring(3); // remove the !! 
        let noteHtml = "<div class=\"note\">" +
        "<p class=\"noteTitle\"><b>Note:</b></p>" +
        "<p>" + userText + "</p>" +
        "</div>";

        i.innerHTML = noteHtml;
    }
}