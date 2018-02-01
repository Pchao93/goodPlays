# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180201062804) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collection_games", force: :cascade do |t|
    t.integer "collection_id", null: false
    t.integer "game_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collection_id"], name: "index_collection_games_on_collection_id"
    t.index ["game_id", "collection_id"], name: "index_collection_games_on_game_id_and_collection_id", unique: true
    t.index ["game_id"], name: "index_collection_games_on_game_id"
  end

  create_table "collections", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "developers", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_developers_on_name", unique: true
  end

  create_table "games", force: :cascade do |t|
    t.string "title", null: false
    t.integer "developer_id", null: false
    t.string "image_url", null: false
    t.text "description", null: false
    t.string "amazon_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "release_date", null: false
    t.string "rating", null: false
    t.index ["developer_id"], name: "index_games_on_developer_id"
    t.index ["title"], name: "index_games_on_title", unique: true
  end

  create_table "platform_games", force: :cascade do |t|
    t.integer "game_id", null: false
    t.integer "platform_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id", "platform_id"], name: "index_platform_games_on_game_id_and_platform_id"
    t.index ["game_id"], name: "index_platform_games_on_game_id"
    t.index ["platform_id"], name: "index_platform_games_on_platform_id"
  end

  create_table "platforms", force: :cascade do |t|
    t.string "name", null: false
    t.string "abreviation", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
