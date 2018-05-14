class Api::V1::CommentsController < ApiController

    skip_before_action :verify_authenticity_token, only: [:create]
    def index
        render json: Comment.all
    end

    def create
        data = JSON.parse(request.body.read)
        error = { id: 'error message', body: ''}
        new_comment = Comment.new(body: data["body"], token_id: data["token_id"])
        post_user = current_user
        if !post_user
          error[:body] = "Please log in to leave a comment"
        else
          post_user.comments.each do |comment|
            if comment.token_id == new_comment.token_id
              error[:body] = "One comment to a user, please!"
            end
          end
        end
        if error[:body] == ''
          new_comment.user = post_user
        end
        if new_comment.valid?
          new_comment.save
          render json: new_comment
        else
          render json: error
        end
    end
end
