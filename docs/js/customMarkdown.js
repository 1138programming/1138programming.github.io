// class for markdown at beginning of line...
class beginningLineMarkdown {
    constructor(checkStr, addCallback) {
        this.checkStr = checkStr;
        this.addCallback = addCallback; // the function that returns the fully modified string
    }

    matches(str) {
        return str.startsWith(this.checkStr);
    }
    replace(str) { //just returns val
        return this.addCallback(str.substring(this.checkStr.length)); // remove prefix and call supplied func
    }
}
// custom md callbacks
function noteCallback(userText) {
    return "<div class=\"note yellow\">\n" +
    "<p class=\"noteTitle\"><b>Note:</b><hr class=\"noteSeperator\"></p>\n" +
    "<p>" + userText + "</p>\n" +
    "</div>";
}
function noteWarningCallback(userText) {
    return "<div class=\"note red\">\n" +
    "<p class=\"noteTitle\"><b>Warning!</b><hr class=\"noteSeperator\"></p>\n" +
    "<p>" + userText + "</p>\n" +
    "</div>"; 
}
function noteInfoCallback(userText) {
    return "<div class=\"note blue\">\n" +
    "<p class=\"noteTitle\"><b>Info:</b><hr class=\"noteSeperator\"></p>\n" +
    "<p>" + userText + "</p>\n" +
    "</div>"; 
}
var customMarkdownsArr = [];
customMarkdownsArr.push(new beginningLineMarkdown("!! ", noteCallback));
customMarkdownsArr.push(new beginningLineMarkdown("!!w ", noteWarningCallback));
customMarkdownsArr.push(new beginningLineMarkdown("!!i ", noteInfoCallback));

var documentTxts = document.getElementById("compiledMarkdownDiv").getElementsByTagName("p");

for(let i of documentTxts) {
    for (let j of customMarkdownsArr) {
        if (j.matches(i.innerHTML)) {
            i.innerHTML = j.replace(i.innerHTML);
        }
    }
}