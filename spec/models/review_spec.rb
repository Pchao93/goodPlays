require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to(:game).touch(true) }
  it { should belong_to(:user).touch(true) }

  it { should validate_presence_of(:rating) }
  it { should validate_uniqueness_of(:game_id).scoped_to(:user_id) }
  describe 'creation validation' do

    it 'should add the game to a collection if needed' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      Review.create(game_id: 1, user_id: user.id, rating: 5)
      expect(User.find_by(id: user.id).default_collections[1].games.count).to eq(1)
    end
    it 'should update both user and game when created' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      game = Game.find_by(id: 1)
      user_updated_at = user.updated_at
      game_updated_at = game.updated_at
      Review.create(game_id: 1, user_id: user.id, rating: 5)
      expect(User.find_by(id: user.id).updated_at).to_not be(user_updated_at)
      expect(Game.find_by(id: 1).updated_at).to_not be(game_updated_at)
    end

    it 'should update both user and game when updated' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      review = Review.create(game_id: 1, user_id: user.id, rating: 5)
      user_updated_at = User.find_by(id: user.id).updated_at
      game_updated_at = Game.find_by(id: 1).updated_at
      review.old_rating = 5
      review.update!(rating: 1)
      expect(User.find_by(id: user.id).updated_at).to_not be(user_updated_at)
      expect(Game.find_by(id: 1).updated_at).to_not be(game_updated_at)
    end

    it 'should update the average score on creation and update' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      user2 = User.create!(username: 'donkey2', password: 'abcdef', email: 'testtest@test.com')
      user3 = User.create!(username: 'donkey3', password: 'abcdef', email: 'testtesttest@test.com')


      game = Game.create!(title: "fake", description: "fake", release_date: "fake", image_url: "fake", amazon_url: "fake", developer_id: 1, rating: "fake")
      review = Review.create!(game_id: game.id, user_id: user.id, rating: 5)

      expect(Game.find_by(id: game.id).average_score).to eq(5.0)
      Review.create(game_id: game.id, user_id: user2.id, rating: 1)
      expect(Game.find_by(id: game.id).average_score).to eq(3)
      Review.create(game_id: game.id, user_id: user3.id, rating: 3)
      expect(Game.find_by(id: game.id).average_score).to eq(3)

    end
  end

  describe 'deletion validation' do
    it 'should update the average score on deletion' do
      user = User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      user2 = User.create!(username: 'donkey2', password: 'abcdef', email: 'testtest@test.com')
      user3 = User.create!(username: 'donkey3', password: 'abcdef', email: 'testtesttest@test.com')


      game = Game.create!(title: "fake", description: "fake", release_date: "fake", image_url: "fake", amazon_url: "fake", developer_id: 1, rating: "fake")
      Review.create!(game_id: game.id, user_id: user.id, rating: 5)

      Review.create!(game_id: game.id, user_id: user2.id, rating: 1)

      Review.create!(game_id: game.id, user_id: user3.id, rating: 3)
      review= Review.find_by(game_id: game.id, user_id: user.id)
      review.destroy
      expect(Game.find_by(id: game.id).average_score).to eq(2)


    end
  end



end
