class SavesController < ApplicationController

  def index
    @locations = SavedLocation.all
  end

end
