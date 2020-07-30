class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :itemType
      t.string :allergens
      t.string :description
      t.string :price
      t.belongs_to :table
      t.belongs_to :user

      t.timestamps
    end
  end
end
