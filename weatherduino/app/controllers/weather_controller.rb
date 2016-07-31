class WeatherController < ApplicationController
  def index
    url = "http://api.wunderground.com/api/91ae0e4eb2f59024/conditions/q/NY/New_York.json"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body

  end
end
console.log("this is the response", parsed_body)
