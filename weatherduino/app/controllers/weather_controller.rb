require 'httparty'

class WeatherController < ApplicationController
  def index
    url = "http://api.wunderground.com/api/91ae0e4eb2f59024/conditions/q/#{params[:zipcode]}.json"
    puts "#{params[:zipcode]}"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end

