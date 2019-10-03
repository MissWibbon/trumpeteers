var authController = require('../controllers/authcontrollers.js');
const { login } = authController;
module.exports = function (app, passport) {
    app.get('/login', login);
    // app.get('/signin', authController.signin);

    app.post('/login', passport.authenticate('local-signup', {
        successRedirect: '/game',
        //redirect to sign up lage on failure, post routes 
        failureRedirect: '/login'
    }
    ));
    app.get('/profile', isLoggedIn, authController.profile);
    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/intro',
        failureRedirect: '/login'
    }

    ));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}