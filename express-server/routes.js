//router
const router = require('express').Router();
const controllers = require('./controllers.js')

router // the endpoint
    .route('/todoList')
    .get(controllers.fetch)
    .post(controllers.post)
    .delete(controllers.delete)

    //if we have a different endpoint 
    //query 
    //params - special unique ID 

module.exports = router;
    