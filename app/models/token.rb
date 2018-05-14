class Token < ApplicationRecord
  validates :name , presence: true
  validates :symbol , presence: true
  validates :address , presence: true
  validates :price , presence: true
  validates :capitalization , presence: true
  validates :totalSupply , presence: true
  validates :availableSupply , presence: true

  has_many :comments
end
