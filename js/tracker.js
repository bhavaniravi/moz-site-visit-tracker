// Sites that you wanna track
TRACKING_SITES = ["www.facebook.com",
"twitter.com",
"quora.com",
"medium.com",
"stackoverflow.com",
"github.com"
]
// Get site name on each site visit
var site = document.location.hostname;

// initialization
if(window.localStorage[site]===undefined){
  window.localStorage[site] = 0;
  setVisit();
}
/**setVist - Increments visit count**/
function setVisit(){
    window.localStorage[site] = parseInt(window.localStorage[site])+1;
}
function getVisit(){
    return (parseInt(window.localStorage[site]));
}
/**find if current site is in tracking site list**/
function ismatch(){
    return (TRACKING_SITES.indexOf(site) > -1);
}

/**Increment visit everytime you land on a page**/
$(document).on('visibilitychange', function() {
    if(document.visibilityState != 'hidden' && ismatch())
            setVisit();
});
