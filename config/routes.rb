Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'sessions#index'
  resources :users, only: [:index, :new, :create, :show]

  resource :session, only: [:index, :new, :create, :destroy]

  resources :items
end
