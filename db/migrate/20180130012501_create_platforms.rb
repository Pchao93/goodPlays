class CreatePlatforms < ActiveRecord::Migration[5.1]
  def change
    create_table :platforms do |t|
      t.string :name, null: false
      t.string :abreviation, null: false
      t.timestamps
    end
  end
end
