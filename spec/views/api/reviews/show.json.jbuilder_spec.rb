require 'spec_helper'
require 'rails_helper'

describe 'api/reviews/show' do
  it 'renders review json object' do
    review = Review.first

    assign(:review, review)
    render
    expect(view).to render_template(:show)
    collection_hash = JSON.parse(rendered)

    expect(collection_hash['review']).to_not be_nil
    expect(collection_hash['user']).to_not be_nil

  end
end
