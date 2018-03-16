require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let!(:user) do
    User.create({ username: 'donkey', password: 'abcdef', email: "email@email.com" })
  end


  describe 'POST #create' do
    context 'with invalid credentials' do
      it 'returns to sign in with an non-existent user' do
        post :create, params: {
          user: {
            username: 'donkey2',
            password: 'abcdef'
          }
        }

        expect(response).to have_http_status(401)

      end

      it 'returns to sign in on bad password' do
        post :create, params: {
          user: {
            username: 'donkey',
            password: 'notmypassword'
          }
        }

        expect(response).to have_http_status(401)

      end
    end

    context 'with valid credentials' do
      it 'renders json template on success' do
        post :create, format: :json, params: {
          user: {
            username: 'donkey',
            password: 'abcdef'
          }
        }

        expect(response).to render_template('api/users/show')
      end

      it 'logs in the user' do
        post :create, format: :json, params: {
          user: {
            username: 'donkey',
            password: 'abcdef'
          }
        }

        donkey = User.find_by(username: 'donkey')
        expect(session[:session_token]).to eq(donkey.session_token)
      end
    end
  end

  describe 'DELETE #destroy' do
    before(:each) do
      post :create, format: :json, params: {
        user: {
          username: 'donkey',
          password: 'abcdef'
        }
      }

      donkey = User.find_by(username: 'donkey')
      @session_token = donkey.session_token
    end

    it 'logs out the current user' do
      delete :destroy, format: :json
      expect(session[:session_token]).to be_nil

      donkey = User.find_by(username: 'donkey')
      expect(donkey.session_token).not_to eq(@session_token)
    end

    it 'errors when there is no current user' do
      delete :destroy, format: :json
      delete :destroy, format: :json
      expect(response).to have_http_status(404)

    end
  end
end
