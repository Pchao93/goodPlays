require 'spec_helper'
require 'rails_helper'

describe 'api/reviews/index' do
  it 'renders reviews json object' do
    game = Game.first
    reviews = game.reviews

    assign(:reviews, reviews)
    assign(:game, game)

    render
    expect(view).to render_template(:index)
    collections_hash = JSON.parse(rendered)
    expect(collections_hash['reviews']).to_not be_nil
    expect(collections_hash['users']).to_not be_nil
  end
end
