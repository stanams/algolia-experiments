class RenameObjectIdColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :movies, :objectId, :objectID
  end
end
