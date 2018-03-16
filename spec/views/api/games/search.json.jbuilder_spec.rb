require 'spec_helper'
require 'rails_helper'

describe 'api/games/search' do
  
  it 'renders game json object' do
    games = Game.all
    assign(:games, games)
    assign(:user_reviews, games[0].reviews)
    assign(:query, "dog")

    render
    expect(view).to render_template(:search)
    games_hash = JSON.parse(rendered)

    expect(games_hash['games']).to_not be_nil
    expect(games_hash['reviews']).to_not be_nil
    expect(games_hash['query']).to_not be_nil
  end
end
