APP_ID = Rails.application.secrets.ALGOLIA_APP_ID
API_KEY = Rails.application.secrets.ALGOLIA_ADMIN_API_KEY

AlgoliaSearch.configuration = { application_id: Rails.application.secrets.ALGOLIA_APP_ID, api_key: API_KEY }