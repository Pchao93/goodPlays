class Api::GamesController < ApplicationController

  def show
    @game = Rails.cache.fetch("game-#{params[:id]}", force: false) do
      Game.includes(:developer, :genres, :platforms).find_by(id: params[:id])
    end

    if @game
      @reviews = Rails.cache.fetch("game-reviews-#{@game.id}-#{@game.updated_at}", force: false) do

        p ["CACHE MISS CACHE MISS"]

        @game.reviews.includes(:user).load
      end
    end


    if @game.nil?
      render :json ["Game not found"], status: 404
    end

  end

  def index
    if params[:user_id]
      if current_user
        @games = Rails.cache.fetch("user-games-#{current_user.id}") do
          p ["CACHE MISS CACHE MISS"]

          current_user.games.includes(:developer, :genres, :platforms, reviews: [:user]).load
        end
        p @games.uniq.count
      end
    else
      @games = Rails.cache.fetch("games-#{Game.last.id}", force: false) do
        p ["CACHE MISS CACHE MISS"]

        Game.includes(:developer, :genres, :platforms, reviews: [:user]).load
      end
    end
      # @game_reviews = Rails.cache.fetch("game-reviews-#{}")
    if current_user
      @user_reviews = Rails.cache.fetch("user-#{current_user.id}-#{current_user.updated_at}", force: false) do
        p ["CACHE MISS CACHE MISS"]

        current_user.reviews.includes(:game).where(game_id: @games.pluck(:id)).load
      end
    end




  end

  def search
    #In the future, will add games by title, games by platform, and games by genre
    if params[:query].present?
      @query = params[:query]
      @games = Rails.cache.fetch("search-#{@query}", force: false) do
        Game.includes(:developer, :genres, :platforms, reviews: [:user]).where("lower(title) ~ ?", params[:query].downcase).load
      end
      if current_user
        @user_reviews = Rails.cache.fetch("user-#{current_user.id}-#{current_user.updated_at}", force: false) do
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
