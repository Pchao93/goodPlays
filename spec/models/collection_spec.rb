require 'rails_helper'

RSpec.describe Collection, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_length_of(:name).is_at_least(1) }

  it 'should validate that :user cannot be empty/falsy' do
    should validate_presence_of(:user).with_message(:required)
  end

  it 'should initialize with a count of 0' do
    collection1 = Collection.create(user_id: 1, name: "collection")
    expect(collection1.count).to eq(0)
  end

  it { should belong_to(:user) }
  it { should have_many(:collection_games).dependent(:destroy) }
end
