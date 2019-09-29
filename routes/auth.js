var authController = require('../controllers/authcontrollers.js');
 
module.exports = function(app, passport) {
    app.get('/login', authController.login);
   // app.get('/signin', authController.signin);
 
    app.post('/login', passport.authenticate('local-signup', {
            successRedirect: '/game',
            failureRedirect: '/login'
        }
    ));
   app.get('/profile',isLoggedIn, authController.profile);
    app.get('/logout',authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }
 
));
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
}