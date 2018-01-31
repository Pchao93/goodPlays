class Api::GamesController < ApplicationController

  def show
    @game = Game.includes(:developer, :platforms).find_by(id: params[:id])
    if @game.nil?
      render :json ["Game not found"], status: 404
    end
  end

  def index
    @games = Game.includes(:developer, :platforms).limit(25)
  end

  # def game_params
  #   params.requre(:game).permit(:pagination)
  # end
end
