#!/usr/bin/env ruby

require 'sinatra'
require 'json'

set :port, 8080
set :views, settings.root + '/templates'

get "/" do
  erb :index,
    :layout => false,
    :views => '.',
    :locals => {
      :templates => Dir.glob("./templates/*.erb").map {|template| File.basename("./templates" + template)}
    }
end

get "/templates/:name" do
  erb (params[:name].split(".")[0]).to_sym, :locals => JSON.parse(IO.read("config.json"))
end
