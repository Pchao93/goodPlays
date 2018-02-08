class Api::ReviewsController < ApplicationController

  def index
    if params[:user_id]
      @reviews = User.includes(:reviews).find_by(id: params[:user_id]).reviews.includes(:user, :game)
    elsif params[:game_id]
      @game = Game.find_by(id: params[:game_id])
      @reviews = Rails.cache.fetch("game-reviews-#{params[:game_id]}-#{@game.updated_at}") do
        @game.reviews.includes(:user).load
      end
    end
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.game_id = params[:game_id]

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    @review.old_rating = @review.rating
    if @review
      if current_user.id == @review.user_id
        if @review.update(review_params)
          render :show
        else
          render json: @review.errors.full_messages, status: 400
        end
      else
        render json: ['You do not have permission to edit this review'], status: 400
      end
    else
      render json: ['Unable to find review'], status: 404
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])

    if @review
      if current_user.id == @review.user_id
        @review.destroy
        render :show
      else
        render json: ['You do not have permission to delete this review'], status: 400
      end
    else
      render json: ['Unable to find review'], status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
