require 'spec_helper'
require 'rails_helper'

describe 'api/users/show' do
  it 'renders user json object' do
    user = User.create(username: 'donkey', password: 'abcdef', email: 'email@email.email')
    assign(:user, user)
    render
    expect(view).to render_template(:show)
    user_hash = JSON.parse(rendered)

    expect(user_hash['user']['id']).to eq(user.id)
    expect(user_hash['user']['collections'].length).to eq(4)
    expect(user_hash['user']['username']).to eq('donkey')
  end

  it 'does not render the user\'s password' do
    user = User.create(username: 'donkey', password: 'abcdef', email: 'email@email.email')
    assign(:user, user)
    render
    expect(view).to render_template(:show)
    user_hash = JSON.parse(rendered)

    expect(user_hash['user']['password']).to be_nil
    expect(user_hash['user']['password_digest']).to be_nil
  end
end
