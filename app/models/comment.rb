class Comment < ApplicationRecord

  validates :body, presence: true

  belongs_to :token
  belongs_to :user
end
