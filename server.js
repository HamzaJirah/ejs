//require dependencies
const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const path = require ('path');
const expressLayouts = require ('express-ejs-layouts');

//create instance of the app
const app = express();
//configure body parser
app.use(bodyParser());
//configure cors
app.use(cors());
//configure expressLayouts
app.use(expressLayouts);

//set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//get route
app.get('/', function(request, response){
  response.render('index', {
    people: [
      {name: 'Jirah'},
      {name: ' Hamza'}
    ]
  });

  //get about page
  app.get('/about', function(request, response){
    response.render('about');
  });
});

//port to listen on
app.listen(8000, function(){
  console.log('server started on port 8000');
});