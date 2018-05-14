class CommentsController < ApplicationController
  # def new
  #   @token = Token.find(params[:token_id])
  #   @comment = Comment.new
  # end
  #
  # def create
  #   @comment = Comment.new(comments_params)
  #   @token = Token.find(params[:token_id])
  #   @comment.token = @token
  #
  #   if @comment.save
  #     redirect_to token_path(@token)
  #     flash[:message] = "Comment added successfully"
  #   else
  #     render :new
  #
  #   end
  # end
  #
  # private
  # def comments_params
  #   params.require(:comment).permit(:body)
  # end
end
