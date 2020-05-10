const passport = require('passport')
// Only For Session Authentication !
// exports.onlyAuthUser = function(req, res, next) {
//     if(req.isAuthenticated()) {
//         return next()
//     } else {
//         return res.status(401).send({error: {auth: 'not Authenticated!'}})
//     }
// }

exports.onlyAuthUser = passport.authenticate('jwt', { session: false })
