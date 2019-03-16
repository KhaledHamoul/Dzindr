var express = require('express');
var router = express.Router();
var login = require('../controllers/login');

/*task list*/
//router.get('/task/list', task.list);
/*task mod*/
//router.post('/task/mod/self', task.update);

router.get('/',login.signin);
router.get('/khaled', (req, res ) => {
    res.render('pages/index');
})
module.exports = router;