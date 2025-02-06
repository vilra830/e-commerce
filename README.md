# E-Commerce - Taste Pinoy Food Hub

This application allows users to browse through different Filipino favourite foods and order them online. It has 3 pages namely - Home, Food Menu and Cart. 

The application is built with the following tech stack : 
- React
- Javascript
- Firestore 
- npm
- scss

### First Page - Home Page

It showcases a carousel of favourite Filipino food. It imorted a Carousel functionality in React to render the food images in carousel style. It is also styled using SCSS module on top of its own native styling. 

### Second Page - Food Menu

This page shows all the food products fetched from Firestore. An async getAllProducts function is called to fetch the data from Firetsore. Each food product is contained in a card with the following properties: name, image, and price (To follow - description).
When the image is clicked, user is taken to the Product Page - very  rudimentary at the moment and it requires more styling. Product Page shows details of product (To follow) and an Order button to allow users to order. When the order button is clicked a span element 
named Quantity shows up with the correct number of clicks of the button. This is stored in the context provider and is available for processing in the Cart Page.

### Third Page - Cart

At the moment, Cart page is rudimentary. It shows the Food Summary in a list. Each food in the cart contains price, quantity and total of each item. At the bottom, the Total of all items and a Process Order button is shown. 
When the button is clicked - it shows an alert that order is processed successfully ( assumption - nothing is wrong with order ). It then calls an async updateOrder function to update the quantity of the food products in Firestore. 

## Challenges

Junior Dev followed through the coach's video on Firestore to build the application. 
Context Provider - how to make data available in different pages. In abstract it is understandable and seemed achievable however, as I start to implement different functionalities - this is where I get stuck sometimes. 
Fetching data from Firestore - f

## What's next?
- validation
- error handling
- more styling
- testing
- add more features
- separate the cart context provider and product provider to make code easier to read and understand.
- use query hooks to replace clunkier code with a few lines of code
  
  

  ## Known bugs that will be dealt with in the future
  - When quantity is clicked, the quantity prop is shared among all products. It should stay with the individual product selected.
  - No checking of quantity when user clicks more than the available stock. A condition should be added to check if the number of product quantity is more than the number of stock. It should disable the button when it goes beyond 
  - Logo does not appear sometimes.
  - 
  
