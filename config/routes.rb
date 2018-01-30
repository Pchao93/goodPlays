Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #index, show, new, edit, update, create, destroy
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: :create
    resources :games, only: [:show, :index]
  end
  
end
