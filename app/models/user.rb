class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password

  has_many :collections
  has_many :reviews
  has_many :reviewed_games,
    through: :reviews,
    source: :game,
    dependent: :destroy


  has_many :games,
    through: :collections


  before_validation :ensure_session_token

  after_create :create_default_collections

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user.nil? || user.is_password?(password)
    nil
  end

  def create_default_collections
    Collection.create(user_id: self.id, name: "Want to Play")
    Collection.create(user_id: self.id, name: "Have Played")
    Collection.create(user_id: self.id, name: "Playing")
    Collection.create(user_id: self.id, name: "My Favorites")
  end

  def default_collections
    self.collections.includes(:games).order(id: :asc).limit(3)
  end

end
