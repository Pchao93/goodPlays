[goodPlays](https://goodplays.herokuapp.com)
======

goodPlays is a web application for collecting and rating games. As games have cemented themselves into the popular culture, it is high time for a place to gather enthusiasts across platforms into one community. goodplays aims to provide a proof-of-concept for such an application, providing a clean and modern interface for users to easily browse, search, collect, and rate the games they love (or hate!). This app is inspired by both goodreads and Twitch, sites that bring hobbyist communities together in different ways. 

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
   * Routing, Controllers, and Model: Rails (v 5.1.4)
   * Auth: hand-rolled using BCrypt (v 3.1.7)
 * Frontend
   * React (v 16.2.0) using a redux implementation pattern
   * jQuery used only for AJAX requests
   * Backend interaction done with jBuilder
   * Styling done with SCSS
   
   
 ## Highlighted Features
 
   Shelf components are designed to meet the goal of minimal navigation for maximum accessibility, and come with many modular features designed to let a user easily create or update their relationships between their profiles, games and collections. Two are highlighted here:
   
 #### Collection Add-Remove Dropdown
  
  The collection button is the component that gives users both convenience and full autonomy over their collections. The button either displays the default collection option ("want to play") for easy addition, or shows the current played status of the game. Changes made with this button or the accompanying dropdown menu occur immediately, and the backend CollectionGame model handles the logic for allowing a game to appear in only one default collection. 
 
 #### Review Ratings
   The review rating component was designed to allow users to easily rate games outside of the individual game view. As users may or may not have rated a game, each rating component contains conditional logic to either update or create a review. The rating component is wrapped in a container that *connects* it to the store (using react-redux) where it will find a game and associated reviews using a bookId prop passed down from its parent, the BookItemDetails component. In the case of reviews, a selector was defined to pull out the current user's reviews, based on the bookId and the state's currentUser data:
   
   
    Passed-in state:
    
      ```game: state.entities.games[ownProps.bookId],
      currentUser: state.session.currentUser,
      review: selectBookReview(state, ownProps.bookId, state.session.currentUser.id),```
       
       
     Review selector (creates either a blank review template for the *create* review action, or the user review for the *update* action:
     
     ```selectBookReview = (state, bookId, userId) => {
           let game = state.entities.games[bookId];
           let blankReview = {
             book_id: bookId,
             user_id: userId,
             rating: 0,
             title: "",
             body: "",
           };
           if (game) {
             let review = game.reviews.filter( (review) => {
               return review.user_id === userId;
             })[0];
             if (review) {
               return review;
             } else {
               return blankReview;
             }
           } else {
             return blankReview;
           }
         };```
         
## Project Plan

Future updates to the app will include:
  * A tag show view, which groups together all games with matching tags
  * Tracking individual user tags, allowing users to keep a collection of their own tags, and displaying only the most common tags on the game show page
  * User profiles (including a user profile photo and recent activity)
  * User friend feed, showing users a list of their friends' recent game activities
    