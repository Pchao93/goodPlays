class Api::GamesController < ApplicationController

  def show
    @game = Game.find_by(id: params[:id])
    if @game.nil?
      render :json ["Game not found"], status: 404
    end
  end

  def index
    @games = Game.all
  end
end
