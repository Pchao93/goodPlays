class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.image_url = Identicon.data_url_for @user.username
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
