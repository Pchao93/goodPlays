require 'spec_helper'
require 'rails_helper'

describe 'api/collections/index' do
  it 'renders collections json object' do
    user = User.first
    collections = user.collections
    assign(:user, user)
    assign(:collections, collections)
    render
    expect(view).to render_template(:index)
    collections_hash = JSON.parse(rendered)

    expect(collections_hash['collections']).to_not be_nil
    expect(collections_hash['users']).to_not be_nil
  end
end
