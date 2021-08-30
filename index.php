<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <title>Recipes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="utils/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="utils/bootstrap/js/bootstrap.bundle.min.js" ></script>
    <script src="js/plugins.js"></script>
    <script src="js/constants.js"></script>
    <script src="js/main.js"></script>
    <script src="js/unitTesting.js"></script>
  </head>
  <body>
    <div class="card card-custom" style="width: 18rem;">
      <div class="mb-3">
        <input id="searchInput" class="form-control form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example">
      </div>
      <div class="card-body">
        <button id="searchBtn" onclick="call()" type="button" class="btn btn-primary">Search</button>
      </div>
    </div>

    <div class="card card-custom" style="width: 18rem;">
      <div class="mb-3">
        <button id="helloBtn" type="button" class="btn btn-primary json-btn" data-bs-toggle="modal" data-bs-target="#helloModal" onclick="hello()">Greetings</button>
      </div>
      <div class="card-body btn-card-body">
        
      </div>
      <div class="mb-3">
        <button id="helloBtn" type="button" class="btn btn-primary json-btn" data-bs-toggle="modal" data-bs-target="#testingModal" onclick="testing()">Unit Test</button>
      </div>
    </div>

    <div id="jsonModal" class="modal modal-dialog-scrollable">
      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Resulting Json for Recipes</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="recipeBodyJson" class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>

    <div id="ingredientsModal" class="modal modal-dialog-scrollable ing-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ingredients</h5>

            <button type="button" class="btn btn-primary ing-btn" data-bs-toggle="modal" data-bs-target="#ingredientsModalJson">Ingredients Json</button>

            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="ingredientsBody" class="modal-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody id="bodyIngredients">
                
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div id="ingredientsModalJson" class="modal modal-dialog-scrollable">
      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="ingredientsBodyJson" class="modal-body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>

    <div id="helloModal" class="modal modal-dialog-scrollable">
      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="helloBodyModal" class="modal-body">



            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>

    <div id="testingModal" class="modal modal-dialog-scrollable">
      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Request Tested</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h6>Green border means: success</h6>
            <h6>Red border means: error</h6>
            <div id="testingBodyModal" class="modal-body">



            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>

    <div id="recipe-container" class="containerList">
      
    </div>

    
  </body>
</html>
