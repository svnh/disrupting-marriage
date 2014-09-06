
get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/winner' do
  @answer = "And the winner is is #{params[:won]}"
end