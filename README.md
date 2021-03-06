[goodPlays](https://goodplays.herokuapp.com/)
======

![goodPlays Logo](https://s3-us-west-1.amazonaws.com/experience.images/goodPlays+logo.png)

goodPlays is a web application for collecting and rating games. As games have cemented themselves into the popular culture, it is high time for a place to gather enthusiasts across platforms into one community. goodPlays aims to provide a proof-of-concept for such an application, providing a clean and modern interface for users to easily browse, search, collect, and rate the games they love (or hate!). This app is inspired by both goodreads and Twitch, sites that bring hobbyist communities together in different ways.

## Contents
[Features](#features) | [Technologies Used](#technologies-used) | [Highlighted Features](#highlighted-features) | [Project Plan](#project-plan)

## Features
  * Games
    * Users can view individual games of their choosing, selected from an index of games, their own collections, or through search.
    * Individual game pages contain detailed information related to each game, a summary of the game, user reviews, and the current top streams for the game on Twitch.
  * Game Collections
    * Collections are lists of games that allow users to categorize their playing history for display to others.  
    * Collections are accessible to the user through the sidebar, where they can also create new collections.
    * When they create their account, users automatically start out with four default collections, for games they 'have played', games they are currently 'playing', games users 'want to play', and a user's favorite games.
    * Users can add games to these collections at their leisure from any page the game is displayed.
  * Reviews
    * Users can choose to rate games from anywhere on the site, whether it is a collection, an index page, or a specific game's page.
    * In a specific game's page, user's can pair their ratnig with a detailed text review.
  * Search
    * Users have access to a search bar, which allows users to search across game Titles.
    * Search is always accessible through the nav bar, and results are ranked by popularity on Twitch.
  * Twitch Integration
    * Each game's page is also populated with the top five streams for that game based on current Twitch viewership.
    * Users can watch the stream directly from within the site.

## Technologies Used
 * Backend
   * Database: PostgreSQL (v 0.18)
   * Cache: Redis
   * Seeding: BeautifulSoup4 and Selenium
   * Routing, Controllers, and Model: Rails (v 5.1.4)
   * Auth: hand-rolled using BCrypt (v 3.1.7)
 * Frontend
   * React (v 16.2.0) using a redux implementation pattern
   * jQuery used only for AJAX requests
   * Backend interaction done with jBuilder
   * Styling done with SCSS


 ## Highlighted Features

 #### Collection Add-Remove Dropdown

  The collection button is the component that gives users both convenience and full autonomy over their collections. The button either displays the default collection option ("want to play") for easy addition, or shows the current played status of the game. Changes made with this button or the accompanying dropdown menu occur immediately, and the backend CollectionGame model handles the logic for allowing a game to appear in only one default collection.

  ![Collection Button Demo](https://media.giphy.com/media/l4pTlbR7hlkXUzv44/giphy.gif)

 #### Review Ratings
   The review button is designed for intuitive rating, allowing users to select a star rating out of five. As the user hover's over the button, different numbers of stars are highlighted, representing the intended score with no text. The interface also allows users to edit their reviews simply by clicking the button once again. The review backend model also contains logic to insert the game into a default collection if the user has not already done so, as well as destroy a review if the user deletes the game from their collection. The game views always display both the user's review, and the average rating.

   ![](https://media.giphy.com/media/xThtahsmCEOW4tfvtC/giphy.gif)

  #### Twitch Integration
  Twitch is one of the largest cross-platform gaming communities in the world. goodPlays uses Twitch's kraken API to identify top streamers for each game and embed them directly into the site using interactive inline frames. The goal of this feature is to provide users with a new kind of review: a live stream. Through Twitch, users are able to get a sense of a game far better than through scores and reviews alone, and the site would feel incomplete without it.

  ![](https://media.giphy.com/media/3ohs4epp4b974XFfDG/giphy.gif)

  #### Redis Caching
  With over 200 games and almost 5,000 reviews, managing the backend data flow is critical to ensuring a smooth user experience on the front end. Every significant data pull from the backend is cached using keys based on the entity being cached, unique ids, and a timestamp to ensure freshness of cached data. Users read many more game reviews than they write, so reviews, collections, and the game index are cached heavily.




## Project Plan

Future updates to the app will include:
  * Expanding search to cover developers, genres, and more
  * Allow users to give their own tags, ultimately building towards user based relevance search.
  * Creating user profiles and friend relationships to make sharing even easier than ever.
  * Background tasks to keep caches warm during lower traffic periods.
  * Add pagination or infinite scrolling to game index view
  * Add messaging and chat through websocket or the Twitch API.
  * Notifications and timelines based on community happenings.
