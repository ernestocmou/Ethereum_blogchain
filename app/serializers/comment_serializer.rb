class CommentSerializer < ActiveModel::Serializer

    attributes :id, :body, :token_id, :user_id, :user_name
    belongs_to :token
    belongs_to :user


    def user_name
        object.user.username
    end
end
