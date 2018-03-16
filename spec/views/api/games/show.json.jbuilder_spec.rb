require 'spec_helper'
require 'rails_helper'

describe 'api/games/show' do
  it 'renders game json object' do
    game = Game.find_by(id: 1)
    assign(:game, game)
    assign(:reviews, game.reviews)
    render
    expect(view).to render_template(:show)
    game_hash = JSON.parse(rendered)

    expect(game_hash['games']).to_not be_nil
    expect(game_hash['reviews']).to_not be_nil
    expect(game_hash['users']).to_not be_nil
  end
end
