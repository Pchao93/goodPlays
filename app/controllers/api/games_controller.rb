class Api::GamesController < ApplicationController

  def show
    @game = Game.includes(:developer, :genres, :platforms, reviews: [:user]).find_by(id: params[:id])
    @reviews = @game.reviews

    if @game.nil?
      render :json ["Game not found"], status: 404
    end

  end

  def index
    @games = Game.includes(:developer, :genres, :platforms, reviews: [:user]).order(id: :asc).limit(100)
    @reviews = current_user.reviews.includes(:game).where(game_id: @games.pluck(:id)) if current_user


  end

  def search
    #In the future, will add games by title, games by platform, and games by genre
    if params[:query].present?
      @query = params[:query]
      @games = Game.includes(:developer, :genres, :platforms, reviews: [:user]).where("lower(title) ~ ?", params[:query].downcase)
      @reviews = current_user.reviews


    else
      @games = Game.none
    end
    render :search
  end

  # def game_params
  #   params.requre(:game).permit(:pagination)
  # end
end
