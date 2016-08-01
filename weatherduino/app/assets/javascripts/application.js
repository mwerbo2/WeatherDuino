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

function getWeather() {
  $.getJSON('/weather').done(function( weather ) {
      console.log(weather.current_observation)
      let $results = $('.results')
      let $img = $('<img>').attr({
        src: weather.current_observation.icon_url
      });
      let $p = $('<p>').text("Feels like: " + weather.current_observation.feelslike_f + " F")
       let $p2 = $('<p>').text("Showing conditions for: " + weather.current_observation.display_location.city)
       let $p3 = $('<p>').text("Humidity: " + weather.current_observation.relative_humidity)
       let $p4 = $('<p>').text("Conditions: \n" + weather.current_observation.weather)
       let $SaveLocation = $('<button class="save">').text("Save Location")
      $results.append($p2)
      $results.append($p)
      $results.append($p3)
      $results.append($p4)
      $results.append($img)
      $results.append($('<br>'))
      $results.append($SaveLocation)

    let fellLike = weather.current_observation.relative_humidity

  })
}

  $(function() {
    getWeather();
  })
    // console.log(weather)
    // let response = weather.current_observation
    // response.Each(function(obj) {
    //   console.log(obj.feelslike_f)
    // })
// function getData(e) {
// e.preventDefault()

//   zip = $('zipsearch').val();
//   $.getJSON('http://api.wunderground.com/api/91ae0e4eb2f590/conditions/q/'+zip+'.json').done(function(weather) {
//       console.log(weather, 'hi')
//   });


function saveLocation(e){


}













});


