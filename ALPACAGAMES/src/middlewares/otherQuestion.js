function areNotYouLogged(req, res, next){
    if(!req.session.useAreLogged){
        res.redirect('/users/login')
    }
    next()
}
module.exports = areNotYouLogged