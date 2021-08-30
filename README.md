### Requirements
1. Internet connection.
2. Internet browser(Mozilla, Edge, Chrome, etc).
3. PHP server as apache (You can download one for free here [XAMPP](https://www.apachefriends.org/index.html))

### How to Run

1. Download the zip project .
- Click the CODE button (top-right corner).
2. Unzip the project.
3. Paste the folder to your php server projects folder, for instance "c:xampp/htdocs".
4. Start your PHP server and go to your browser (Mozilla, Edge, Chrome, etc).
5. In the addresses bar write "your-host/recipes" for instance "localhost/recipes".

### How to Use
1. Once you enter the recipes microsite
2. Type something in the input search, like "pasta", to look for a recipe
3. Click the "Recipe Json" button to open a modal and see the resulting Json and the requested url.
4. Click on any recipe card to see its ingredients.
5. Click the "Ingredients Json" button to open a modal and see the resulting Json and the requested url.
6. Close all the previous modals clicking on the "X" button and now click the "Greetings" button open a modal and see the "Hello, World." message, requested url and resulting Json.

### Unit Testing
1. All you need to do is click in the "Unit Testing" button and you will see a modal with some requests and their responses.
2. There are 3 requesting the API for "Hello world".
- One correct, requesting the successful url to a "Hello World".
- Other 2 requesting wrong URLs, 1 doesn´t have the apikey and the other doesn´t have the correct action.
3. There a 2 requests to an extenarl API.
- One requesting a recipe successful.
- Other doesn´t have the API key added in the URL.
