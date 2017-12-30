
// A generic onclick callback function.
function onClick(info, tab) {

    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    
    if (info && info.selectionText) {

        var words = info.selectionText;

        // update the two URLs with your library's links 
        var bookUrl = "http://alpl.ent.sirsi.net/client/en_US/default/search/results/?q=" + words;
        chrome.tabs.create({ url: bookUrl});
        
        // my library has separate websites for books and ebooks.
        // remove these lines if your library doesn't
        var eBookUrl = "https://acpl.overdrive.com/search?query=" + words;
        chrome.tabs.create({ url: eBookUrl});        
    }
  }
 
 window.onload = function(e) {   
    // Create one test item for each context type.
    //   var contexts = ["page","selection","link","editable","image","video","audio"];
     var contexts = ["selection"];
     for (var i = 0; i < contexts.length; i++) {
       var context = contexts[i];

       var title = "Search Library for \"%s\"";
       var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                            "onclick": onClick});
    }
  }
