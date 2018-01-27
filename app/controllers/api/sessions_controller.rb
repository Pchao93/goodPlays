class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user.nil?
      render json: ["Invalid username or password."], status: 401
    else
      login(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if logged_in?
      @user = current_user
      logout
      render 'api/users/show'
    else
      render json: ["No user signed in"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end


end
