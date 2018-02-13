class Api::CollectionsController < ApplicationController

  def show
    @collection = Rails.cache.fetch("collection-#{params[:id]}-#{Collection.maximum(:updated_at)}", force: false) do
      @collection = Collection.includes(games: [:platforms, :developer, :genres, reviews:[:user]]).find_by(id: params[:id])
    end
    if @collection
      @collection_games = Rails.cache.fetch("collection-games-#{params[:id]}-#{@collection.updated_at}", force: false) do
        p ["CACHE MISS CACHE MISS"]
        @collection.games
      end
      if current_user
        @user_reviews = Rails.cache.fetch("user-#{current_user.id}-#{current_user.updated_at}", force: false) do
          p ["CACHE MISS CACHE MISS"]

          current_user.reviews.includes(:game).where(game_id: @collection_games.pluck(:id)).load
        end
      end
      render :show
    else
      render json: ["Unable to find the collection with id #{params[:id]}."], status: 404
    end
  end

  def index
    if params[:user_id] != "undefined"
      user = User.find_by(id: params[:user_id])
    else
      user = current_user
    end
    if user
      @collections = Rails.cache.fetch("user-collections-#{params[:user_id]}-#{user.updated_at}", force: false) do
        p ["CACHE MISS CACHE MISS"]

        user.collections.load
      end
    else
      render json: ["Unable to find collections for the user with id #{params[:user_id]}."], status: 404
    end
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id
    if @collection.save
      render :show
    else
      render json: @collection.errors.full_messages, status: 400
    end
  end

  def update
    @collection = Collection.find_by(id: params[:id])


    if @collection
      if @collection.user_id != current_user.id
        render json: ["You do not have permission to edit this collection."], status: 400
      elsif @collection.update(collection_params)
        render :show
      else
        render json: @collection.errors.full_messages, status: 400
      end
    else
      render json: ["Unable to find the collection with id #{params[:id]}."], status: 404
    end

  end

  def destroy
    @collection = Collection.find_by(id: params[:id])
    if @collection
      if @collection.user_id != current_user.id
        render json: ["You do not have permission to delete this collection."], status: 400
      elsif ["Have Played", "Want to Play", "Playing"].include?(@collection.name)
        render json: ["You cannot delete a default collection."], status: 400
      else
        @collection.destroy
        render :show
      end
    else
      render json: ["Unable to find the collection with id #{params[:id]}."], status: 404
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:name)
  end

end
