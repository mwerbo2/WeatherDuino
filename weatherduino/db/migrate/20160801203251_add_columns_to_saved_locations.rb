class AddColumnsToSavedLocations < ActiveRecord::Migration[5.0]
  def change
    add_column :saved_locations, :zipcode, :integer
  end
end
