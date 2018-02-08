require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Goodgames
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    config.action_dispatch.default_headers = {
      'X-Frame-Options' => 'ALLOWALL'
    }

    if ENV["REDISTOGO_URL"]
      config = Goodgames::Application.config
      uri = URI.parse(ENV["REDISTOGO_URL"])

      config.cache_store = [
        :redis_store, {
          :host => uri.host,
          :port => uri.port,
          :password => uri.password,
          :namespace => "cache"
        }
      ]
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
