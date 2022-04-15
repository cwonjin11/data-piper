class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :role
      t.string :urgency
      t.integer :quantity
      t.string :skills_needed

      t.timestamps
    end
  end
end
