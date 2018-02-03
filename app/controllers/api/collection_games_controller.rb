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
      # user_collection_games = CollectionGame.joins(:game, :users)
      #   .where(users: current_user, game: @collection_game.game)
      # if user_collection_games.count < 1
      #   CollectionGame.create!(
      #     collection_id: default_collections.last.id,
      #     game_id: @collection_game.game_id)
      #   @to_add = default_collections[1].id unless default_collections[1].id === @collection_game.collection_id
      # else
      #   defaults = user_collection_games.where(collection: default_collections)
      #   if default_collections.pluck(:id).include?(@collection_game.collection_id)
      #     defaults.destroy
      #   end
      # end
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
        if default_collections.pluck(:id).include?(@collection_game.collection_id)
          @default_game_collection.destroy
          @to_remove = @default_game_collection.collection_id
        end
      elsif !default_collections.pluck(:id).include?(@collection_game.collection_id)
        CollectionGame.create!(
          collection_id: default_collections[1].id,
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
    @to_remove_array = []
    @collection_game = CollectionGame.find_by(collection_game_params)
    if @collection_game
      default_collections = current_user.collections.includes(:games).limit(3)
      if default_collections.include?(@collection_game.collection)
        current_user.collections.each do |collection|
          if collection.id != @collection_game.collection_id && collection.games.include?(@collection_game.game)
            p @collection_game.game
            p collection.games
            CollectionGame.find_by(
              collection_id: collection.id,
              game_id: @collection_game.game.id).destroy
            @to_remove_array.push(collection.id)
          end
        end
      end
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
