// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// $('.search').click(function(event) {
//   event.preventDefault()
//   console.log("clicked", event)
// });
$(document).ready(function() {
  console.log("Hello")

function getWeather(e) {
    e.preventDefault();
    $('.results').empty();
    zip = $('.zipsearch').val()

  $.getJSON('/weather', {zipcode: zip}).done(function( weather ) {
      $('.results').empty();
      $('#results_container').empty();
      console.log(weather.current_observation)

      let $div = $("<div class='results'>")
      let $img = $('<img>').attr({
        src: weather.current_observation.icon_url
      });
      let $p = $('<p>').text("Feels like: " + weather.current_observation.feelslike_f + " F")
       let $p2 = $('<p>').attr('id', weather.current_observation.display_location.zip).text("Showing conditions for: " + weather.current_observation.display_location.city)
       let $p3 = $('<p>').text("Humidity: " + weather.current_observation.relative_humidity)
       let $p4 = $('<p>').text("Conditions: \n" + weather.current_observation.weather)
       let $SaveLocation = $('<button class="save">').text("Save Location")
      $div.append($p2)
      $div.append($p)
      $div.append($p3)
      $div.append($p4)
      $div.append($img)
      $div.append($('<br>'))
      $div.append($SaveLocation)
      $('#results_container').append($div)

    let fellLike = weather.current_observation.relative_humidity


    saveLocation()
  })

}

$('form').submit(getWeather)
  // $(function() {
  //   getWeather();
  // })
    // console.log(weather)
    // let response = weather.current_observation
    // response.Each(function(obj) {
    //   console.log(obj.feelslike_f)
    // })
// function getData(e) {
// e.preventDefault()


//   $.getJSON('http://api.wunderground.com/api/91ae0e4eb2f590/conditions/q/'+zip+'.json').done(function(weather) {
//       console.log(weather, 'hi')
//   });



function saveLocation(e){
  $('.save').click(function(event) {
    let $siblings = $(event.target).parent().children();
    console.log($siblings)
    let data = {
      zip: $siblings.eq(0).attr("id")
    }

    console.log(data);
    $.ajax({
      url: '/weather',
      method: 'post',
      data: data
    })
    .done(function() {
  alert("Successfully Saved!");
})
  });
}















});


