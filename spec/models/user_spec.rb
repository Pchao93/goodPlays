require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      user = User.find_by(username: 'donkey')
      expect(user.password).not_to be('abcdef')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'donkey', password: 'abcdef')
    end
  end

  describe 'session token' do
    it 'assigns a session_token if one is not given' do
      jack = User.create(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      expect(jack.session_token).not_to be_nil
    end
  end

  describe 'create default collections' do
    it 'creates the correct number of initial collections' do
      jack = User.create(username: 'donkey', password: 'abcdef', email: 'test@test.com')
      expect(jack.collections.length).to eq(4)
      expect(jack.default_collections.length).to eq(3)
    end


  end

  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_uniqueness_of(:email) }



  it { should validate_presence_of(:password_digest) }
  it { should have_many(:collections).dependent(:destroy) }
  it { should have_many(:reviews).dependent(:destroy) }
  it { should have_many(:games).through(:collections) }
  it { should have_many(:reviewed_games).through(:reviews) }

end
