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
      :templates => template_list
    }
end

get "/templates/:name" do
  erb (params[:name].split(".")[0]).to_sym, :locals => JSON.parse(IO.read("config.json"))
end

def template_list()
  all_templates = Dir.glob("./templates/*.erb").map do |template|
    File.basename("./templates" + template)
  end

  # filter out base layout
  return all_templates.select { |template| !template.eql?("layout.erb") }
end
