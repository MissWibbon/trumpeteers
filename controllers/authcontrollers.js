var exports = module.exports = {}
 
exports.login = function(req, res) {
    res.render('login');
}

//exports.signin = function(req, res) {
  //  res.render('signin');
//}

// exports.profile = function(req, res) {
//     res.render('profile');
// }

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}