class Api::FriendshipsController < ApplicationController

  def create
    @user1 = User.find_by(id: friendship_params[:user1_id])
    @user2 = User.find_by(id: friendship_params[:user2_id])
    @user1.friends[@user2.id] = @user2.as_json(except: [:created_at, :updated_at, :password_digest, :email, :session_token, :friends])

    @user1.save

    render :show
  end

  def destroy
    @user1 = User.find_by(id: friendship_params[:user1_id])
    @user2 = User.find_by(id: friendship_params[:user2_id])
    @user1.friends.delete(@user2.id.to_s)
    # @user1.friends[@user2.id] = nil
    @user1.save
    render :show
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user1_id, :user2_id)
  end
end
