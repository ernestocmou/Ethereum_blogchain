class CreateTokens < ActiveRecord::Migration[5.2]
  def change
    create_table :tokens do |t|
      t.string :name
      t.string :symbol
      t.string :address
      t.float :price
      t.float :capitalization
      t.float :totalSupply
      t.float :availableSupply
      t.string :description

      t.timestamps
    end
  end
end
