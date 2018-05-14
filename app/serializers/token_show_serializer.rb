class TokenShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :price, :capitalization, :totalSupply, :availableSupply, :description, :symbol
  has_many :comments
end
