require 'rails_helper'

RSpec.describe CollectionGame, type: :model do

  it 'should increment the count of the collection' do
    collection = Collection.create(user_id: 1, name: "collection")
    cg = CollectionGame.create(game_id: 1, collection_id: collection.id)
    expect(collection.games.count).to eq(1)
    cg.destroy
    expect(collection.games.count).to eq(0)
  end
  describe 'creation validation' do
    it 'should allow a game to be in only one default collection' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      default_collections = user.default_collections
      CollectionGame.create(game_id: 1, collection_id: default_collections[0].id)
      CollectionGame.create(game_id: 1, collection_id: default_collections[1].id)
      expect(default_collections[0].games.count).to eq(0)
      expect(default_collections[1].games.count).to eq(1)
    end

    it 'should add a game to a default collection if it is not already present' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      default_collections = user.default_collections
      CollectionGame.create(game_id: 1, collection_id: default_collections[2].id + 1)
      expect(default_collections[1].games.count).to eq(1)
    end

  end

  describe 'deletion validation' do
    it 'should remove games from other collections if the game is removed from a default collection' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      default_collections = user.default_collections
      CollectionGame.create(game_id: 1, collection_id: default_collections[2].id + 1)
      cg2 = CollectionGame.find_by(game_id: 1, collection_id: default_collections[1].id)
      cg2.destroy
      expect(CollectionGame.find_by(game_id: 1, collection_id: default_collections[2].id + 1)).to be_nil
    end

    it 'should delete reviews made by the user' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      default_collections = user.default_collections
      cg = CollectionGame.create(game_id: 1, collection_id: default_collections[2].id)
      Review.create(game_id: 1, user_id: user.id, rating: 5)
      cg.destroy
      review = Review.find_by(game_id: 1, user_id: user.id)
      expect(review).to be_nil
    end

  end


  it { should belong_to(:game) }
  it { should belong_to(:collection) }
  it { should have_one(:user).through(:collection)}
  it { should validate_uniqueness_of(:game_id).scoped_to(:collection_id)}

end
