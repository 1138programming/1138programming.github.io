var expiremental = (document.getElementById("customMarkdownJsFileID").getAttribute("expiremental-enabled") === "true"); // if expiremental is defined

// class for markdown at beginning of line...
class beginningLineMarkdown {
  constructor(checkStr, addCallback) {
    this.checkStr = checkStr;
    this.addCallback = addCallback; // the function that returns the fully modified string
  }

  matches(str) {
    return str.startsWith(this.checkStr);
  }
  replace(str) {
    //just returns val
    return this.addCallback(str.substring(this.checkStr.length)); // remove prefix and call supplied func
  }
}
// custom md callbacks
function noteCallback(userText) {
  return (
    '<div class="note yellow">\n' +
    '<p class="noteTitle"><b>Note:</b><hr class="noteSeperator"></p>\n' +
    "<div>" +
    userText +
    "</div>\n" +
    "</div>"
  );
}
function noteWarningCallback(userText) {
  return (
    '<div class="note red">\n' +
    '<p class="noteTitle"><b>Warning!</b><hr class="noteSeperator"></p>\n' +
    "<div>" +
    userText +
    "</div>\n" +
    "</div>"
  );
}
function noteInfoCallback(userText) {
  return (
    '<div class="note blue">\n' +
    '<p class="noteTitle"><b>Info:</b><hr class="noteSeperator"></p>\n' +
    "<div>" +
    userText +
    "</div>\n" +
    "</div>"
  );
}
var customMarkdownsArr = [];
customMarkdownsArr.push(new beginningLineMarkdown("!! ", noteCallback));
customMarkdownsArr.push(new beginningLineMarkdown("!!w ", noteWarningCallback));
customMarkdownsArr.push(new beginningLineMarkdown("!!i ", noteInfoCallback));

var documentTxts = document.getElementById("compiledMarkdownDiv").getElementsByTagName("p");

function htmlDecodeEntities(html) { //can hurt compatibility with certain browsers.
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  var retVal = txt.value;
  txt.remove();
  return retVal;
}
function loadCustomMarkdown() {
  for (let i of documentTxts) {
    for (let j of customMarkdownsArr) {
      if (j.matches(i.innerHTML)) {
          i.innerHTML = expiremental ? htmlDecodeEntities(j.replace(i.innerHTML)) : j.replace(i.innerHTML); //decodes HTML entites if expiremental is enabled
      }
    }
  }
}
loadCustomMarkdown(); // always call on beginning of page.