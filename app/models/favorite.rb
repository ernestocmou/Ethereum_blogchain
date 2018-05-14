class Favorite < ApplicationRecord
  validates :favorite, presence: true

  belongs_to :user_id
end
