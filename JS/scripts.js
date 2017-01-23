function Destinations(locations,capital,nationalDish,population) {
  this.locations = locations;
  this.capital = capital;
  this.nationalDish = nationalDish;
  this.population = population;
}

$(document).ready(function() {
  $("form#destination").submit(function(event) {
    event.preventDefault();
    var userPlace = $("#loc").val();
    var locations = userPlace;
    var userCapital = $("#cap").val();
    var userNationalDish = $("#dish").val();
    var userPopulation = $("#pop").val();

    userPlace = new Destinations(locations,userCapital, userNationalDish,userPopulation);

    console.log(userPlace);
    $("#output").append("<li>" + userPlace.locations + "</li>");

    $("li").click(function() {
      $(this).append("<ul><li>" + userPlace.capital + "</li> <li>" + userPlace.nationalDish + "</li> <li>"  + userPlace.population + "</li></ul>");
    });
  })

})
