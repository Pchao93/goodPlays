Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #index, show, new, edit, update, create, destroy
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do

    resource :session, only: [:create, :destroy]

    resources :users, only: :create do
      resources :collections, only: [:index]
      resources :reviews, only: :index
      resources :games, only: :index
    end

    resources :collections, only: [:show, :create, :update, :destroy, :index]

    resources :games, only: [:show, :index] do
      resources :reviews, only: [:index, :create, :update]
      get "search", on: :collection
    end

    resources :reviews, only: :destroy

    resources :collection_games, only: [:create, :destroy]

  end

  delete '/api/collection_games', to: "api/collection_games#destroy"


end
