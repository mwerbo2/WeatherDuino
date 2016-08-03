class CreateSavedLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :saved_locations do |t|

      t.timestamps
    end
  end
end
