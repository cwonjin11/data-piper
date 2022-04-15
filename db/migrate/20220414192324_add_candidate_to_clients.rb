class AddCandidateToClients < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :candidate, :string
  end
end
