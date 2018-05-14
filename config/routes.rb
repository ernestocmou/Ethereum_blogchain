Rails.application.routes.draw do
  root 'app#index'
  devise_for :users

  resources :tokens, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :tokens, only: [:index, :show] do
          resources :comments, only: [:index]
      end
      resources :comments, only: [:create]
    end
  end

end
