class Api::V1::TokensController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  # passing `scope` in so that the serializer has access to the current user (see MusumShowSerializer)
  serialization_scope :current_user

  def index
    render json: { tokens: Token.all }
  end

  def show
    render json: Token.find(params[:id]), serializer: TokenShowSerializer
  end
end
