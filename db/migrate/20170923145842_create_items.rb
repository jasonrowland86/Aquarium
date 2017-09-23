class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :kind
      t.belongs_to :user

      t.timestamps
    end
  end
end
