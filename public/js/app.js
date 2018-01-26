//GOOGLE SEARCH
//Enter domain of site to search
var domainroot="https://thinkbott.herokuapp.com/";
function Gsitesearch(curobj){
curobj.q.value="site:"+domainroot+" "+curobj.qfront.value;
}
