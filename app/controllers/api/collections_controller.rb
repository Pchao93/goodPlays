class Api::CollectionsController < ApplicationController

  def show
    @collection = Collection.includes(games: [:platforms, :developer]).find_by(id: params[:id])
    if @collection
      render :show
    else
      render json: ["Unable to find that collection."], status: 404
    end
  end

  def index
    @collections = current_user.collections.includes(:games)
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
        render json: ["You do not have permission to edit this collection."]
      elsif @collection.update(Collection.find_by(id: params[:id]))
        render :show
      else
        render json: @collection.errors.full_messages, status: 400
      end
    else
      render json: ["Unable to find that collection."], status: 404
    end

  end

  def destroy
    @collection = Collection.find_by(id: params[:id])
    if @collection
      if @collection.user_id != current_user.id
        render json: ["You do not have permission to delete this collection."]
      else
        @collection.destroy
        render :show
      end
    else
      render json: ["Unable to find that collection."], status: 404
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:name)
  end

end
