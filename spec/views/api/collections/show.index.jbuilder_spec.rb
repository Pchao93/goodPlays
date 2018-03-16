require 'spec_helper'
require 'rails_helper'

describe 'api/collections/show' do
  it 'renders collection json object' do
    user = User.first
    collection = user.collections[0]
    collection_games = collection.games
    user_reviews = user.reviews
    assign(:collection, collection)
    assign(:collection_games, collection_games)
    assign(:user_reviews, user_reviews)
    render
    expect(view).to render_template(:show)
    collection_hash = JSON.parse(rendered)

    expect(collection_hash['collection']).to_not be_nil
    expect(collection_hash['games']).to_not be_nil
    expect(collection_hash['user']).to_not be_nil

  end
end
