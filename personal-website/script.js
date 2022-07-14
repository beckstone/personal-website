$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

function loadRepos() {
    let gitRepos = new XMLHttpRequest();
    gitRepos.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.responseText);
        for (let i=0; i< results.length; i++) {
            console.log(results[i].name);
        //document.getElementById("myRepos").innerHTML = results[i].html_url;
        }
      }
}
    gitRepos.open("GET", "https://api.github.com/users/beckstone/repos", true);
    gitRepos.send();
};
