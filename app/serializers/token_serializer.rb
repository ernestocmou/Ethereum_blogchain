class TokenSerializer < ActiveModel::Serializer
    attributes :id, :name, :address, :price, :capitalization, :totalSupply, :availableSupply, :description, :symbol
end
