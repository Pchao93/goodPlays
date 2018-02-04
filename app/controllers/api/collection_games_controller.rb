class Api::CollectionGamesController < ApplicationController

  def create
    @collection_game = CollectionGame.new(
      collection_game_params)
    @collection_game
    if @collection_game.save
      render :show
    else
      render json: @collection_game.errors.full_messages, status: 401
    end

  end

  def destroy
    @collection_game = CollectionGame.find_by(collection_game_params)
    if @collection_game
      @collection_game.destroy
      render :show
    else
      render json: ["Game is not in specified collection"], status: 404
    end
  end


  def destroy_all

  end

  private

  def collection_game_params
    params.require(:collection_game).permit(:collection_id, :game_id)
  end
end
