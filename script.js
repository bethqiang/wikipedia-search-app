$(document).ready(function() {
  //when you click the submit button
  $("#search-button").click(function () {
    //take the search input
    var searchInput = $("#search-input").val();
    //and this url
    var wikiapiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";
    //and get your json
    $("#results").html("");
    $.getJSON(wikiapiurl, function(wikiResults){
      console.log(wikiResults);
      //put data in html
      for (var i=0; i<wikiResults[1].length; i++) {
        $("#results").append("<a href=" + wikiResults[3][i] + " target='_blank'><li class='results-item'><h3>" + wikiResults[1][i] + "</h3><p>" + wikiResults[2][i] + "</p></li></a>");
      }; //end for loop
    }); //end get JSON
  }); //end search button click
  //submit search input via space bar
  $("#search-input").keypress(function(e) {
    if (e.which==13) {
      $("#search-button").click();
    }; //end submit via space bar
  }); //end keypress to send search input
}); //end ready
