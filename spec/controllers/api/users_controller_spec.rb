require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'POST #create' do
    context 'with invalid params' do
      it 'validates the presence of the user\'s username and password' do
        post :create, params: {
          user: {
            username: 'donkey',
            password: '',
            email: 'email@email.com'
          }
        }

        expect(response).to have_http_status(401)
      end

      it 'validates that the password is at least 6 characters long' do
        post :create, params: {
          user: {
            username: 'donkey',
            password: 'short',
            email: 'email@email.com'

          }
        }

        expect(response).to have_http_status(401)

      end
    end

    context 'with valid params' do
      it 'renders jbuilder template' do
        post :create, format: :json, params: {
          user: {
            username: 'donkey',
            password: 'password',
            email: 'email@email.com'

          }
        }
        expect(response).to render_template(:show)
      end

      it 'logs in the user' do
        post :create, format: :json, params: {
          user: {
            username: 'donkey',
            password: 'abcdef',
            email: 'email@email.com'

          }
        }

        user = User.find_by(username: 'donkey')
        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end
end
