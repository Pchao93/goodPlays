class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)

      Collection.create(user_id: @user.id, name: "Want to Play")
      Collection.create(user_id: @user.id, name: "Have Played")
      Collection.create(user_id: @user.id, name: "Playing")
      Collection.create(user_id: @user.id, name: "My Favorites")

      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
