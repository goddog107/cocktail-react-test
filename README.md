# Cocktail React Test
## Install
### `yarn install`
### `yarn start`
## Answers
A) Describe the strategy used to consume the API endpoints and the data management.
  * I can use the REST API for the CRUD.
  * GET '/cocktails' // Get all
  * POST '/cocktails' // Create
  * PUT '/cocktails/{id}' // Update
  * DELETE '/cocktails/{id}' // Delete

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?
  * I have developed based on React.
  * I have used the 'react-router' and 'react-router-dom' for the soft redirect.
  * For example: 
  `<Route exact path="/" render={() => <Cocktails />} />`
  `<Route exact path="/:id" render={(props) => <Cocktail {...props} />} />`
  * I can use the same router package, it's a fast module for the SPA without reloading the site.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?
  * For the first feature, I can use the "read more results" to optimize the performance such as google search and twitter. Or I can use the pagination backend api for the less loading to show the cocktail search results.

D) Would you like to add any further comments or observations?
  * I am a Full Stack Developer.
  * I can build the powerful backend REST API and pixel perfect frontend designed pages, I can also combine two sides by using the JSON based API communication.
  * Additional: I can use the CORS, JWT Auth (or Oauth) plugins, can build the migrations and seeders for the dummy data and can use Bootstrap, JQuery datatable, JQuery notification and many other plugins to build the frontend.
  
Thank you!
