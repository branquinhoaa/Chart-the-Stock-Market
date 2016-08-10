var home = require('./controllers/HomeController.js')

module.exports=function(app){
  //home controllers
  app.get('/', home.main);
}