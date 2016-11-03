require 'httparty'

class WeatherController < ApplicationController

  def index
    url = "http://api.wunderground.com/api/WUNDERGROUNDAPI/conditions/q/#{params[:zipcode]}.json"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end

  def show
    location = SavedLocation.find(params[:zip])
    render :json => location
  end

  def create
    location = SavedLocation.create({
      :zipcode => params[:zip]
      })
    render :json => location
  end


   def destroy
    location = SavedLocation.find(params[:id])
    if @student
      @student.destroy
      render :json => {:deleted => true} if @student
    else
      render :json => {:deleted => false}
    end
  end



end

