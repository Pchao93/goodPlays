class Api::CollectionGamesController < ApplicationController

  def create
    @collection_game = CollectionGame.new(
      collection_game_params)
    @collection_game
    if @collection_game.valid?
      default_collections = current_user.collections.includes(:games).limit(3)
      #future goal:
      #find collection_game where the game id is the game_id, and the user_id is the current user's id?
      #Is that possible in active record?
      # CollectionGame.joins(:game, :user).where(user: current_user)
      default_collections.each do |collection|
        if collection.id == collection_game_params[:collection_id]
          next
        else
          collection.games.each do |game|
            if game.id == collection_game_params[:game_id].to_i
              @default_game_collection = CollectionGame.find_by(
                game_id: game.id,
                collection_id: collection.id)
            end
          end
        end
      end
      if @default_game_collection
        if default_collections.include?(
          @collection_game.collection)
          @default_game_collection.destroy
          @to_remove = @default_game_collection.collection_id
        end
      else
        CollectionGame.create!(
          collection_id: default_collections.last.id,
          game_id: @collection_game.game_id)
        @to_add = default_collections[1].id
      end
      @collection_game.save
      render :show
    else
      render json: @collection_game.errors.full_messages, status: 401
    end

  end

  def destroy
    @collection_game = CollectionGame.find_by(collection_game_params)
    if @collection_game
      # default_collections = current_user.collections.includes(:games).limit(3)
      # if default_collections.include?(@collection_game.collection)


      # end
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
