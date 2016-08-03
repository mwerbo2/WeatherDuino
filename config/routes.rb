Rails.application.routes.draw do
  get '/saves' =>'saves#index'

  root 'welcome#index'
  resources :weather


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
