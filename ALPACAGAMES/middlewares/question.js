function areYouLogged(req, res, next){
    if(req.session && req.session.useAreLogged){
        res.redirect('/')
    }
    next()
}
module.exports = areYouLogged