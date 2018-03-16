require 'rails_helper'

RSpec.describe Api::GamesController, type: :controller do
  let(:user) do
    User.create!(username: 'user', password: 'abcdef', email: "test@test.com")
  end

  before(:each) do
    allow_message_expectations_on_nil
  end

  describe 'GET #index' do
    context 'without a user id' do
      it 'renders the games index' do
        get :index, format: :json
        expect(response).to render_template(:index)
      end
    end

    context 'when provided a user id' do
      it 'renders the games index' do
        get :index, format: :json, params: { user_id: user.id }
        expect(response).to render_template(:index)
      end
    end
  end

  describe 'GET #show' do
    context 'with valid game id' do
      it 'renders the show page' do
        get :show, format: :json, params: { id: 1 }
        expect(response).to render_template(:show)
      end
    end

    context 'with invalid game id' do
      it 'properly errors' do
        get :show, format: :json, params: { id: 0 }
        expect(response).to have_http_status(404)

      end
    end

  end

  describe 'GET #search' do
    it 'renders the search template' do
      get :search, format: :json, params: { query: "league"}
      expect(response).to render_template(:search)

    end
  end




end
