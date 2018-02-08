class Api::GamesController < ApplicationController

  def show
    @game = Rails.cache.fetch("game-#{params[:id]}") do
      Game.includes(:developer, :genres, :platforms, reviews: [:user]).find_by(id: params[:id])
    end

    @reviews = Rails.cache.fetch("game-reviews-#{@game.id}") do
      @game.reviews.includes(:user).load
    end


    if @game.nil?
      render :json ["Game not found"], status: 404
    end

  end

  def index

    @games = Rails.cache.fetch('games') do
      p 'cache miss'
      Game.includes(:developer, :genres, :platforms, reviews: [:user]).limit(100).load
    end
    # @game_reviews = Rails.cache.fetch("game-reviews-#{}")
    if current_user
      @user_reviews = Rails.cache.fetch("user-#{current_user.id}") do
        p 'cache miss'
        current_user.reviews.includes(:game).where(game_id: @games.pluck(:id)).load
      end
    end



  end

  def search
    #In the future, will add games by title, games by platform, and games by genre
    if params[:query].present?
      @query = params[:query]
      @games = Rails.cache.fetch("search-#{query}") do
        Game.includes(:developer, :genres, :platforms, reviews: [:user]).where("lower(title) ~ ?", params[:query].downcase).load
      end
      if current_user
        @user_reviews = Rails.cache.fetch("user-#{current_user.id}") do
          p 'cache miss'
          current_user.reviews.includes(:game).where(game_id: @games.pluck(:id)).load
        end
      end


    else
      @games = Game.none
    end
    render :search
  end

  # def game_params
  #   params.requre(:game).permit(:pagination)
  # end
end
